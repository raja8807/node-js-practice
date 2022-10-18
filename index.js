const file = require('./file')
const html = require('./htmlBoiler')

let fileData = {
    folder:"web",
    fileName:"index",
    ext:"html",
    data : html("Hello","div","<h1 style='color:red;'>hellow world</h1><h2>How are you</h2>")
}

let myFile = new file(fileData).create()
console.log(myFile);