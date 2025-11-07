


// let listaReservas = JSON.parse(localStorage.getItem("listaReservas")) || [];
// let listaMesas = JSON.parse(localStorage.getItem("listaMesas")) || [];

// const imagenesOcasion = {
//   "Cumpleaños": "cumpleaños.jpg",
//   "Aniversario": "aniversario.jpg",
//   "Negocios": "negocios.jpg",
//   "Cena Romántica": "cena.jpg",
//   "Otro": "otro.jpg",
//   "Graduación": "graduacion.jpg",
//   "Reunión Familiar": "reunionfamiliar.jpg",
//   "Fiesta Infantil": "fiesta infantil.jpg"
// };

// function guardarListaReservas() {
//   localStorage.setItem("listaReservas", JSON.stringify(listaReservas));
// }

// function hayChoqueDeHorario(nueva, idxEditar = null) {
//   return listaReservas.some((reserva, i) => {
//     if (i === idxEditar) return false; 
//     if (reserva.mesaSeleccionada !== nueva.mesaSeleccionada) return false;
//     if (["Cancelada", "Finalizada"].includes(reserva.estadoReserva)) return false;

//     const inicioExistente = new Date(`${reserva.fechaReserva}T${reserva.horaReserva}`);
//     const finExistente = new Date(`${reserva.fechaReserva}T${reserva.horaFin}`);
//     const inicioNueva = new Date(`${nueva.fechaReserva}T${nueva.horaReserva}`);
//     const finNueva = new Date(`${nueva.fechaReserva}T${nueva.horaFin}`);

//     return (inicioNueva < finExistente && finNueva > inicioExistente);
//   });
// }

// function verificarReservasVencidas() {
//   const ahora = new Date();

//   listaReservas.forEach((reserva) => {
//     const inicio = new Date(`${reserva.fechaReserva}T${reserva.horaReserva}`);
//     const fin = new Date(`${reserva.fechaReserva}T${reserva.horaFin}`);
//     let mesa = listaMesas.find(m => m.nombreMesa === reserva.mesaSeleccionada);

//     if (reserva.estadoReserva === "Pendiente") {
//       if (ahora >= inicio && ahora < fin) {
//         reserva.estadoReserva = "Confirmada";
//         if (mesa) mesa.estadoMesa = "ocupada";
//       }
//       if (ahora >= fin) {
//         reserva.estadoReserva = "Finalizada";
//         if (mesa) mesa.estadoMesa = "disponible";
//       }
//     }
//   });

//   localStorage.setItem("listaMesas", JSON.stringify(listaMesas));
//   guardarListaReservas();
//   mostrarReservas();
// }

// setInterval(() => {
//   verificarReservasVencidas();
//   mostrarReservas();
// }, 60000);

// function cargarMesasDisponibles() {
//   const select = document.getElementById("selectMesaDisponible");
//   select.innerHTML = "";

//   listaMesas.forEach(m => {
//     let option = document.createElement("option");
//     option.value = m.nombreMesa;
//     option.textContent = `${m.nombreMesa} - Capacidad ${m.capacidadMesa}`;
//     select.appendChild(option);
//   });
// }

// function mostrarReservas() {
//   const contenedor = document.getElementById("contenedorReservas");
//   contenedor.innerHTML = "";

//   listaReservas.forEach((reserva, i) => {
//     let div = document.createElement("div");
//     div.classList.add("col-md-4");

//     let estadoColor = {
//       "Pendiente": "text-warning",
//       "Confirmada": "text-info",
//       "Cancelada": "text-danger",
//       "Finalizada": "text-success"
//     }[reserva.estadoReserva] || "text-white";

//     let imagenOcasion = reserva.ocasion ? imagenesOcasion[reserva.ocasion] || "" : "";

