import {View, TouchableOpacity, Text, Switch, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {CommonStyles} from '../../styles/CommonStyles';
import {styles} from './styles';
import GoBackHeader from '../common/GoBackHeader';
import {useNavigation} from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const SettingComponent = () => {
  const navigation = useNavigation();
  const [timeString, setTimeString] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const showDatePicker = () => {
    setTimePickerVisibility(true);
  };
  // const notificationTime = useSelector(
  //   state => state.GetDevice.data.notificationTime,
  // );
  const handleConfirm = date => {
    hideTimePicker();
    setTimeString(date);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const NotificationOn = () => {
    const time = formateTime(timeString);
    const res = !timeString.length ? notificationTime : time;
    const notificationData = {
      isNotification: isNotification,
      notificationTime: res,
    };
    const deviceId = DeviceInfo.getUniqueId();
    handleSave(deviceId, notificationData).then(res => {
      showToast('Successfully Saved!');
      navigation.goBack();
    });
  };

  const formateTime = time => {
    const outputTime = moment(time).format('H');
    return outputTime;
  };
  return (
    <View style={styles.settingScreen}>
      <SafeAreaView>
        <View style={styles.headerFlex}>
          <GoBackHeader />
          <Text style={styles.settingHeaderTitle}>Settings</Text>
        </View>
        <View style={[CommonStyles.spaceBetween, styles.SettingOptions]}>
          <View>
            <Text style={styles.notificationHeading}>Notification</Text>
            <Text style={styles.notificationSubHeading}>
              Turn on/ off daily quotes alerts
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: '#AA67DD'}}
              thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
              ios_backgroundColor="#DDDDDD"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={[CommonStyles.spaceBetween, styles.SettingOptions]}>
          <View>
            <Text style={styles.notificationHeading}>Daily Quote Time</Text>
            <Text style={styles.notificationSubHeading}>
              Select at what time you want to receive quote of the day
            </Text>
          </View>
          <View style={styles.timeBtn}>
            <TouchableOpacity
              hitSlop={{
                top: 15,
                right: 15,
                left: 15,
                bottom: 15,
              }}
              style={styles.timeStyle}
              onPress={showDatePicker}>
              {/* <Text style={styles.timeText}>
                {!timeString.toString()
                  ? notificationTime
                  : formateTime(timeString)}
              </Text> */}
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              display="spinner"
              is24Hour={true}
              headerTextIOS={'Pick a Time'}
              onConfirm={handleConfirm}
              onCancel={hideTimePicker}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SettingComponent;
