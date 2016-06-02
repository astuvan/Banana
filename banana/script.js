var text = null;
var random = null;
var max = 30;
var min = 1;

function CallBanana() {
	random = Math.floor(Math.random() * (max - min) + min);
	
	var xmlDoc = document.implementation.createDocument('', '', null);
	xmlDoc.load('database.xml');
	text = xmlDoc.getElementsByTagName('t')[random];
	
	xmlDoc.onload = XmlLoaded();
	
	document.getElementById('banana').innerHTML=text;
}

function XmlLoaded() {
	alert('Xml dokument ble lastet inn uten feil.');
}
