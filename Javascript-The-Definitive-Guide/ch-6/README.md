<center><h1>Capítulo 6: Objetos en JavaScript</h1></center>

## Introducción
El capítulo 6 titulado "Declaraciones" trata explica cómo funcionan, cómo se crean y cómo se manipulan.

## Desarrollo
<h3 style="color:lightblue">1. ¿Qué es un objeto?</h3>

Un objeto es como una caja que guarda datos. Cada dato tiene un nombre (propiedad) y un valor.

```js
let persona = {
  nombre: "Juan",
  edad: 30
};
```

<h3 style="color:lightpink">2. Cómo crear objetos</h3>

<h4 style="color:lightpink">2.1 Usando llaves `{}`</h4>

Forma más directa:

```js
let libro = {
  titulo: "JavaScript",
  autor: {
    nombre: "David",
    apellido: "Flanagan"
  }
};
```

<h4 style="color:lightpink">2.2 Usando `new`</h4>

Se utiliza con funciones especiales llamadas constructores:

```js
let fecha = new Date();
let lista = new Array();
```

<h4 style="color:#f5e1ab">2.3 Usando `Object.create()`</h4>

Permite crear objetos con un "modelo base":

```js
let base = { x: 1 };
let copia = Object.create(base);
console.log(copia.x); // 1
```

<h3 style="color:#b0f5ab">3. Consultar y cambiar propiedades</h3>

Puedes acceder o modificar propiedades con punto o corchetes:

```js
let libro = { titulo: "JS", autor: "David" };

console.log(libro.titulo);        // "JS"
console.log(libro["autor"]);      // "David"

libro.titulo = "ECMAScript";
```

<h3 style="color:#ffbe69">4. Prevención de errores</h3>

Los objetos también pueden funcionar como listas con nombres personalizados:

```js
let portafolio = {};
portafolio["IBM"] = 50;
portafolio["AAPL"] = 20;
```

<h4 style="color:#ffbe69">5. Ejemplo práctico</h4>

```js
function agregarAccion(portafolio, nombre, cantidad) {
  portafolio[nombre] = cantidad;
}
```

<h3 style="color:#ffbe69">6. Herencia</h3>

Si una propiedad no está en el objeto, JavaScript la busca en su "modelo" o prototipo.

```js
let base = { r: 1 };
let circulo = Object.create(base);
circulo.r = 2;

console.log(base.r); // 1
```

<h3 style="color:#ffbe69">7. Errores comunes</h3>

- Si accedes a algo que no existe: `undefined`.
- Si accedes a una propiedad de algo que es `undefined` o `null`: error.

```js
let libro = {};
console.log(libro.subtitulo); // undefined
// console.log(libro.subtitulo.length); // Error

// Solución segura:
let apellido = libro?.autor?.apellido;
```

<h3 style="color:#ffbe69">8. Eliminar propiedades</h3>

```js
let persona = { nombre: "Ana" };
delete persona.nombre;
```

<h3 style="color:#ffbe69">9. Verificar si existe una propiedad</h3>

```js
"x" in obj
obj.hasOwnProperty("x")
obj.x !== undefined
```

<h3 style="color:#ffbe69">10. Recorrer propiedades</h3>

```js
let obj = { a: 1, b: 2 };
for (let clave in obj) {
  console.log(clave);
}
```

```js
Object.keys(obj);
Object.getOwnPropertyNames(obj);
```

<h3 style="color:#ffbe69">11. Copiar propiedades</h3>

```js
let destino = {};
Object.assign(destino, { a: 1, b: 2 });
```

```js
function fusionar(obj, ...fuentes) {
  for (let f of fuentes) {
    for (let clave of Object.keys(f)) {
      if (!(clave in obj)) {
        obj[clave] = f[clave];
      }
    }
  }
  return obj;
}
```

<h3 style="color:#ffbe69">12. Guardar y cargar objetos</h3>

```js
let obj = { x: 1, y: [true, false] };
let texto = JSON.stringify(obj);
let nuevo = JSON.parse(texto);
```

<h3 style="color:#ffbe69">13. Resumen</h3>

Este capítulo es esencial para dominar JavaScript, ya que todo —funciones, arreglos, fechas— son objetos o están basados en ellos.
