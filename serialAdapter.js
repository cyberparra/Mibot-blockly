var SerialPort = require('serialport');
var microbits = [];
var microbit = null;


connectMicrobit();

function connectMicrobit() {
  microbit = null;
  microbits = [];
  SerialPort.list(function (err, ports) {
    
    ports.forEach(function(port) {
      if (port.pnpId != undefined && port.pnpId.indexOf("ARM_DAPLink") > -1) {
        microbits.push(port.comName);
      }
    });


    microbits.forEach(function(comName) {
      console.log("Found Micro:bit at " + comName);
    });
    if (microbits.length > 0) {
      microbit = new SerialPort(microbits[0], {baudRate: 115200}, function (err) {
        if (err) {
            reconnectOnError(err);
          }
      });

      microbit.on('open', function() {
        console.log("Connected to " + microbit.path + " @ " +microbit.baudRate)
        // var readline = Readline({delimiter: '\n'});
        // readline.on('error', function(err) {console.log("ERRRR")});
        // var parser = microbit.pipe(readline);
        // parser.on('data', dataReceived);
        // parser.on('error', dataReceived);
      });
      microbit.on('close', function(msg) {
        reconnectOnError("connection closed:\n\t" + msg)
      });
      microbit.on('error', function(err) {
        reconnectOnError("connection error:\n\t" + err)
      });
    } else {
      reconnectOnError("No connected microbit found :-(\nConnect your micro:bit, wait a few seconds an push OK");
    }

  });
}

function reconnectOnError(msg) {
  console.log(msg);
  alert("Something went wrong: reset or reconnect your micro:bit and push OK when it stops blinking at all!");
  connectMicrobit();
}
