import { NativeModules } from 'react-native';
var { SC_sdk } = NativeModules;


var SC = {
  connect() {
    SC_sdk.SC_login((error, events) => {
      console.log(events)
    });
  }
};

export default SC;