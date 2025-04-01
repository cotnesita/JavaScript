<center><h1>Capítulo 2: Estructura Léxica</h1></center>

## Introducción
El capítulo 2 titulado "Estructura Léxica" explica cómo se escriben los programas de JavaScript a nivel léxico. En el siguiente capítulo, veremos los tipos y valores primitivos que constituyen la base de los cálculos en JavaScript.

## Desarrollo

<h3 style="color:#f5e1ab">2. Estructura Léxica</h3>

La Estructura Léxica de *JavaScript* son las reglas más básicas que determinan cómo escribir código en Este lenguaje. 

La estructura léxica de *JavaScript* cubre: 

- Sensibilidad a mayúsculas y minúsculas espacios y saltos de línea 
- Comentarios 
- Literales 
- Identificadores de palabras reservadas unicode
- Uso opcional de punto y coma 

<h3 style="color:lightpink">2.1 El Texto del Programa de JavaScript </h3>

*JavaScript* es un lenguaje sensible a mayúsculas y minúsculas por esto hay que mantener un mismo estándar ya sea con o sin mayúsculas pero que todas las líneas tengan un formato igual.

Esto se aplica también a los saltos, pues Java script tiende a ignorar espacios en blanco y **algunos** saltos de línea. Gracias a esto, se pueden usar para dar un formato a tu código.

<h3 style="color:#f5e1ab">2.2 Los Comentarios</h3>

Los comentarios son textos dentro del código que los programadores usan para explicar lo que hacen.

Hay dos tipos de comentarios: 

1. Los comentarios de una sola línea empiezan con `//`
2. Los comentarios de varias líneas van entre `/*` y `*/`

```
// Esto es un comentario de una sola línea.

/* Este también es un comentario */  // Y aquí hay otro comentario.

/*
 * Este es un comentario de múltiples líneas.
 * Los caracteres `*` al inicio de cada línea no son obligatorios,
 * pero ayudan a mejorar la legibilidad.
 */
```

<h3 style="color:#b0f5ab">2.3 Literales</h3>

Las literales son valores de datos que aparecen directamente en un programa. Se usan para darles datos a las variables. 

```javascript
12               // El número doce
1.2              // El número uno punto dos
"hola mundo"     // Una cadena de texto
'Hola'           // Otra cadena de texto
true             // Un valor booleano verdadero
false            // Un valor booleano falso
null             // Indica ausencia de un objeto
```

<h3 style="color:#ffbe69">2.4 Identificadores y Palabras Reservadas</h3>

Un identificador es simplemente un nombre. En JavaScript, los identificadores se usan para nombrar constantes, variables, propiedades, funciones y clases, y para proporcionar etiquetas en ciertos bucles.

Un identificador en JavaScript debe comenzar con una letra, un guion bajo (`_`) o un signo de dólar (`$`). Los caracteres siguientes pueden ser letras, dígitos, guiones bajos o signos de dólar. (Los dígitos no pueden ser el primer carácter para evitar confusión con los números). Ejemplos de identificadores válidos:

```javascript
Copiar
Editar
i
mi_variable
v13
_dummy
$str
```

JavaScript reserva ciertas palabras para su uso interno y no pueden usarse como identificadores.

<h4 style="color:lightblue">2.4.1 Palabras Reservadas</h4>

Son términos especiales parte del lenguaje de javascript y no pueden usarse como nombres de variables, funciones o clases pero pueden ser usadas como nombres de propiedades dentro de un objeto

<h3 style="color:#dfe6f5">2.5 Unicode</h3>

Es un conjunto de caracteres que usan los programas en *JavaScript*, permitiendo su uso en cadenas y comentarios. No es recomendable usar caracteres especiales pues pueden causar errores en otros sistemas. 

<h4 style="color:lightblue">2.5.1 secuencias de escape unicode</h4>

Javascript permite representar caracteres únicos mediante secuencias de escape.
Estas comienzan con un `\u`, seguidas de cuatro dígitos hexadecimales o de un número de hasta seis dígitos dentro de llaves.

<h3 style="color:lightpink">2.6 Uso Opcional del Punto y Coma</h3>

JavaScript permite omitir el punto y coma (`;`) entre declaraciones si están en líneas separadas. Sin embargo, hay casos en los que es obligatorio:

```javascript
Copiar
Editar
a = 3; b = 4;  // Se necesita punto y coma aquí
```
También hay casos en los que JavaScript infiere el punto y coma, lo que puede llevar a errores inesperados:

```javascript
Copiar
Editar
return
true;
```

JavaScript lo interpreta como:

```javascript
Copiar
Editar
return;
true;
```
Para evitar errores, nunca coloques un salto de línea después de return, break o continue.

Otro caso peligroso:

```javascript
Copiar
Editar
let y = x + f
(a+b).toString();
```

JavaScript lo interpretará como:

```javascript
Copiar
Editar
let y = x + f(a+b).toString();
```

Para evitar esto, usa punto y coma explícito:

```javascript
Copiar
Editar
let y = x + f;
(a+b).toString();
```

<h3 style="color:lightpink">2.7 Resumen</h3>

Este capítulo explica las reglas más básicas para escribir código en JavaScript. Aquí tienes un resumen rápido:

- JavaScript diferencia entre mayúsculas y minúsculas.
- Puedes usar espacios y saltos de línea para hacer que tu código sea más legible.
- Usa comentarios para explicar tu código.
- Los literales son valores escritos directamente en el código.
- Los identificadores son nombres para variables y funciones, pero no pueden ser palabras reservadas.
- JavaScript soporta Unicode, pero es mejor usar solo caracteres ASCII en nombres de variables.
- El punto y coma es opcional, pero a veces es obligatorio.
