let tableDd = [];
tables.forEach(function(item){
	tableDd.push([item,item]);
});

let columnDd = [['*','*']];
columns.forEach(function(item){
	columnDd.push([item,item]);
});

const blocksJson = [
	{
		'type': 'block_where',
		'message0': 'WHERE %1',
		'args0': [
			{
				'type': 'input_statement',
				'name': 'NAME'
			}
		],
		'previousStatement': 'select',
		'nextStatement': null,
		'colour': 120,
		'tooltip': '',
		'helpUrl': ''
	},
	{
		'type': 'block_select',
		'message0': 'SELECT %1 FROM %2',
		'args0': [
			{
				'type': 'input_statement',
				'name': 'inputSelect'
			},
			{
				'type': 'input_value',
				'name': 'inputFrom',
				'check': 'String'
			}
		],
		'nextStatement': 'select',
		'colour': 230,
		'tooltip': 'This is the basis for the SQL Statement',
		'helpUrl': ''
	},
	{
		'type': 'block_text_comparison',
		'message0': '%1 %2 %3 %4',
		'args0': [
			{
				'type': 'input_value',
				'name': 'NAME'
			},
			{
				'type': 'field_dropdown',
				'name': 'NAME',
				'options': [
					[
						'LIKE',
						'LIKE'
					],
					[
						'NOT LIKE',
						'NOT LIKE'
					],
					[
						'=',
						'='
					],
					[
						'>',
						'>'
					],
					[
						'<',
						'<'
					],
					[
						'<=',
						'<='
					],
					[
						'>=',
						'>='
					]
				]
			},
			{
				'type': 'input_dummy'
			},
			{
				'type': 'input_value',
				'name': 'NAMEL'
			}
		],
		'previousStatement': null,
		'nextStatement': null,
		'colour': 230,
		'tooltip': '',
		'helpUrl': ''
	},
	{
		'type': 'block_number_comparison',
		'message0': '%1 %2 %3 %4',
		'args0': [
			{
				'type': 'input_value',
				'name': 'NAME'
			},
			{
				'type': 'field_dropdown',
				'name': 'NAME',
				'options': [
					[
						'=',
						'equals'
					],
					[
						'>',
						'greaterthan'
					],
					[
						'<',
						'lessthan'
					]
				]
			},
			{
				'type': 'input_dummy'
			},
			{
				'type': 'input_value',
				'name': 'NAME'
			}
		],
		'previousStatement': null,
		'nextStatement': null,
		'colour': 230,
		'tooltip': '',
		'helpUrl': ''
	},
	{
		'type': 'block_join',
		'message0': 'JOIN %1',
		'args0': [
			{
				'type': 'input_statement',
				'name': 'NAME'
			}
		],
		'previousStatement': [
			'select',
			'String'
		],
		'nextStatement': 'String',
		'colour': 260,
		'tooltip': '',
		'helpUrl': ''
	},
	{
		'type': 'block_orderby',
		'message0': 'ORDER BY %1',
		'args0': [
			{
				'type': 'input_statement',
				'name': 'NAME'
			}
		],
		'previousStatement': [
			'select',
			'String'
		],
		'nextStatement': 'String',
		'colour': 210,
		'tooltip': '',
		'helpUrl': ''
	},
	{
		'type': 'block_groupby',
		'message0': 'GROUP BY %1',
		'args0': [
			{
				'type': 'input_statement',
				'name': 'NAME'
			}
		],
		'previousStatement': [
			'select',
			'String'
		],
		'nextStatement': 'String',
		'colour': 65,
		'tooltip': '',
		'helpUrl': ''
	},
	{
		'type': 'block_having',
		'message0': 'HAVING %1',
		'args0': [
			{
				'type': 'input_statement',
				'name': 'NAME'
			}
		],
		'previousStatement': [
			'select',
			'String'
		],
		'nextStatement': 'String',
		'colour': 345,
		'tooltip': '',
		'helpUrl': ''
	},
	{
		'type': 'block_select_join',
		'message0': 'SELECT %1 FROM %2 JOIN %3',
		'args0': [
			{
				'type': 'input_statement',
				'name': 'inputSelect'
			},
			{
				'type': 'input_value',
				'name': 'inputFrom',
				'check': 'String'
			},
			{
				'type': 'input_statement',
				'name': 'inputJoin'
			}
		],
		'nextStatement': 'select',
		'colour': 230,
		'tooltip': 'This is the basis for the SQL Statement',
		'helpUrl': ''
	},
	{
		'type': 'block_join_condition',
		'message0': '%1 ON %2 %3 . %4 %5 = %6 %7 . %8 %9',
		'args0': [
			{
				'type': 'input_value',
				'name': 'table'
			},
			{
				'type': 'input_dummy'
			},
			{
				'type': 'input_value',
				'name': 'table1'
			},
			{
				'type': 'input_dummy'
			},
			{
				'type': 'input_value',
				'name': 'col1'
			},
			{
				'type': 'input_dummy'
			},
			{
				'type': 'input_value',
				'name': 'table2'
			},
			{
				'type': 'input_dummy'
			},
			{
				'type': 'input_value',
				'name': 'col2'
			}
		],
		'previousStatement': null,
		'nextStatement': null,
		'colour': 230,
		'tooltip': '',
		'helpUrl': ''
	}];

Blockly.Blocks['block_columnselectdd'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(columnDd), 'NAME');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(70);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.Blocks['block_tableselectdd'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(tableDd), 'NAME');
		this.setOutput(true, null);
		this.setColour(180);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.Blocks['block_columnaggdd'] = {
	init: function() {
		let aggregates = [['AVG','AVG'],['COUNT','COUNT'],['MIN','MIN'],['MAX','MAX'],['SUM','SUM']];
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(aggregates), 'AGG');
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(columnDd), 'COL');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(70);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.Blocks['block_textselect'] = {
	init: function() {
		let statements = [['AND','AND'],['OR','OR']];
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(statements), 'ST');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(20);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.Blocks['block_textinput'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(columnDd), 'NAME');
		this.setOutput(true, null);
		this.setColour(70);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.Blocks['block_join_tables'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(tableDd), 'TAB');
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(columnDd), 'COL');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(70);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};