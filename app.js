const { listar,createFile } = require('./math/multiplicar');
const { argv } = require('./config/comands');
let command = argv._;
switch(command[0]){
    case "listar":
        listar(argv.base,argv.limite);
    break;
    case "crear":
        createFile(argv.base,argv.limite).then((res) =>{
            console.log(res);
        }).catch((err) =>{
            console.log(err);
        });
    break;
    default:
        console.log(` "${command[0]}".. comando desconocido`);
    break;
}