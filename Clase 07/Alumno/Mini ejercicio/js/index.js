var car = '{"price":3500,"model":"Etios","brand":"Toyota"}';

parsedObj = JSON.parse(car);

console.log(parsedObj.price + " " + parsedObj.model);