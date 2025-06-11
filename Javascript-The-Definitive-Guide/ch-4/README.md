<center><h1> Capítulo 4: Expresiones y Operadores en JavaScript</h1></center>

## Introducción
El capítulo 4 titulado "Expresiones y Operadores en JavaScript" explica cómo JavaScript combina datos y realiza operaciones usando expresiones y operadores. Una expresión es cualquier fragmento de código que produce un valor. Algunas expresiones son simples, como un número o una variable. Otras son más complejas y se construyen combinando expresiones simples con operadores.

## Desarrollo

<h3 style="color:#f5e1ab">4.1 Expresiones Primarias</h3>
Son las más simples, no se componen de otras expresiones. Incluyen:

- **Literals (Literales):** valores escritos directamente, como:
  ```js
  3.14       // Número
  "Hola"     // Cadena de texto
  /abc/      // Expresión regular
  ```
- **Palabras clave:** como `true`, `false`, `null`, y `this`.  
  `this` se refiere al objeto actual en ciertos contextos.

- **Variables o propiedades globales:**
  ```js
  i       // Variable
  sum     // Otra variable
  undefined // Valor especial
  ```

<h3 style="color:lightpink">4.2 Inicializadores de Objetos y Arreglos</h3>
Permiten crear nuevos objetos o listas (arreglos) fácilmente.

- **Arreglos:**
  ```js
  [1, 2, 3]             // Arreglo de 3 elementos
  [[1,2], [3,4]]        // Arreglo anidado
  [1,,5]                // Arreglo con elementos vacíos
  ```

- **Objetos:**
  ```js
  let persona = { nombre: "Ana", edad: 30 };
  let cuadrado = { arribaIzq: {x:1,y:1}, abajoDer: {x:2,y:2} };
  ```
  
<h3 style="color:#f5e1ab">4.3 Expresiones de Función</h3>
Son funciones escritas como expresiones, usadas para asignar funciones a variables.

```js
let cuadrado = function(x) { return x * x; };
```

También existen versiones más compactas llamadas funciones flecha (explicadas en capítulos posteriores).

<h3 style="color:#b0f5ab">4.4 Acceso a Propiedades</h3>
Permite acceder a valores dentro de objetos o arreglos:

- Notación con punto:
  ```js
  objeto.propiedad
  ```
- Notación con corchetes:
  ```js
  objeto["propiedad"]
  arreglo[0]
  ```

<h4 style="color:#dfe6f5">4.4.1 Acceso Condicional (Optional Chaining)</h4>
Evita errores al acceder a propiedades de objetos que podrían ser `null` o `undefined`.

```js
usuario?.direccion?.calle
```

<h3 style="color:lightpink">4.5 Expresiones de Invocación</h3>
Son llamadas a funciones:

```js
saludar()
Math.max(1, 2, 3)
```

<h4 style="color:lightpink">4.5.1 Invocación Condicional</h4>
Solo llama a la función si está definida:

```js
log?.(mensaje);
```

<h3 style="color:lightpink">4.6 Expresiones de Creación de Objetos</h3>

Usan la palabra `new` para crear un nuevo objeto basado en una función constructora:

```js
let fecha = new Date();
let punto = new Point(2, 3); // Si se define un constructor llamado Point
```

<h3 style="color:lightpink">4.7 Resumen de Operadores</h3>
JavaScript tiene muchos operadores para distintas tareas:

- **Aritméticos:** `+`, `-`, `*`, `/`, `%`, `**`  
- **Asignación:** `=`, `+=`, `-=`, etc.  
- **Comparación:** `==`, `===`, `!=`, `>`, `<`, `>=`, `<=`  
- **Lógicos:** `&&`, `||`, `!`  
- **Bit a bit:** `&`, `|`, `^`, `<<`, `>>`, `>>>`  
- **Otros:** `typeof`, `instanceof`, `in`, `delete`

### Ejemplo:
```js
let x = 5;
x += 2;        // x ahora es 7
x > 5 && x < 10  // true
```

### Precedencia y Asociatividad

Determinan el orden en que se aplican los operadores:

```js
2 + 3 * 4     // = 2 + (3*4) = 14
(2 + 3) * 4   // = 5 * 4 = 20
```

<h3 style="color:lightpink">4.8 Expresiones Aritméticas</h3>

```js
2 + 3       // 5
"Hola" + " Mundo"  // "Hola Mundo"
"2" + 1     // "21"
```

<h3 style="color:lightpink">4.9 Expresiones Relacionales</h3>

```js
5 > 3           // true
"abc" < "xyz"   // true
"x" in {x: 1}   // true
d instanceof Date  // true
```

<h3 style="color:lightpink">4.10 Expresiones Lógicas</h3>

- `&&`, `||`, `!`

```js
let nombre = usuario || "Invitado";
```

<h3 style="color:lightpink">4.11 Expresiones de Asignación</h3>

```js
x = 10;
x += 5;
```

<h3 style="color:lightpink">4.12 Evaluación de Código</h3>

```js
eval("2 + 2")   // Devuelve 4
```
