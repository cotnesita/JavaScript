<center><h1>Capítulo 1: Introducción a JavaScript</h1></center>

## Introducción
El capítulo 1 titulado "Introducción a JavaScript" aborda temas clave como la historia y evolución de JavaScript, sus principales características, junto con una breve introducción al uso de JavaScript en navegadores y en entornos como Node.js.


## Desarrollo
<h3 style="color:lightblue">1. Introducción a JavaScript</h3>

**JavaScript** es el lenguaje de programación de la web mayormente utilizado. `Node.js` ha permitido programar con JavaScript fuera de los navegadores web, y su éxito ha hecho que **JavaScript** sea ahora también el lenguaje de programación más utilizado entre los desarrolladores de software.

Las variables en **JavaScript** no tienen un tipo fijo. 

Su sintaxis está basada en `Java`, pero los lenguajes en sí no están relacionados. **JavaScript** toma las funciones de primera clase de `Scheme` y la herencia basada en prototipos de `Self`.

<h4 style="color:lightblue">JavaScript: Nombres, Versiones y Modos</h4>

**JavaScript** es una marca registrada con licencia, creada por *Netscape* (Mozilla); el cual sometió dicho lenguaje a un proceso de estandarización en *ECMA* (European Computer Manufacturer’s Association). Hubo algunos problemas de copyright y la versión estándar de **JavaScript** se llamó *ECMAScript*. *ES6*, lanzado en 2015, introdujo características importantes, que transformaron **JavaScript** en un lenguaje general a gran escala; de ahí en adelante el estándar *ECMAScript* ha adoptado un ciclo de lanzamientos anuales.

Al intentar corregir errores de versiones anteriores a *E5* descubrieron que, al eliminar funciones defectuosas heredadas, la compatibilidad entre versiones se perdía. Para resolver esto se activa el "modo estricto" de **JavaScript**, que corrige varios errores tempranos del lenguaje con `Strict`. En *ES6* y versiones posteriores, el uso de nuevas características del lenguaje a menudo activa automáticamente el modo estricto.

<h3 style="color:lightpink">1.1 Explorando JavaScript</h3>

La forma más fácil de probar **JavaScript** es abrir las herramientas de desarrollo de tu navegador web con `F12, Ctrl+Shift+I` o `Cmd+Opt+I` y seleccionar la pestaña "Consola". Desde ahí, puedes escribir código y ver los resultados obtenidos.

Otra opción es descargar e instalar `Node.js` desde https://nodejs.org. Una vez instalado, abre una ventana de Terminal y ejecuta node.

<h3 style="color:#f5e1ab">1.2 Ejemplo: "Hola Mundo"</h3>

Cuando estés listo para escribir fragmentos de código más largos, probablemente prefieras usar un editor de texto en lugar de la consola interactiva. Puedes copiar y pegar el código en la consola de JavaScript o en una sesión de Node, o guardarlo en un archivo .js y ejecutarlo con Node:

```javascript
$ n  ode hola.js
```

Por ejemplo, si guardas este código en un archivo llamado hola.js:

```javascript
console.log("¡Hola Mundo!");
```

Y lo ejecutas con Node:

```javascript
$ node hola.js
```

Verás la salida "¡Hola Mundo!".

Si quieres ver este mensaje en la consola de un navegador, crea un archivo hola.html con este contenido:

```javascript
<script src="hola.js"></script>
```

Luego, ábrelo en un navegador y revisa la consola de las herramientas de desarrollo.

<h3 style="color:#b0f5ab">1.3 Un recorrido por JavaScript</h3>

Esta sección ofrece una introducción rápida, mediante ejemplos de código, al lenguaje JavaScript. Después de este capítulo introductorio, profundizaremos en los detalles:

- **Capítulo 2**: Explica los comentarios, los puntos y comas, y el conjunto de caracteres Unicode en JavaScript.

- **Capítulo 3**: Presenta las variables y los valores que pueden contener.

- **Capítulo 4**: Introduce las expresiones y operadores.

- **Capítulo 5**: Explica las declaraciones y estructuras de control.

- **Capítulo 6 y 7**: Detallan los objetos y arrays, que son fundamentales en JavaScript.

Este capítulo continúa con una introducción a las funciones, operadores y estructuras de control en **JavaScript**. Aprenderemos a crear métodos dentro de objetos, escribir funciones reutilizables y controlar el flujo de ejecución con condicionales y bucles. Todo esto será cubierto en mayor profundidad en los próximos capítulos.

<h3 style="color:#ffbe69">1.4 titulo</h3>

El siguiente ejemplo es un programa en `Node.js` que lee texto desde la entrada estándar, calcula un histograma de la frecuencia de caracteres y luego imprime el resultado. Puedes ejecutar este programa de la siguiente manera para analizar la frecuencia de caracteres en su propio código fuente:

```javascript
$ node histograma.js < histograma.js
```

Este ejemplo usa varias características avanzadas de **JavaScript** y está diseñado para mostrar cómo se ven los programas del mundo real en este lenguaje. No es necesario comprender todo el código ahora mismo, ya que se explicará en los capítulos siguientes.

<h3 style="color:#dfe6f5">1.5 Resumen</h3>

Este libro explica **JavaScript** desde los fundamentos hasta sus características más avanzadas. El objetivo es proporcionar una guía definitiva de **JavaScript**, explicando el lenguaje con un nivel de detalle exhaustivo. En los siguientes capítulos, continuaremos con temas como módulos, la biblioteca estándar de **JavaScript**, programación asíncrona, herramientas de desarrollo y el uso de JavaScript en navegadores y servidores con `Node.js`.
