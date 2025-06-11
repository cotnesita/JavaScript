// 1. Crear un objeto con propiedades
let persona = {
    nombre: "marie",
    edad: 18,
    profesion: "psicóloga",
    saludar: function() {
        console.log(Hola, me llamo ${this.nombre} y soy ${this.profesion}.);
    }
};

// Usar el método del objeto
persona.saludar(); // Hola, mi nombre es marie,soy psicóloga.

// 2. Acceder y modificar propiedades
console.log(persona.edad); // 
persona.edad = 21;
console.log(persona.edad); // 

// 3. Agregar nuevas propiedades dinámicamente
persona.pais = "México";
console.log(persona.pais); // México

// 4. Usar propiedades abreviadas (shorthand)
let nombre = "Marie";
let ciudad = "mexico";
let estudiante = { nombre, ciudad }; // equivalente a { nombre: nombre, ciudad: ciudad }
console.log(estudiante); // { nombre: "Romeo", ciudad: "Puebla" }

// 5. Usar propiedades computadas
let campo = "email";
let usuario = {
    [campo]: "mariegomez@gmail.com"
};
console.log(usuario.email); 

// 6. Iterar propiedades con for...in
for (let prop in persona) {
    console.log(${prop}: ${persona[prop]});
}

// 7. Eliminar una propiedad
delete persona.pais;
console.log(persona.pais); // undefined
