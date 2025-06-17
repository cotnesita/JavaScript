let persona = {
    nombre: "Ana",
    apellido: "Martínez",
    edad: 30,

    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    },
    set nombreCompleto(valor) {
        const partes = valor.split(" ");
        this.nombre = partes[0];
        this.apellido = partes[1];
    },

    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
};

console.log(persona.saludar());               // Hola, soy Ana
console.log(persona.nombreCompleto);          // Ana Martínez
persona.nombreCompleto = "Casem Cotne";
console.log(persona.nombre);                  // Casem
console.log(persona.apellido);                // Cotne

// Creamos un objeto que hereda de persona
let estudiante = Object.create(persona);
estudiante.curso = "Inglés";

console.log(estudiante.nombreCompleto);       // Casem Cotne
console.log(estudiante.curso);                // Inglés

let infoExtra = { universidad: "UMIN", graduado: false };
Object.assign(estudiante, infoExtra);
console.log(estudiante.universidad);          // UMIN

for (let prop in estudiante) {
    if (estudiante.hasOwnProperty(prop)) {
        console.log(`Propiedad propia: ${prop}`);
    }
}
