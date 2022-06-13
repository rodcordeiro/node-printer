const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "./EtiquetaArgoxProduto3.prn");
var printer = require("../lib")

const content = fs.readFileSync(filePath, "utf8");
// console.log(content);
printer.printDirect({
    data: Array.from(content).join(''),
    // printer:printer_name,
    type: "RAW",
    success:function(){
        console.log("printed: "+Array.from(content).join(''));
    },
    error:function(err){console.log(err);}
	})