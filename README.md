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
- precio o costo: indica que el chatbot es una demostracion y no maneja precios.
- contacto o telefono: muestra un numero de contacto de ejemplo.
- gracias: responde de forma cordial.

Si el mensaje no contiene una de esas palabras, el chatbot indica las opciones que se pueden consultar.

La conversacion se desplaza automaticamente hacia el ultimo mensaje. La pagina se adapta a pantallas de celular y computadora.

## Archivos

- `index.html`: estructura de la pagina.
- `styles.css`: colores, distribucion y vista adaptable.
- `app.js`: envio de mensajes y respuestas del chatbot.

## Limites

Las respuestas son fijas y se generan en el navegador. La conversacion no se guarda al cerrar o recargar la pagina.
