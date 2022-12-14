import React from 'react';
import {useMemo, useRef, useCallback} from 'react';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import {
  TapGestureHandler,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Reanimated, {
  cancelAnimation,
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Platform.select({
  android: Dimensions.get('screen').height - 30,
  ios: Dimensions.get('window').height,
});

const PAN_GESTURE_HANDLER_FAIL_X = [-SCREEN_WIDTH, SCREEN_WIDTH];
const PAN_GESTURE_HANDLER_ACTIVE_Y = [-2, 2];

const _CaptureButton = ({
  cameraRef,
  onMediaCaptured,
  minZoom,
  maxZoom,
  cameraZoom,
  flash,
  enabled,
  setIsPressingButton,
  style,
  ...props
}) => {
  const pressDownDate = useRef(undefined);
  const isRecording = useRef(false);
  const takePhotoOptions = useMemo(
    () => ({
      photoCodec: 'jpeg',
      qualityPrioritization: 'speed',
      flash: flash,
      quality: 90,
      skipMetadata: true,
    }),
    [flash],
  );
  const isPressingButton = useSharedValue(false);
  const recordingProgress = useSharedValue(0);

  const takePhoto = useCallback(async () => {
    try {
      if (cameraRef.current == null) {
        throw new Error('Camera ref is null!');
      }

      console.log('Taking photo...');
      const photo = await cameraRef.current.takePhoto(takePhotoOptions);
      onMediaCaptured(photo, 'photo');
    } catch (e) {
      console.error('Failed to take photo!', e);
    }
  }, [cameraRef, onMediaCaptured, takePhotoOptions]);

  // ------
  const onStoppedRecording = useCallback(() => {
    isRecording.current = false;
    cancelAnimation(recordingProgress);
    console.log('stopped recording video!');
  }, [recordingProgress]);
  const stopRecording = useCallback(async () => {
    try {
      if (cameraRef.current == null) {
        throw new Error('Camera ref is null!');
      }

      console.log('calling stopRecording()...');
      await cameraRef.current.stopRecording();
      console.log('called stopRecording()!');
    } catch (e) {
      console.error('failed to stop recording!', e);
    }
  }, [cameraRef]);
  const startRecording = useCallback(() => {
    try {
      if (cameraRef.current == null) {
        throw new Error('Camera ref is null!');
      }

      console.log('calling startRecording()...');
      cameraRef.current.startRecording({
        flash: flash,
        onRecordingError: error => {
          console.error('Recording failed!', error);
          onStoppedRecording();
        },
        onRecordingFinished: video => {
          console.log(`Recording successfully finished! ${video.path}`);
          onMediaCaptured(video, 'video');
          onStoppedRecording();
        },
      });
      // TODO: wait until startRecording returns to actually find out if the recording has successfully started
      console.log('called startRecording()!');
      isRecording.current = true;
    } catch (e) {
      console.error('failed to start recording!', e, 'camera');
    }
  }, [cameraRef, flash, onMediaCaptured, onStoppedRecording]);
  //#endregion

  // ------

  const tapHandler = useRef();
  const onHandlerStateChange = useCallback(
    async ({nativeEvent: event}) => {
      console.debug(`state: ${Object.keys(State)[event.state]}`);

      switch (event.state) {
        case State.BEGAN: {
          // enter "recording mode"
          recordingProgress.value = 0;
          isPressingButton.value = true;
          const now = new Date();
          pressDownDate.current = now;
          setTimeout(() => {
            if (pressDownDate.current === now) {
              // user is still pressing down after 200ms, so his intention is to create a video
              startRecording();
            }
          }, 200);
          setIsPressingButton(true);
          return;
        }
        case State.END:
        case State.FAILED:
        case State.CANCELLED: {
          // exit "recording mode"
          try {
            if (pressDownDate.current == null) {
              throw new Error('PressDownDate ref .current was null!');
            }
            const now = new Date();
            const diff = now.getTime() - pressDownDate.current.getTime();
            pressDownDate.current = undefined;
            if (diff < 200) {
              // user has released the button within 200ms, so his intention is to take a single picture.
              await takePhoto();
            } else {
              // user has held the button for more than 200ms, so he has been recording this entire time.
              await stopRecording();
            }
          } finally {
            setTimeout(() => {
              isPressingButton.value = false;
              setIsPressingButton(false);
            }, 500);
          }
          return;
        }
        default:
          break;
      }
    },
    [
      isPressingButton,
      recordingProgress,
      setIsPressingButton,
      startRecording,
      stopRecording,
      takePhoto,
    ],
  );

  const panHandler = useRef();
  const onPanGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.startY = event.absoluteY;
      const yForFullZoom = context.startY * 0.7;
      const offsetYForFullZoom = context.startY - yForFullZoom;

      // extrapolate [0 ... 1] zoom -> [0 ... Y_FOR_FULL_ZOOM] finger position
      context.offsetY = interpolate(
        cameraZoom.value,
        [minZoom, maxZoom],
        [0, offsetYForFullZoom],
        Extrapolate.CLAMP,
      );
    },
    onActive: (event, context) => {
      const offset = context.offsetY ?? 0;
      const startY = context.startY ?? SCREEN_HEIGHT;
      const yForFullZoom = startY * 0.7;

      cameraZoom.value = interpolate(
        event.absoluteY - offset,
        [yForFullZoom, startY],
        [maxZoom, minZoom],
        Extrapolate.CLAMP,
      );
    },
  });

  const shadowStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          scale: withSpring(isPressingButton.value ? 1 : 0, {
            mass: 1,
            damping: 35,
            stiffness: 300,
          }),
        },
      ],
    }),
    [isPressingButton],
  );

  const buttonStyle = useAnimatedStyle(() => {
    let scale;
    if (enabled) {
      if (isPressingButton.value) {
        scale = withRepeat(
          withSpring(1, {
            stiffness: 100,
            damping: 1000,
          }),
          -1,
          true,
        );
      } else {
        scale = withSpring(0.9, {
          stiffness: 500,
          damping: 300,
        });
      }
    } else {
      scale = withSpring(0.6, {
        stiffness: 500,
        damping: 300,
      });
    }

    return {
      opacity: withTiming(enabled ? 1 : 0.3, {
        duration: 100,
        easing: Easing.linear,
      }),
      transform: [{scale: scale}],
    };
  }, [enabled, isPressingButton]);

  return (
    <TapGestureHandler
      enabled={enabled}
      ref={tapHandler}
      onHandlerStateChange={onHandlerStateChange}
      shouldCancleWhenOutside={false}
      maxDurationMs={99999999} // <-- this prevents the TapGestureHandler from going to State.FAILED when the user moves his finger outside of the child view (to zoom)
      simultaneousHandlers={panHandler}>
      <Reanimated.View {...props} style={[buttonStyle, style]}>
        <PanGestureHandler
          enabled={enabled}
          ref={panHandler}
          failOffsetX={PAN_GESTURE_HANDLER_FAIL_X}
          activeOffsetY={PAN_GESTURE_HANDLER_ACTIVE_Y}
          onGestureEvent={onPanGestureEvent}
          simultaneousHandlers={tapHandler}>
          <Reanimated.View style={styles.flex}>
            <Reanimated.View style={[styles.shadow, shadowStyle]} />
            <View style={styles.button} />
          </Reanimated.View>
        </PanGestureHandler>
      </Reanimated.View>
    </TapGestureHandler>
  );
};

export const CaptureButton = React.memo(_CaptureButton);

// export default CaptureButton;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  shadow: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: '#e34077',
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    borderWidth: 7,
    borderColor: 'white',
  },
});
