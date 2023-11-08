//Creación del objeto animal, con 3 propiedades y 1 método
const animal={
    nombre:"Felix",
    tipo:"gato",
    edad:"4",
    comer(){
    //acceder a las propiedades de un objeto
    console.log(`${animal.nombre} está comiendo`);
    //Usando la palabra reservada this
    console.log(`${this.nombre} está comiendo`);
    }
    }
    //llamar objeto 
    console.log(animal.comer)
    //mostrar objeto completo
    console.log(animal)
    //invocar métodos de un objeto
    animal.comer();