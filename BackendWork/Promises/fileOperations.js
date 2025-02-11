const promise=require('fs').promises;

const fsp = promise.writeFile('data.txt',"Promise Day");

fsp.then(() => {
    console.log('Promise success !'); 
}).catch((err) => {
    console.error('Promise failed !' + err);
}).finally(() => {
    console.log('file writing completed');
    
})
