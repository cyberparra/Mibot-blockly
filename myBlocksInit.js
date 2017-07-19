Blockly.Blocks['motor_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Motor ON")
        .appendField("motor")
        .appendField(new Blockly.FieldDropdown([["Left","L"], ["Right","R"]]), "motor")
        .appendField("direction")
        .appendField(new Blockly.FieldDropdown([["Forward","F"], ["Backward","B"]]), "direction");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('turn motor ON');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['motor_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Motor OFF")
        .appendField("motor")
        .appendField(new Blockly.FieldDropdown([["Left","L"], ["Right","R"]]), "motor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('turn motor OFF');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['spin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SPIN")
        .appendField("direction")
        .appendField(new Blockly.FieldDropdown([["Left","L"], ["Right","R"]]), "direction");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['penup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PEN UP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['pendown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PEN DOWN");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['forward'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("FORWARD");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('move Mibot forward');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['backward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("BACKWARD");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('move Mibot back');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LEFT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('move Mibot left');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RIGHT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Move Mibot right');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("STOP");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('stop Mibot');
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
    this.setTooltip('Wait specified ammout of seconds');
    this.setHelpUrl('');
  }
};
