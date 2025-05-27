<center><h1>Capítulo 3: Tipos, Valores y Variables</h1></center>

## Introducción
El capítulo 3 titulado "Tipos, Valores y Variables" explora diferentes conceptos


## Desarrollo
<h3 style="color:lightblue">1. Tipos de datos</h3>

#### Tipos básicos (llamados "primitivos")
- Números: cualquier número, ya sea 5, -3, 3.14 o números científicos como 6.02e23
- Texto: lo que llaman “cadenas” (por ejemplo: "Hola mundo")
- Booleanos: valores que son solo true (verdadero) o false (falso)
- null y undefined: significan que algo no tiene valor aún, o no tiene valor a propósito
- Símbolos: valores especiales que casi no se usan al principio

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



<h3 style="color:#ffbe69">5. Verdadero y Falso (Booleans)</h3>
ahy 

<h3 style="color:#ffbe69">6. null y undefined</h3>



<h3 style="color:#ffbe69">7. Símbolos (Simbols)</h3>



<h3 style="color:#ffbe69">8. Objetos vs Primitivos</h3>


<h3 style="color:#ffbe69">9. Conversión de tipos</h3>


<h3 style="color:#dfe6f5">10. Declarar variables</h3>


<h3 style="color:#ffbe69">5. Resumen</h3>