//     div.innerHTML = `
//       <div class="tarjeta-reserva">
//         <div class="card-body">
//           <h5 class="text-white">👤 ${reserva.nombreCliente}</h5>
//           <p class="text-light">📅 ${reserva.fechaReserva} ⏰ ${reserva.horaReserva} - ${reserva.horaFin}</p>
//           <p class="text-light">👥 ${reserva.cantidadPersonas} personas</p>
//           <p class="text-light">🍽️ Mesa: ${reserva.mesaSeleccionada}</p>
//           ${reserva.ocasion ? `<p class="text-light">🎉 Ocasión: ${reserva.ocasion}</p>` : ""}
//           ${imagenOcasion ? `<div class="text-center"><img src="${imagenOcasion}" alt="${reserva.ocasion}" style="width:100%; max-height:200px; object-fit:contain;" /></div>` : ""}
//           ${reserva.notasReserva ? `<p class="text-light">📝 ${reserva.notasReserva}</p>` : ""}
//           <p class="mb-3">Duración: ${reserva.duracionHoras}h</p>
//           <p class="mb-3">Estado: <strong class="${estadoColor}">${reserva.estadoReserva}</strong></p>
          
//           <div class="btn-group-actions">
//             <button class="btn btn-success btn-sm" onclick="pagarReserva(${i})">💳 Pagar</button>
//             <button class="btn btn-warning btn-sm" onclick="editarReserva(${i})">✏️ Editar</button>
//             <button class="btn btn-danger btn-sm" onclick="cancelarReserva(${i})">❌ Cancelar</button>
//             <button class="btn btn-outline-danger btn-sm" onclick="eliminarReserva(${i})">🗑️ Eliminar</button>
//           </div>
//         </div>
//       </div>
//     `;
//     contenedor.appendChild(div);
//   });
// }

// function pagarReserva(i) {
//   const reserva = listaReservas[i];
//   if (reserva.estadoReserva === "Finalizada") return;

//   listaReservas[i].estadoReserva = "Finalizada";
//   let mesa = listaMesas.find(m => m.nombreMesa === reserva.mesaSeleccionada);
//   if (mesa) mesa.estadoMesa = "disponible";

//   localStorage.setItem("listaMesas", JSON.stringify(listaMesas));
//   guardarListaReservas();
//   mostrarReservas();
// }

// function cancelarReserva(i) {
//   listaReservas[i].estadoReserva = "Cancelada";
//   let mesa = listaMesas.find(m => m.nombreMesa === listaReservas[i].mesaSeleccionada);
//   if (mesa) mesa.estadoMesa = "disponible";

//   localStorage.setItem("listaMesas", JSON.stringify(listaMesas));
//   guardarListaReservas();
//   mostrarReservas();
// }

// function eliminarReserva(i) {
//   listaReservas.splice(i, 1);
//   guardarListaReservas();
//   mostrarReservas();
// }

// document.getElementById("formularioReserva").addEventListener("submit", (e) => {
//   e.preventDefault();

//   const idx = document.getElementById("indiceReserva").value;
//   const nombreCliente = document.getElementById("inputNombreCliente").value.trim();
//   const fechaReserva = document.getElementById("inputFechaReserva").value;
//   const horaReserva = document.getElementById("inputHoraReserva").value;
//   const cantidadPersonas = parseInt(document.getElementById("inputCantidadPersonas").value, 10);
//   const mesaSeleccionada = document.getElementById("selectMesaDisponible").value;
//   const ocasion = document.getElementById("selectOcasión").value;
//   const notasReserva = document.getElementById("inputNotasReserva").value.trim();
//   const duracionHoras = parseInt(document.getElementById("inputDuracion").value, 10);

//   let inicioNueva = new Date(`${fechaReserva}T${horaReserva}`);
//   let finNueva = new Date(inicioNueva.getTime() + duracionHoras * 60 * 60 * 1000);

//   const nuevaReserva = {
//     nombreCliente,
//     fechaReserva,
//     horaReserva,
//     cantidadPersonas,
//     mesaSeleccionada,
//     ocasion,
//     notasReserva,
//     estadoReserva: "Pendiente",
//     duracionHoras,
//     horaFin: finNueva.toTimeString().slice(0,5)
//   };

//   if (hayChoqueDeHorario(nuevaReserva, idx ? parseInt(idx) : null)) {
//     Swal.fire({ icon: 'error', title: 'Horario no disponible', text: 'La mesa ya tiene otra reserva en ese horario.' });
//     return;
//   }

//   if (idx) {
//     listaReservas[idx] = { ...listaReservas[idx], ...nuevaReserva };
//   } else {
//     listaReservas.push(nuevaReserva);
//   }

