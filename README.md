# Chat Simple

Chatbot web basico hecho con HTML, CSS y JavaScript. No necesita instalar programas ni usar servidor.

## Como abrirlo

1. Abre el archivo `index.html` en un navegador.
2. Escribe un mensaje en el campo de texto.
3. Presiona el boton Enviar o la tecla Enter.

## Funciones

El chatbot muestra un mensaje de bienvenida al abrirse.

El usuario puede escribir mensajes de hasta 200 caracteres. Cada mensaje enviado aparece al lado derecho de la conversacion y la respuesta del chatbot aparece al lado izquierdo.

El chatbot reconoce estas palabras:

- hola o buenas: muestra un saludo.
- horario: indica el horario de atencion de lunes a viernes, de 9 am a 6 pm.
- precio, costo o servicio: muestra la lista de servicios disponibles.
- nombre de un servicio: muestra el costo configurado para ese servicio.
- contacto o telefono: muestra un numero de contacto de ejemplo.
- gracias: responde de forma cordial.

Si el mensaje no contiene una de esas palabras, el chatbot indica las opciones que se pueden consultar.

La conversacion se desplaza automaticamente hacia el ultimo mensaje. La pagina se adapta a pantallas de celular y computadora.

## Archivos

- `index.html`: estructura de la pagina.
- `styles.css`: colores, distribucion y vista adaptable.
- `app.js`: envio de mensajes y respuestas del chatbot.

## Cambiar servicios y costos

En `app.js` esta la lista `servicios`. Reemplaza los nombres y los valores de ejemplo por los servicios y costos reales.

```js
const servicios = {
  "servicio 1": "S/ 100",
  "servicio 2": "S/ 200",
  "servicio 3": "S/ 300",
};
```

Ejemplo:

```js
const servicios = {
  "servicio a": "50",
  "servicio b": "80",
};
```

Despues de guardar el archivo, recarga la pagina en el navegador.

## Limites

Las respuestas, servicios y costos se generan en el navegador. La conversacion no se guarda al cerrar o recargar la pagina.
