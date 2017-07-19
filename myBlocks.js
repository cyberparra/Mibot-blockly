const FORWARD = 2;
const BACKWARD = 3;
const RIGHT = 1;
const LEFT = 0;
const STOP = 5;
const MIBOTON = 6;
const MIBOTOFF = 7;
const SPINL = 8;
const SPINR = 9;
const MOFFL = 10;
const MOFFR =11;
const MONLF = 12;
const MONRF = 13;
const MONLB = 14;
const MONRB = 15;



Blockly.JavaScript['wait'] = function(block) {
  var seconds = Blockly.JavaScript.valueToCode(block, 'SECONDS', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'wait('+seconds+');\n';
  return code;
};

Blockly.JavaScript['motor_on'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
   var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  var code;
  if (dropdown_motor == 'L') {
    if (dropdown_direction == 'F') {
        code = 'sendCommand('+MONLF+');\n';
    }
    else {
      code = 'sendCommand('+MONLB+');\n';
    }
  }
  else if (dropdown_motor == 'R') {
    if (dropdown_direction == 'F') {
        code = 'sendCommand('+MONRF+');\n';
    }
    else {
      code = 'sendCommand('+MONRB+');\n';
    }
    };

  return code;
};

Blockly.JavaScript['motor_off'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
//  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  var code;

  if (dropdown_motor == 'L') {
    code = 'sendCommand('+MOFFL+');\n';
    }
  else if (dropdown_motor == 'R'){
      code = 'sendCommand('+MOFFR+');\n';
    }
  return code;
};

Blockly.JavaScript['spin'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  var code;
  if (dropdown_direction == 'L')
    code = 'sendCommand('+SPINL+');\n';
    else {
      code = 'sendCommand('+SPINR+');\n';
    }
  return code;
};

Blockly.JavaScript['penup'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['pendown'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['forward'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'sendCommand('+FORWARD+');\n';
  return code;
};

Blockly.JavaScript['backward'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'sendCommand('+BACKWARD+');\n';
  return code;
};

Blockly.JavaScript['left'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'sendCommand('+LEFT+');\n';
  return code;
};

Blockly.JavaScript['right'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'sendCommand('+RIGHT+');\n';
  return code;
};

Blockly.JavaScript['stop'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'sendCommand('+STOP+');\n';
  return code;
};
