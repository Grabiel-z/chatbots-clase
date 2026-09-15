const formulario = document.querySelector("#formulario-chat");
const entrada = document.querySelector("#entrada");
const mensajes = document.querySelector("#mensajes");

const servicios = {
  "servicio 1": "S/ 100",
  "servicio 2": "S/ 200",
  "servicio 3": "S/ 300",
};

function obtenerRespuesta(texto) {
  const mensaje = texto.toLowerCase();
  const nombresServicios = Object.keys(servicios);
  const listaServicios = nombresServicios.join(", ");

  for (const servicio of nombresServicios) {
    if (mensaje.includes(servicio)) {
      return `El costo de ${servicio} es: ${servicios[servicio]}.`;
    }
  }

  if (mensaje.includes("hola") || mensaje.includes("buenas")) {
    return "Hola. En que puedo ayudarte?";
  }

  if (mensaje.includes("horario")) {
    return "Atendemos de lunes a viernes de 9 am a 6 pm.";
  }

  if (
    mensaje.includes("precio") ||
    mensaje.includes("costo") ||
    mensaje.includes("servicio")
  ) {
    return `Los servicios disponibles son: ${listaServicios}. Escribe el nombre de un servicio para ver su costo.`;
  }

  if (mensaje.includes("contacto") || mensaje.includes("telefono")) {
    return "Puedes escribirnos al 999 999 999.";
  }

  if (mensaje.includes("gracias")) {
    return "De nada. Estoy aqui para ayudarte.";
  }

  return "No entendi tu mensaje. Puedes preguntar por servicios, costo, horario o contacto.";
}

function agregarMensaje(texto, tipo) {
  const mensaje = document.createElement("article");
  const contenido = document.createElement("p");

  mensaje.className = `mensaje ${tipo}`;
  contenido.textContent = texto;
  mensaje.append(contenido);
  mensajes.append(mensaje);
  mensajes.scrollTop = mensajes.scrollHeight;
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const texto = entrada.value.trim();
  if (!texto) {
    return;
  }

  agregarMensaje(texto, "usuario");
  entrada.value = "";
  agregarMensaje(obtenerRespuesta(texto), "bot");
  entrada.focus();
});
