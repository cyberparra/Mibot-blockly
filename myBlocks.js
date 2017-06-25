// Define your custom blocks generated code

Blockly.JavaScript['wait'] = function(block) {
  var seconds = Blockly.JavaScript.valueToCode(block, 'SECONDS', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'wait('+seconds+');\n';
  return code;
};
