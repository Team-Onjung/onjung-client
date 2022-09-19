// import React, {forwardRef} from 'react';
// import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
// import {width, colors} from '../../../../../utils/globalStyles';
// import {MonoCameraIcon, PhtohIcon} from '../../../../svg';
// import {RBSheet} from 'react-native-raw-bottom-sheet';

// const ImgModal = forwardRef(
//   ({onLaunchCamera, onLaunchImageLibrary}, bottomSheetRef) => {
//     return (
//       <RBSheet
//         ref={bottomSheetRef}
//         animationType="slide"
//         // closeOnDragDown={true}
//         customStyles={{
//           container: {
//             borderTopLeftRadius: width * 20,
//             borderTopRightRadius: width * 20,
//             height: '20%',
//             paddingTop: width * 20,
//             paddingLeft: width * 24,
//             justifyContent: 'flex-start',
//           },
//         }}>
//         <Pressable
//           style={styles.actionButton}
//           android_ripple={{color: colors.$white}}
//           onPress={() => {
//             onLaunchCamera();
//           }}>
//           <MonoCameraIcon style={styles.icon} />
//           <Text style={styles.modalText}>사진 촬영</Text>
//         </Pressable>
//         <Pressable
//           style={styles.actionButton}
//           android_ripple={{color: colors.$white}}
//           onPress={() => {
//             onLaunchImageLibrary();
//           }}>
//           <PhtohIcon style={styles.icon} />
//           <Text style={styles.modalText}>사진 선택</Text>
//         </Pressable>
//       </RBSheet>
//     );
//   },
// );

// const styles = StyleSheet.create({
//   background: {
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   whiteBox: {
//     width: width * 300,
//     backgroundColor: 'white',
//     borderRadius: 4,
//     elevation: 2,
//   },

//   actionButton: {
//     padding: width * 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     marginRight: width * 8,
//   },
//   text: {
//     fontSize: width * 17,
//     color: colors['$gray-4'],
//     marginLeft: width * 8,
//   },
// });

// export default ImgModal;
