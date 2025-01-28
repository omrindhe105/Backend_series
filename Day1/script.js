const fs = require('fs');

//  file creation
// fs.writeFile("msg.txt","welcome to backend series.",function(err){

//     if(err) console.log(error);
//     else console.log("file created");
// })

 /// update data

// fs.appendFile("msg.text","this is append msg from om rindhe", function(err){
//     if(err) console.log(err.message);
//     else console.log("data updated");
// });

// fs.rename("msg2.text","msg.text",function(err){
//     if(err) console.log(err);
//     else console.log("file name change sucessfully")
// })

//copy file
 fs.copyFile("msg.text","copiedfile.text",function(err){
    if(err) console.log(err);
    else console.log("file copied sucessfully")
 })




