import { NativeModules } from 'react-native';
var { SC_sdk } = NativeModules;


var SC = {
  connect() {
    SC_sdk.SC_login((error, userID) => {
      console.log(userID)
      
      let SC_ID = "ebc8467d2ae245181b131d34b7273c20"
      fetch("https://api.soundcloud.com/users/" + userID + "?client_id=" + SC_ID).then((r) => console.log(r.json()))
    });
  }
};

export default SC;