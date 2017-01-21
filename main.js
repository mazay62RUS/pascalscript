var fs         = require('fs');
var dictionary = require('./modules/dictionary.js');

function PascalScript (input,output) {
    var readblText  = this.readbl(input);
    this.replacer(readblText);
    //var writeblText = this.writebl(output);
}

PascalScript.prototype.readbl = function(file) {

    var inputStream = fs.createReadStream(file);

    inputStream.on('data', function(data){
    	var superData = data.toString();
    	console.log(superData.match(/begin/i));
    });

    inputStream.on('end', function() {
        console.log('\nsuccsess');
    });

}

PascalScript.prototype.writebl = function(file) {
	var writeStream = fs.createWriteStream(file);
}

PascalScript.prototype.replacer = function(data) {

    dictionary.map(function(el) {
        el[0] = el[1];
        console.log(el[1]);
    });

    return dictionary;

}

PascalScript.prototype.compile = function(text) {
	
}

var ps = new PascalScript('test.ps','test.js');