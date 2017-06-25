// Define you custom blocks

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendValueInput("SECONDS")
        .setCheck("Number")
        .appendField("wait");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Wait specified ammout of seconds');
    this.setHelpUrl('');
  }
};
