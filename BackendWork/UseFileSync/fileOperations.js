const { log } = require('console');
const fs = require('fs');

function dataWrite(){
    try{
        fs.writeFileSync('data.txt', 'Hello Node.js using FS module!');
console.log('File written successfully');
    }
    catch(e){
        console.log("Error encountered" + e);
        
    }
}
function dataRead(){
    try{
        const rf1 = fs.readFileSync('data.txt',{encoding: 'utf-8'});
        console.log(rf1);
    }
    catch(e){
        console.log(e);
        
    }
}


function appendData(){
    fs.appendFileSync('data.txt','my name is mayank');
    console.log('file updated');
}

function daleteData(){
    fs.unlinkSync('data.txt');
    console.log("file deleted");
}


const obj={
    dataRead,
    dataWrite,
    appendData,
    daleteData
}

module.exports=obj;