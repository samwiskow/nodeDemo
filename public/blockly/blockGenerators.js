Blockly.JavaScript['block_textselect'] = function(block) {
	var dropdown_name = block.getFieldValue('ST');
	var code = dropdown_name +',' ;
	return code;
};

Blockly.JavaScript['block_where'] = function(block) {
	var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME').trim().split(',');
	var filtered = statements_name.filter(Boolean);
	var columns = '';
	for (var i=0; i < filtered.length; i++){
		i == 0? columns += filtered[i] : columns += ' ' + filtered[i];
	}
	var code = ' WHERE ' + columns;
	return code;
};

Blockly.JavaScript['block_select'] = function(block) {
	var statements_inputselect = Blockly.JavaScript.statementToCode(block, 'inputSelect').trim().split(',');
	var value_inputfrom = Blockly.JavaScript.valueToCode(block, 'inputFrom', Blockly.JavaScript.ORDER_ATOMIC);
	var filtered = statements_inputselect.filter(Boolean);
	var columns = '';
	for (var i=0; i < filtered.length; i++){
		i == 0? columns += filtered[i] : columns += ',' + filtered[i];
	}

	var code = 'SELECT ' + columns + ' FROM ' + value_inputfrom.replace(/()/g,'');
	return code;
};

Blockly.JavaScript['block_text_comparison'] = function(block) {
	var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
	var dropdown_name = block.getFieldValue('NAME');
	var val_name = Blockly.JavaScript.valueToCode(block, 'NAMEL', Blockly.JavaScript.ORDER_ATOMIC);
	var code = value_name + ' ' + dropdown_name + ' ' + val_name + ',' ;
	return code;
};

Blockly.JavaScript['block_join'] = function(block) {
	var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
	var code = ' JOIN ' + statements_name;
	return code;
};

Blockly.JavaScript['block_orderby'] = function(block) {
	var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME').trim().split(',');
	var checkbox_name = block.getFieldValue('NAME') == 'TRUE';
	var filtered = statements_name.filter(Boolean);
	var columns = '';
	for (var i=0; i < filtered.length; i++){
		i == 0? columns += filtered[i] : columns += ',' + filtered[i];
	}
	var code = ' ORDER BY ' + columns;
	checkbox_name === true? code += ' ASC' : code += ' DESC';
	return code;
};

Blockly.JavaScript['block_groupby'] = function(block) {
	var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME').trim().split(',');
	var filtered = statements_name.filter(Boolean);
	var columns = '';
	for (var i=0; i < filtered.length; i++){
		i == 0? columns += filtered[i] : columns += ',' + filtered[i];
	}
	var code = ' GROUP BY ' + columns;
	return code;
};

Blockly.JavaScript['block_having'] = function(block) {
	var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME').trim().split(',');
	var filtered = statements_name.filter(Boolean);
	var columns = '';
	for (var i=0; i < filtered.length; i++){
		i == 0? columns += filtered[i] : columns += ' ' + filtered[i];
	}
	var code = ' HAVING ' + columns;
	return code;
};

Blockly.JavaScript['block_textinput'] = function(block) {
	var text_name = block.getFieldValue('NAME');
	var code = text_name;
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['block_columnselectdd'] = function(block) {
	var dropdown_name = block.getFieldValue('NAME');
	var code = dropdown_name +',' ;
	return code;
};

Blockly.JavaScript['block_tableselectdd'] = function(block) {
	var dropdown_name = block.getFieldValue('NAME');
	var code = dropdown_name;
	return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['block_columnaggdd'] = function(block) {
	var agg_name = block.getFieldValue('AGG');
	var col_name = block.getFieldValue('COL');
	var code = agg_name + '(' + col_name + '),';
	return code;
};

Blockly.JavaScript['block_select_join'] = function(block) {
	var statements_inputselect = Blockly.JavaScript.statementToCode(block, 'inputSelect').trim().split(',');
	var value_inputfrom = Blockly.JavaScript.valueToCode(block, 'inputFrom', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_inputjoin = Blockly.JavaScript.statementToCode(block, 'inputJoin').trim().split(',');

	var filtered = statements_inputselect.filter(Boolean);
	var columns = '';
	for (var i=0; i < filtered.length; i++){
		i == 0? columns += filtered[i] : columns += ',' + filtered[i];
	}

	var tablefiltered = statements_inputjoin.filter(Boolean);
	var tables = ' JOIN ';
	console.log(tablefiltered.length);
	for (var j=0; j < tablefiltered.length; j++){
		j == 0? tables += tablefiltered[j] : tables += ' JOIN ' + tablefiltered[j];
	}

	var code = 'SELECT ' + columns + ' FROM ' + value_inputfrom.replace(/()/g,'') + tables;
	return code;
};

Blockly.JavaScript['block_join_condition'] = function(block) {
	var value_table = Blockly.JavaScript.valueToCode(block, 'table', Blockly.JavaScript.ORDER_ATOMIC);
	var value_table1 = Blockly.JavaScript.valueToCode(block, 'table1', Blockly.JavaScript.ORDER_ATOMIC);
	var value_col1 = Blockly.JavaScript.valueToCode(block, 'col1', Blockly.JavaScript.ORDER_ATOMIC);
	var value_table2 = Blockly.JavaScript.valueToCode(block, 'table2', Blockly.JavaScript.ORDER_ATOMIC);
	var value_col2 = Blockly.JavaScript.valueToCode(block, 'col2', Blockly.JavaScript.ORDER_ATOMIC);

	var code = value_table + ' ON ' + value_table1 + '.' + value_col1 + ' = ' + value_table2 + '.' + value_col2 + ',';

	return code;
};

Blockly.JavaScript['block_join_tables'] = function(block) {
	let tab_name = block.getFieldValue('TAB');
	let col_name = block.getFieldValue('COL');
	let code = tab_name + '.' + col_name + ',';
	return code;
};