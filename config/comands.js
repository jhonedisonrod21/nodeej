const params = {
    base:{        
        demand:true,
        alias:'b',
        description: 'asigna el valor de la base de la tabla',
        default:1
    },
    limite:{        
        alias:'l',
        description: 'asigna el limte maximo de la tabla',
        default:10
    }
}
const argv = require('yargs')
.command('crear','crea un archivo con la tabla de multiplicar especificada',params)
.command('listar','muestra por consola la tabla en la base especificada',params).help().argv;

module.exports = {
    argv
}