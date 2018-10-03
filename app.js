const {getLugarLatLng} = require('./lugar/lugar')
const {getClima} = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Direccion de la ciudad para obtener el clima',
        demand:true
    }
})
.help()
.argv;

/*console.log('getLugarLatLng: ',getLugarLatLng(argv.direccion).then(resp=>{
    console.log('resp:', resp);
}).catch(e=> console.log(e)) );

clima.getClima(35,139).then(temp => console.log('Temperatura:',temp ))
.catch(e => console.log(e));*/

let getInfo = async (direccion)=>{
    try {
        let coors = await getLugarLatLng(direccion);
        let temp = await getClima(coors.lat,coors.lng);
        return `El clima de ${coors.direccion} es ${temp}`
    } catch (error) {
        return 'Lugar no encontrado';        
    }
}

getInfo(argv.direccion).then(resp=>{
    console.log(resp);
}).catch(e=>console.log(e));