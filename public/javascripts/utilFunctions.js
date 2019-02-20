// This loads the block query from localstorage
function loadWorkspace() {
	var xmlText = localStorage.getItem('blockly.xml');
	if (xmlText) {
		Blockly.mainWorkspace.clear();
		xmlDom = Blockly.Xml.textToDom(xmlText);
		Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xmlDom);
	}
}

// This saves the block query to localstorage
function saveWorkspace() {
	var xmlDom = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
	var xmlText = Blockly.Xml.domToPrettyText(xmlDom);

	localStorage.setItem('blockly.xml', xmlText);
}

// This handles resizing the blockly element of the page if the page is resized
var onresize = function (e) {
	// Compute the absolute coordinates and dimensions of blocklyArea.
	var element = blocklyArea;
	var x = 0;
	var y = 0;
	do {
		x += element.offsetLeft;
		y += element.offsetTop;
		element = element.offsetParent;
	} while (element);
	// Position blocklyDiv over blocklyArea.
	blocklyDiv.style.left = x + 'px';
	blocklyDiv.style.top = y + 'px';
	blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
	blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
	Blockly.svgResize(workspace);
};

// This function handles updating various DOM elements when a blockly change event is detected
function myUpdateFunction(event) {
	var code = Blockly.JavaScript.workspaceToCode(workspace);
	var liveSql = document.getElementById('textarea');
	liveSql.innerHTML = code;
	saveWorkspace();
	//console.log(code);
}