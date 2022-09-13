import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, fonts, width} from '../../../utils/globalStyles';
import DatePicker from '../../posts/content/form/date_picker';
import PricePreview from './price_preview';

const PriceContainer = ({rental_fee, deposit, commission_fee, duration}) => {
  const now = new Date();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(now.setDate(now.getDate() + duration)),
  );
  const [rentalDate, setRentalDate] = useState(0);

  useEffect(() => {
    const diff = endDate.getTime() - startDate.getTime();
    setRentalDate(diff / (1000 * 60 * 60 * 24));
  }, [endDate, startDate]);

  return (
    <View style={styles.block}>
      {/* <Text style={styles.title}>예상 대여 기간을 입력해 보세요.</Text> */}
      <DatePicker
        title={'예상 대여 기간을 입력해 보세요.'}
        startDate={startDate}
        endDate={endDate}
        onChangeStartDate={setStartDate}
        onChangeEndDate={setEndDate}
      />
      <PricePreview
        title={'예상 대여 일수'}
        desc={`최소 ${duration}일 이상 대여해야 해요.`}
        value={rentalDate}
        errorMessage={rentalDate < duration}
        unit={'일'}
      />
      <PricePreview
        title={'예상 대여가'}
        desc={'채팅을 통해 거래 가격을 확정해 주세요.'}
        value={(rentalDate * rental_fee).toLocaleString('ko-KR')}
        unit={'원'}
      />
      <PricePreview
        title={'보증금'}
        desc={'물건을 반납하면 다시 돌려받아요.'}
        value={deposit.toLocaleString('ko-KR')}
        unit={'원'}
      />
      <PricePreview
        title={'결제 수수료'}
        desc={'온정 측에 결제하는 서비스 이용 금액이에요.'}
        value={commission_fee.toLocaleString('ko-KR')}
        unit={'원'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {flex: 1, paddingVertical: width * 48},

  title: {...fonts.H5, color: colors['$gray-2'], marginBottom: width * 12},
});

export default PriceContainer;
