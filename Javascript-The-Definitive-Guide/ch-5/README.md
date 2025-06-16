<center><h1>Capítulo 5: Declaraciones</h1></center>

## Introducción
El capítulo 5 titulado "Declaraciones" trata sobre el **funcionamiento de los protocolos de enrutamiento**,  y  cómo se determina el camino que siguen los datos para llegar de un punto a otro en una red.

## Desarrollo
<h3 style="color:lightblue">1. ¿Qué es un protocolo de enrutamiento?</h3>

Un protocolo de enrutamiento permite a los dispositivos de red (como routers) **elegir el mejor camino** para enviar datos hacia su destino. Estos protocolos son esenciales para que el internet y las redes grandes funcionen correctamente, ya que ayudan a que los datos no se pierdan ni tomen caminos equivocados.

<h3 style="color:lightpink">2. Tipos de protocolos de enrutamiento</h3>
Hay diferentes formas de decidir qué ruta tomar. Los protocolos se clasifican en:

<h4 style="color:lightpink">2.1 Protocolos de vector de distancia</h4>

Estos protocolos calculan el mejor camino **contando cuántos saltos hay** entre un punto y otro. Entre menos saltos, mejor es el camino.

**Ejemplo:** RIP (Routing Information Protocol)

- Si un router ve dos caminos posibles a un destino, elegirá el que tenga menos pasos (o saltos), sin importar si es más lento o congestionado.

<h4 style="color:lightpink">2.2 Protocolos de estado de enlace</h4>

A diferencia del anterior, estos protocolos analizan **el estado de cada conexión (enlace)** para elegir la ruta más rápida y confiable, no solo la más corta.

**Ejemplo:** OSPF (Open Shortest Path First)

- Un router con OSPF evaluará si un camino está saturado o si una conexión está caída, y tomará decisiones con base en esa información.

<h3 style="color:#f5e1ab">3. Cómo elige una ruta un protocolo</h3>

Cada protocolo usa un **método propio para calcular** cuál es la mejor ruta. Esta decisión se basa en "métricas", que pueden ser el número de saltos, el tiempo de respuesta, la velocidad del enlace, entre otros.

**Ejemplo práctico:**

- Si hay dos rutas hacia un destino:
  - Ruta 1: 3 saltos pero conexión lenta.
  - Ruta 2: 5 saltos pero conexión rápida.
- Un protocolo como RIP elegirá Ruta 1 (menos saltos).
- Un protocolo como OSPF puede elegir Ruta 2 (mejor rendimiento).

<h3 style="color:#b0f5ab">4. Actualización de rutas</h3>

Los protocolos no solo eligen rutas, también **actualizan la información** de forma constante para adaptarse a cambios en la red (como caídas de conexión o nuevos caminos disponibles).

- Los protocolos de vector de distancia actualizan de manera periódica.
- Los de estado de enlace solo actualizan cuando detectan un cambio.

<h3 style="color:#ffbe69">5. Prevención de errores</h3>

Algunos protocolos implementan mecanismos para **evitar errores** comunes como bucles infinitos (donde los datos giran sin llegar a su destino).

- RIP, por ejemplo, tiene un límite de 15 saltos. Si el destino está a más de eso, se considera inalcanzable.

<h3 style="color:#ffbe69">6. Ejercicios y ejemplos en el capítulo</h3>

El capítulo incluye ejemplos donde se muestran **tablas de enrutamiento** y cómo cambian cuando se conecta o desconecta una parte de la red. Estos ayudan a entender cómo los routers reaccionan ante los cambios.

**Ejemplo explicado:**

- Si se cae un enlace entre dos routers, el protocolo detecta la falla y recalcula las rutas para que los datos sigan fluyendo por otro camino disponible.

<h3 style="color:#ffbe69">7. Resumen</h3>

Los protocolos de enrutamiento son como los GPS de los routers: les dicen cómo llegar a su destino de forma eficiente. Entender su lógica básica ayuda a visualizar cómo funciona internet "por dentro".
