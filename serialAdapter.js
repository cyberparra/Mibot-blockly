var SerialPort = require('serialport');
var microbits = [];
var microbit = null;
// callback approach
SerialPort.list(function (err, ports) {
  ports.forEach(function(port) {
    if (port.pnpId != undefined && port.pnpId.indexOf("ARM_DAPLink") > -1) {
      microbits.push(port.comName);
    }
  });


  microbits.forEach(function(comName) {
    console.log("Found Micro:bit at " + comName);
  });
  if (microbits.length > 0)
    microbit = new SerialPort(microbits[0], {baudRate: 115200});

});
