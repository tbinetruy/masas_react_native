import { NativeModules } from 'react-native';
var { SC_sdk } = NativeModules;


var SC = {
  connect() {
    SC_sdk.addEvent('Birthday Party', '4 Privet Drive, Surrey', new Date().toISOString());
  }
};

export default SC;