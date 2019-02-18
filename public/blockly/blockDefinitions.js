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
				'name': 'NAME',
				'check': 'logic'
			}
		],
		'previousStatement': 'statement',
		'nextStatement': 'statement',
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
				'name': 'inputSelect',
				'check': 'column'
			},
			{
				'type': 'input_value',
				'name': 'inputFrom',
				'check': 'table'
			}
		],
		'nextStatement': 'statement',
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
		'previousStatement': 'logic',
		'nextStatement': 'logic',
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
		'previousStatement': 'logic',
		'nextStatement': 'logic',
		'colour': 230,
		'tooltip': '',
		'helpUrl': ''
	},
	// {
	// 	'type': 'block_join',
	// 	'message0': 'JOIN %1',
	// 	'args0': [
	// 		{
	// 			'type': 'input_statement',
	// 			'name': 'NAME'
	// 		}
	// 	],
	// 	'previousStatement': [
	// 		'select',
	// 		'String'
	// 	],
	// 	'nextStatement': 'String',
	// 	'colour': 260,
	// 	'tooltip': '',
	// 	'helpUrl': ''
	// },
	{
		'type': 'block_orderby',
		'message0': 'ORDER BY %1 ASC %2',
		'args0': [
			{
				'type': 'input_statement',
				'name': 'NAME',
				'check': 'column'
			},
			{
				'type': 'field_checkbox',
				'name': 'NAME',
				'checked': true
			}
		],
		'previousStatement': [
			'select',
			'statement'
		],
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
				'name': 'NAME',
				'check': 'column'
			}
		],
		'previousStatement': [
			'select',
			'statement'
		],
		'nextStatement': 'statement',
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
				'name': 'NAME',
				'check': 'logic'
			}
		],
		'previousStatement': [
			'select',
			'statement'
		],
		'nextStatement': 'statement',
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
				'name': 'inputSelect',
				'check': 'column'
			},
			{
				'type': 'input_value',
				'name': 'inputFrom',
				'check': 'table'
			},
			{
				'type': 'input_statement',
				'name': 'inputJoin',
				'check': 'joinCon'
			}
		],
		'nextStatement': 'statement',
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
		'previousStatement': 'joinCon',
		'nextStatement': 'joinCon',
		'colour': 230,
		'tooltip': '',
		'helpUrl': ''
	}];

Blockly.Blocks['block_columnselectdd'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(columnDd), 'NAME');
		this.setPreviousStatement(true, 'column');
		this.setNextStatement(true, 'column');
		this.setColour(70);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.Blocks['block_tableselectdd'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(tableDd), 'NAME');
		this.setOutput(true, 'table');
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
		this.setPreviousStatement(true, 'column');
		this.setNextStatement(true, 'column');
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
		this.setPreviousStatement(true, 'logic');
		this.setNextStatement(true, 'logic');
		this.setColour(20);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};

Blockly.Blocks['block_textinput'] = {
	init: function() {
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(columnDd), 'NAME');
		this.setOutput(true, 'column');
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
		this.setPreviousStatement(true, 'columns');
		this.setNextStatement(true, 'columns');
		this.setColour(70);
		this.setTooltip('');
		this.setHelpUrl('');
	}
};