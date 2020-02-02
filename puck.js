function onInit() {
  // Leave 30 seconds before the speaker becomes
  // unconnectable via the Web IDE.
  setTimeout(function() {
    NRF.setServices({
      "5c02000124f80e9c425c263166152320" : {
        "5c02000224f80e9c425c263166152320" : {
          writable : true,
          onWrite : function(evt) {
            var cmd = evt.data[0];
            if (cmd===0) turnOff();
            else if (cmd==1) turnOn(_=>setVolume(4));
            else if (cmd==2) setVolume(1);
            else if (cmd==3) setVolume(-1);
          }
        }
      }
    },{uart:false});
    NRF.setAdvertising({},{name:"IkeaSpk"});
  }, 30*1000);
}
