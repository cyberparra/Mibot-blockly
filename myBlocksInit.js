Blockly.Blocks['startrobot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start Robot");
    this.appendStatementInput("NAME")
        .setCheck("String")
        .appendField("Blocco");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['myblock'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("myBlock");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Test');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendValueInput("SECONDS")
        .setCheck("Number")
        .appendField("wait");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Test');
    this.setHelpUrl('');
  }
};
