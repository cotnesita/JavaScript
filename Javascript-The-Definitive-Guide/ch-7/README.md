<center><h1>Capítulo 7: Arrays</h1></center>

## Introducción
El capítulo 7 titulado "Arrays" explora los arrays en JavaScript, un tipo de dato fundamental. 

## Desarrollo
<h3 style="color:lightblue">1. ¿Qué es un array?</h3>

Un array es una colección ordenada de elementos. Cada elemento tiene una posición numérica llamada "índice", que empieza desde 0. Los arrays en JavaScript pueden contener datos de diferentes tipos y crecer o reducirse dinámicamente.

Ejemplo:

```js
let mixto = [1, "texto", true, [1, 2], {clave: "valor"}];
```

<h3 style="color:lightpink">2. Crear Arrays</h3>

<h4 style="color:lightpink">2.1 Array literal</h4>

Forma más simple:
```js
let numeros = [1, 2, 3];
```

<h4 style="color:lightpink">2.2 Spread operator</h4>

Permite copiar o combinar arrays:
```js
let copia = [...numeros];
```

<h4 style="color:#f5e1ab">2.3 Constructor `Array()`</h4>

```js
let a = new Array(3); // Array con longitud 3 pero sin valores definidos
```

<h4 style="color:#b0f5ab">2.4 `Array.of()`</h4>

Permite crear arrays con un solo número como valor:

```js
let unico = Array.of(10); // [10]
```

<h4 style="color:#ffbe69">2.5 `Array.from()`</h4>

Convierte objetos similares a arrays en arrays reales:

```js
let copia = Array.from("hola"); // ['h','o','l','a']
```

<h3 style="color:#ffbe69">3. Leer y escribir elementos</h3>

Se accede a los valores usando corchetes:

```js
let letras = ["a", "b"];
let primera = letras[0];
letras[1] = "c";
```

<h3 style="color:#ffbe69">4. Arrays dispersos</h3>

Son arrays donde algunos índices no tienen valor definido:

```js
let disperso = [];
disperso[100] = "fin";
```

<h3 style="color:#ffbe69">5. Propiedad `length`</h3>

Define la longitud del array. Se ajusta automáticamente al agregar o quitar elementos:

```js
let a = [1,2,3];
a.length = 1; // a ahora es [1]
```

<h3 style="color:#ffbe69">6. Agregar y eliminar elementos</h3>

<h4 style="color:#ffbe69">6.1 Agregar</h4>

```js
let a = [];
a.push("uno"); // al final
a.unshift("cero"); // al inicio
```

<h4 style="color:#ffbe69">6.2 Eliminar</h4>

```js
a.pop();    // elimina el último
a.shift();  // elimina el primero
delete a[0]; // elimina sin ajustar length
```

<h3 style="color:#ffbe69">7. Recorrer un array</h3>

<h4 style="color:#ffbe69">7.1 `for/of`</h4>

```js
for (let valor of a) console.log(valor);
```

<h4 style="color:#ffbe69">7.2 `forEach()`</h4>

```js
a.forEach(v => console.log(v));
```

<h4 style="color:#ffbe69">7.3 `for` clásico</h4>

```js
for (let i = 0; i < a.length; i++) console.log(a[i]);
```

<h4 style="color:#ffbe69">7.4 Arrays multidimensionales</h4>

Son arrays dentro de arrays:

```js
let matriz = [[1,2],[3,4]];
console.log(matriz[1][0]); // 3
```

<h3 style="color:#ffbe69">8. Métodos de Array</h3>

<h4 style="color:#ffbe69">8.1 Iteradores</h4>

- `forEach()`: recorre y aplica una función.
- `map()`: transforma cada elemento.
- `filter()`: filtra según una condición.
- `find()`, `findIndex()`: busca el primer que cumpla una condición.
- `every()`, `some()`: verifican condiciones.
- `reduce()`, `reduceRight()`: reducen a un solo valor.

<h4 style="color:#ffbe69">8.2 Ejemplos</h4>

```js
let nums = [1,2,3,4];
nums.map(x => x * 2); // [2,4,6,8]
nums.filter(x => x > 2); // [3,4]
nums.reduce((a,b) => a + b); // 10
```

<h4 style="color:#ffbe69">8.3 flat() y flatMap()</h4>

```js
[1, [2, [3]]].flat(2); // [1,2,3]
["hola mundo"].flatMap(p => p.split(" ")); // ["hola", "mundo"]
```

<h4 style="color:#ffbe69">8.4 concat()</h4>

Une arrays:

```js
[1,2].concat([3,4]); // [1,2,3,4]
```

<h4 style="color:#ffbe69">8.5 push/pop y shift/unshift</h4>

Permiten usar el array como pila o cola.

<h4 style="color:#ffbe69">8.6 slice() y splice()</h4>

```js
[1,2,3].slice(1); // [2,3] (no modifica original)
[1,2,3].splice(1,1); // [2] (modifica el original)
```

<h4 style="color:#ffbe69">8.7 fill() y copyWithin()</h4>

```js
new Array(3).fill(0); // [0,0,0]
[1,2,3,4].copyWithin(1, 2); // [1,3,4,4]
```

<h4 style="color:#ffbe69">8.7 Búsqueda y ordenamiento</h4>

```js
[1,2,3].includes(2); // true
[1,2,3].indexOf(3); // 2
[3,1,2].sort(); // ordena como strings
[3,1,2].sort((a,b) => a-b); // ordena como números
```

<h4 style="color:#ffbe69">8.8 Conversión a string</h4>

```js
[1,2,3].join("-"); // "1-2-3"
[1,2,3].toString(); // "1,2,3"
```

<h4 style="color:#ffbe69">8.9 Métodos estáticos</h4>

```js
Array.isArray([]); // true
```

<h3 style="color:#ffbe69">9. Objetos tipo array</h3>

Son objetos que tienen `.length` y propiedades numéricas:

```js
let parecido = {0: "a", 1: "b", length: 2};
Array.from(parecido); // ["a", "b"]
```

<h3 style="color:#ffbe69">10. Cadenas como arrays</h3>

Las cadenas pueden recorrerse como si fueran arrays:

```js
let texto = "hola";
texto[0]; // 'h'
Array.prototype.join.call("hola", "-"); // "h-o-l-a"
```

<h3 style="color:#ffbe69">10. Conclusión</h3>

Los arrays en JavaScript son estructuras versátiles y poderosas. Este capítulo explora desde su creación básica hasta técnicas avanzadas como `reduce`, `flatMap` o el uso de arrays como pilas y colas. Familiarizarse con los métodos de Array es esencial para escribir código eficiente y moderno.