//   localStorage.setItem("listaMesas", JSON.stringify(listaMesas));
//   guardarListaReservas();
//   mostrarReservas();
//   bootstrap.Modal.getInstance(document.getElementById("modalReserva")).hide();
// });

// function editarReserva(i) {
//   const reserva = listaReservas[i];

//   document.getElementById("indiceReserva").value = i;
//   document.getElementById("inputNombreCliente").value = reserva.nombreCliente;
//   document.getElementById("inputFechaReserva").value = reserva.fechaReserva;
//   document.getElementById("inputHoraReserva").value = reserva.horaReserva;
//   document.getElementById("inputCantidadPersonas").value = reserva.cantidadPersonas;
//   document.getElementById("selectOcasión").value = reserva.ocasion || "";
//   document.getElementById("inputNotasReserva").value = reserva.notasReserva || "";
//   document.getElementById("inputDuracion").value = reserva.duracionHoras;

//   cargarMesasDisponibles();
//   document.getElementById("selectMesaDisponible").value = reserva.mesaSeleccionada;

//   new bootstrap.Modal(document.getElementById("modalReserva")).show();
// }

// document.getElementById("btnAgregarReserva").addEventListener("click", () => {
//   document.getElementById("formularioReserva").reset();
//   document.getElementById("indiceReserva").value = "";
//   cargarMesasDisponibles();
//   new bootstrap.Modal(document.getElementById("modalReserva")).show();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   mostrarReservas();
//   verificarReservasVencidas();

//   // 👇 Revisar si venimos desde "Mesas"
//   const mesaPreseleccionada = localStorage.getItem("mesaParaReservar");
//   if (mesaPreseleccionada) {
//     localStorage.removeItem("mesaParaReservar");

//     document.getElementById("formularioReserva").reset();
//     document.getElementById("indiceReserva").value = "";
//     cargarMesasDisponibles();
//     document.getElementById("selectMesaDisponible").value = mesaPreseleccionada;

//     new bootstrap.Modal(document.getElementById("modalReserva")).show();
//   }
// });







