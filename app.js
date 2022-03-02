var express = require('express');
var app = express();
var fs = require('fs');

changeFileNames();
function changeFileNames(){
  fs.readdir(__dirname+'/FilesToRename',{},function (err, files) {
    for (let i = 0; i < files.length; i++) {
      const element = files[i];
      if(element.includes('.download')){
        fs.rename(__dirname+'/FilesToRename/'+element, __dirname+'/FilesToRename/'+element.replace('.download',''), (err) => {
          if (err) throw err;
        });
      }
    }
  })
}



module.exports = app;
