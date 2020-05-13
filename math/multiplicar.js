let fs = require('fs');
var colors = require('colors');

let listar = (base,limite) => { 
    let res = '';
    for(let i = 1; i<= limite ; i++){
        res += `${base} * ${i}  = ${base*i} \n` 
    }
    console.log(res.bold.green);
}

let createFile = (base,limite) =>{
    return new Promise((resolve,reject)=>{
        if(!Number(base)){
            reject("el parametro base debe ser un numero");
            return;
        }
        let data = "";
        for(i = 0; i<= limite ; i++){
            data += `${base} * ${i} = `+ base*i + " \n";
        }        
        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`The file tabla${base}.txt has been saved!`);
          });
    });
}

module.exports = {
    createFile,
    listar
}