document.addEventListener("DOMContentLoaded", () => {
  let listaReservas = JSON.parse(localStorage.getItem("listaReservas")) || [];
  let listaMesas = JSON.parse(localStorage.getItem("listaMesas")) || [];

  function mostrarAlerta(titulo, mensaje) {
    const label = document.getElementById("modalAlertaLabel");
    const body = document.getElementById("modalAlertaMensaje");
    const modal = document.getElementById("modalAlerta");
    if (label) label.textContent = titulo || "Aviso";
    if (body) body.textContent = mensaje || "";
    if (modal && window.bootstrap?.Modal) new bootstrap.Modal(modal).show();
  }

  const btnAgregarMesa = document.getElementById("btnAgregarMesa");
  const modalMesaEl   = document.getElementById("modalMesa");
  const modalMesa     = modalMesaEl && window.bootstrap?.Modal ? new bootstrap.Modal(modalMesaEl) : null;

  const formMesa          = document.getElementById("formularioMesa");
  const grupoEstadoMesa   = document.getElementById("grupoEstadoMesa");
  const selectEstadoMesa  = document.getElementById("selectEstadoMesa");
  const indiceMesa        = document.getElementById("indiceMesa");
  const inputCapacidad    = document.getElementById("inputCapacidadMesa");
  const inputUbicacion    = document.getElementById("inputUbicacionMesa");

  function mostrarMesas() {
    const contenedor = document.getElementById("contenedorMesas");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    listaMesas.forEach((m, i) => {
      const nombre = m.nombreMesa || `Mesa ${i + 1}`;
      const estado = (m.estadoMesa || "disponible").toLowerCase(); 

      const col = document.createElement("div");
      col.className = "col-sm-6 col-md-4";
      col.innerHTML = `
        <div class="card h-100 mesa-card estado-${estado}" data-estado="${estado}">
          <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="mb-1">Capacidad: ${m.capacidadMesa}</p>
            <p class="mb-1">Ubicación: ${m.ubicacionMesa}</p>
            <p class="mb-3 estado-mesa-texto">Estado: ${m.estadoMesa}</p>

            <div class="d-flex flex-wrap gap-2">
              <button class="btn btn-sm btn-outline-danger" onclick="eliminarMesa(${i})">🗑️ Eliminar</button>
              <button class="btn btn-sm btn-warning" onclick="editarMesa(${i})">✏️ Editar</button>
              <button class="btn btn-sm btn-primary" onclick="reservarMesa(${i})">📅 Reservar</button>
            </div>
          </div>
        </div>
      `;
      contenedor.appendChild(col);
    });
  }

  function prepararModalMesaParaCrear() {
    if (!formMesa) return;
    indiceMesa.value = "";
    inputCapacidad.value = "";
    inputUbicacion.value = "";
    if (grupoEstadoMesa) grupoEstadoMesa.classList.add("d-none"); 
    if (selectEstadoMesa) selectEstadoMesa.value = "disponible";  
    const t = document.getElementById("modalMesaLabel");
    if (t) t.textContent = "Crear Mesa";
  }

  function prepararModalMesaParaEditar(mesa) {
    if (!formMesa) return;
    if (grupoEstadoMesa) grupoEstadoMesa.classList.remove("d-none"); 
    const t = document.getElementById("modalMesaLabel");
    if (t) t.textContent = "Editar Mesa";
    inputCapacidad.value = mesa.capacidadMesa;
    inputUbicacion.value = mesa.ubicacionMesa;
    if (selectEstadoMesa) selectEstadoMesa.value = mesa.estadoMesa || "disponible";
  }

  if (btnAgregarMesa && modalMesa) {
    btnAgregarMesa.addEventListener("click", () => {
      prepararModalMesaParaCrear();
      modalMesa.show();
    });
  }

  window.editarMesa = (i) => {
    const mesa = listaMesas[i];
    if (!mesa || !modalMesa) return;
    indiceMesa.value = i;
    prepararModalMesaParaEditar(mesa);
    modalMesa.show();
  };

  window.eliminarMesa = (i) => {
    if (listaMesas[i] == null) return;
    listaMesas.splice(i, 1);
    localStorage.setItem("listaMesas", JSON.stringify(listaMesas));
    mostrarMesas();
  };

  window.reservarMesa = (i) => {
    const mesa = listaMesas[i];
    if (!mesa) return;
    const nombreMesa = mesa.nombreMesa || `Mesa ${i + 1}`;
    localStorage.setItem("mesaParaReservar", nombreMesa);
    window.location.href = "reservas_dark.html";
  };

  if (formMesa) {
    formMesa.addEventListener("submit", (e) => {
      if (!formMesa.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        formMesa.classList.add("was-validated");
        mostrarAlerta("Campos obligatorios", "Revisa los campos del formulario de Mesa.");
        return;
      }
      e.preventDefault();

      const idx = indiceMesa.value;
      const capacidadMesa = parseInt(inputCapacidad.value, 10);
      const ubicacionMesa = inputUbicacion.value.trim();

      if (!ubicacionMesa) {
        mostrarAlerta("Campo vacío", "La ubicación de la mesa no puede estar vacía.");
        inputUbicacion.classList.add("is-invalid");
        return;
      } else {
        inputUbicacion.classList.remove("is-invalid");
      }

      if (isNaN(capacidadMesa) || capacidadMesa <= 0) {
        mostrarAlerta("Capacidad inválida", "La capacidad debe ser un número mayor que 0.");
        inputCapacidad.classList.add("is-invalid");
        return;
      } else {
        inputCapacidad.classList.remove("is-invalid");
      }

      if (idx === "") {
        const nuevaMesa = {
          nombreMesa: `Mesa ${listaMesas.length + 1}`,
          capacidadMesa,
          ubicacionMesa,
          estadoMesa: "disponible",
        };
        listaMesas.push(nuevaMesa);
      } else {
        listaMesas[idx] = {
          ...listaMesas[idx],
          capacidadMesa,
          ubicacionMesa,
          estadoMesa: selectEstadoMesa?.value || "disponible",
        };
      }

      localStorage.setItem("listaMesas", JSON.stringify(listaMesas));
      mostrarMesas();
      modalMesa?.hide();
    });
  }

  mostrarMesas();
});
