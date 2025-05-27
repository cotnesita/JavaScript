<center><h1>Capítulo 3: Tipos, Valores y Variables</h1></center>

## Introducción
El capítulo 3 titulado "Tipos, Valores y Variables" trata sobre cómo JavaScript maneja los datos: qué tipos de cosas puede entender, cómo las guarda, cómo las transforma y cómo se usan en el código.

## Desarrollo
<h3 style="color:lightblue">1. Tipos de datos</h3>

#### Tipos básicos (llamados "primitivos")
- **Números**: cualquier número, ya sea 5, -3, 3.14 o números científicos como 6.02e23
- **Texto**: lo que llaman “cadenas” (por ejemplo: "Hola mundo")
- **Booleanos**: valores que son solo `true` (verdadero) o `false` (falso)
- **`null` y `undefined`**: significan que algo no tiene valor aún, o no tiene valor a propósito
- **Símbolos**: valores especiales que casi no se usan al principio

#### Tipos complejos (objetos)
Si los primitivos son “datos simples”, los objetos son colecciones de datos. Por ejemplo:
```javascript
let persona = {
  nombre: "Ana",
  edad: 30
};
```
Esto es como una caja que guarda varias cosas juntas.

También hay arreglos (`[1, 2, 3]`), fechas, errores, y más.

<h3 style="color:lightpink">2. Guardar datos (Variables)</h3>
Para guardar algo, le das un nombre:

```javascript
let edad = 25;
```
Después puedes usar ese nombre para leer o cambiar el valor.

- `let`: lo usas si el valor puede cambiar.
- `const`: si sabes que no va a cambiar.
- `var`: es más antiguo y puede ser confuso, mejor no usarlo. 

<h3 style="color:#f5e1ab">3. Números: no solo sumas y restas</h3>

En JavaScript, todos los números son del mismo tipo, no importa si son enteros o con decimales.

#### Puedes:

- Puedes escribir números en decimal, binario (`0b1010`), hexadecimal (`0xFF`), etc.
- Puedes hacer operaciones básicas: `+`, `-`, `*`, `/`, `%`
- También puedes usar cosas como `M`th.sqrt()` (raíz cuadrada) o `Math.random()` (número aleatorio)

#### Cosas raras que pasan:

- Si sumas números con texto, el resultado puede ser extraño:
`"5" + 1` da `"51"`
- A veces los decimales no salen exactos:
`0.1 + 0.2` da `0.30000000000000004`

También existe algo llamado **BigInt** para cuando necesitas números super grandes sin perder precisión.

<h3 style="color:#b0f5ab">4. Cadenas de texto (Strings)</h3>

Una cadena es una frase entre comillas.
Puedes usar `'Hola'`, `"Hola"` o las nuevas `´Hola´` (estas últimas te permiten incluir variables dentro del texto).

#### ¿Qué se puede hacer con cadenas?

- Unirlas: "Hola" + " mundo" → "Hola mundo"
- Cortarlas: "JavaScript".substring(4) → "Script"
- Buscar texto: "JavaScript".includes("Script") → true
- Cambiar mayúsculas/minúsculas: "Hola".toUpperCase() → "HOLA"
- Reemplazar cosas: "Hola mundo".replace("mundo", "amigo")
- Quitar espacios: " texto ".trim()

Con los template strings puedes hacer cosas así:
```javascript
let nombre = "Luis";
`Hola, ${nombre}`  // "Hola, Luis"
```

También puedes buscar patrones usando **expresiones regulares** (algo que parece magia pero es útil).

<h3 style="color:#ffbe69">5. Verdadero y Falso (Booleans)</h3>

Cuando el programa necesita saber si algo es cierto o falso, usa este tipo de dato.

#### Ejemplo:
```javascript
let edad = 18;
edad >= 18  // true
```

#### También:
```javascript
Puedes usar operadores lógicos:
&& es “y”
|| es “o”
! es “no”
```
Esto permite tomar decisiones más complejas:
```javascript
if (edad > 17 && edad < 65) {
  console.log("Edad válida");
}
```

<h3 style="color:#ffbe69">6. null y undefined</h3>

- `undefined`: cuando algo no ha sido asignado aún
- `null`: cuando tú le asignas un “nada” intencionalmente

```javascript
let x;
console.log(x);  // undefined

let y = null;
console.log(y);  // null
```

<h3 style="color:#ffbe69">7. Símbolos (Simbols)</h3>

Los `Symbols` son un tipo especial de dato que sirve para crear propiedades únicas que no pueden chocar con otras, aunque tengan el mismo nombre. Se usan más en programación avanzada o en bibliotecas grandes para evitar conflictos.

<h3 style="color:#ffbe69">8. Objetos vs Primitivos</h3>

Hay una diferencia importante:

- Los números, cadenas y booleanos son **inmutables**: si los cambias, en realidad estás creando una nueva copia.
- Los objetos y arreglos son **mutables**: puedes cambiarles las cosas sin reemplazarlos.

```javascript
let persona = { nombre: "Lucía" };
persona.nombre = "Pedro";  //  Cambió el objeto
```

<h3 style="color:#ffbe69">9. Conversión de tipos</h3>

JavaScript a veces convierte datos sin preguntarte.

```javascript
"5" + 1  // "51"
"5" * 1  // 5
```

Eso puede traer errores. Por eso es mejor convertirlos manualmente:

```javasrcipt
Number("5")  // 5
String(10)   // "10"
Boolean(0)   // false
```
#### Hay dos formas de comparar valores:

- `==` compara con conversión automática (a veces engañosa)
- `===` compara sin convertir (más seguro)

**Siempre usa `===` si puedes.**

<h3 style="color:#dfe6f5">10. Declarar variables</h3>

Para guardar cosas, usas `let`, `const` o `var`:

- `let` es para variables que van a cambiar
- `const` es para valores que no deberían cambiar
- `var` es una forma antigua que ya casi no se usa

**También es importante saber que una variable puede estar disponible *en todo el código* o solo *dentro de un bloque* como un `if` o una función.**

<h3 style="color:#ffbe69">11. Resumen</h3>

- Los primitivos son inmutables, pero los objetos son mutables.
- JavaScript convierte tipos automáticamente, pero es mejor hacer conversiones explícitas.
- `===` es preferible a `==` para evitar errores inesperados.
- Usa let y const, evita var.
- Las variables tienen ámbito global, de función o de bloque.

