// antagonistas.js

// Datos de los antagonistas
const villainsData = {
  witch: {
    title: "The Old Witch",
    level: "Nivel 85",
    class: "Hechicera Oscura",
    description: "Una poderosa hechicera que ha dominado las artes oscuras durante siglos. Su conocimiento de magia prohibida la convierte en una amenaza para todo el reino. Originaria de las Tierras Sombrías, busca el poder absoluto mediante rituales ancestrales.",
    stats: {
      hp: 4200,
      attack: 1800,
      defense: 1200,
      magic: 3800,
      speed: 900
    },
    skills: [
      {
        name: "Maleficio Ancestral",
        icon: "🔮",
        description: "Invoca espíritus ancestrales que drenan la vida de los enemigos"
      },
      {
        name: "Nube de Caos",
        icon: "🌪️",
        description: "Crea una tormenta mágica que confunde y daña a múltiples objetivos"
      },
      {
        name: "Pacto Oscuro",
        icon: "⚰️",
        description: "Sacrifica parte de su vida para potenciar enormemente sus hechizos"
      },
      {
        name: "Resurrección Prohibida",
        icon: "💀",
        description: "Revive aliados caídos como esqueletos guerreros bajo su control"
      }
    ],
    weapons: [
      {
        name: "Báculo del Vacío",
        type: "Báculo Legendario",
        description: "Un báculo tallado de hueso de dragón ancestral que amplifica la magia oscura",
        damage: "+850 Magia",
        effect: "Drena 15% de maná por golpe"
      },
      {
        name: "Grimorio de las Sombras",
        type: "Tomo Arcano",
        description: "Libro prohibido que contiene hechizos olvidados de la era antigua",
        damage: "+720 Magia",
        effect: "Reduce resistencia mágica enemiga en 30%"
      }
    ],
    modelUrl: "https://sketchfab.com/models/142672ddd31d4222af3ac86925d82b35/embed"
  },
  fia: {
    title: "Fia",
    level: "Nivel 78",
    class: "Asesina",
    description: "Maestra del sigilo y las artes de la muerte silenciosa. Entrenada desde la infancia en las sombras, Fia se mueve como una fantasma entre sus objetivos. Su lealtad es hacia el mejor postor, y su precio siempre es la sangre.",
    stats: {
      hp: 2800,
      attack: 3200,
      defense: 800,
      magic: 600,
      speed: 4000
    },
    skills: [
      {
        name: "Golpe Fantasma",
        icon: "👻",
        description: "Ataca desde las sombras con daño crítico garantizado"
      },
      {
        name: "Veneno Letal",
        icon: "🧪",
        description: "Aplica venenos que causan daño prolongado y reducen defensa"
      },
      {
        name: "Espejismo",
        icon: "🔄",
        description: "Crea ilusiones para confundir y distraer a los enemigos"
      },
      {
        name: "Asesinato Instantáneo",
        icon: "🗡️",
        description: "Ejecución mortal con alta probabilidad de eliminar objetivos débiles"
      }
    ],
    weapons: [
      {
        name: "Dagas del Crepúsculo",
        type: "Dagas Gemelas",
        description: "Par de dagas forjadas con acero estelar que brillan con luz tenue",
        damage: "+450 Ataque c/u",
        effect: "30% probabilidad de ataque doble"
      },
      {
        name: "Shuriken Venenoso",
        type: "Arma Arrojadiza",
        description: "Estrellas afiladas impregnadas con neurotoxina paralizante",
        damage: "+280 Ataque",
        effect: "Envenena al objetivo por 15 segundos"
      }
    ],
    modelUrl: "https://sketchfab.com/models/a580604eeebb459db2e0bdbb270e1249/embed"
  },
  ciri: {
    title: "Ciri",
    level: "Nivel 92",
    class: "Viajera Dimensional",
    description: "Ser único con la capacidad de atravesar realidades y tiempos. Sus poderes espacio-temporales la convierten en una adversaria impredecible y extremadamente peligrosa. Busca venganza por la destrucción de su dimensión natal.",
    stats: {
      hp: 3800,
      attack: 2500,
      defense: 1600,
      magic: 3400,
      speed: 3500
    },
    skills: [
      {
        name: "Desgarro Dimensional",
        icon: "🌀",
        description: "Abre portales que dañan a enemigos en un área amplia"
      },
      {
        name: "Paradoja Temporal",
        icon: "⏳",
        description: "Ralentiza el tiempo alrededor de los enemigos"
      },
      {
        name: "Teletransporte",
        icon: "⚡",
        description: "Se mueve instantáneamente por el campo de batalla"
      },
      {
        name: "Colapso de Realidad",
        icon: "💥",
        description: "Implosión dimensional que causa daño masivo"
      }
    ],
    weapons: [
      {
        name: "Espada de la Realidad",
        type: "Espada Dimensional",
        description: "Hoja que existe en múltiples dimensiones simultáneamente",
        damage: "+680 Ataque",
        effect: "Ignora 50% de la defensa enemiga"
      },
      {
        name: "Amuleto del Vacío",
        type: "Artefacto Ancestral",
        description: "Gema que canaliza energía de dimensiones alternativas",
        damage: "+550 Magia",
        effect: "Regenera 5% de maná por segundo"
      }
    ],
    modelUrl: "https://sketchfab.com/models/880857157db54a96a79c3327ebf8e7f1/embed"
  },
  wolf: {
    title: "White Wolf",
    level: "Nivel 88",
    class: "Cazador de Monstruos",
    description: "Cazador legendario que ha sobrevivido a incontables batallas contra criaturas sobrenaturales. Su cuerpo está cubierto de cicatrices que cuentan historias de enfrentamientos épicos. Ahora caza tanto monstruos como humanos que se interponen en su camino.",
    stats: {
      hp: 4500,
      attack: 2900,
      defense: 2200,
      magic: 800,
      speed: 1800
    },
    skills: [
      {
        name: "Furia del Lobo",
        icon: "🐺",
        description: "Entra en estado de furia aumentando drásticamente su fuerza"
      },
      {
        name: "Sentidos Agudizados",
        icon: "👁️",
        description: "Detecta puntos débiles y aumenta probabilidad de crítico"
      },
      {
        name: "Corte Giratorio",
        icon: "⚔️",
        description: "Ataque en área que golpea a todos los enemigos cercanos"
      },
      {
        name: "Instinto de Supervivencia",
        icon: "❤️",
        description: "Regenera salud cuando está por debajo del 30%"
      }
    ],
    weapons: [
      {
        name: "Espada de Plata Forjada",
        type: "Espada de Cazador",
        description: "Hoja de plata pura forjada con técnicas ancestrales antimonstruos",
        damage: "+720 Ataque",
        effect: "Doble daño contra criaturas mágicas"
      },
      {
        name: "Ballesta Pesada",
        type: "Arma a Distancia",
        description: "Ballesta modificada con mecanismos de precisión mejorada",
        damage: "+580 Ataque",
        effect: "Alta probabilidad de aturdir al objetivo"
      }
    ],
    modelUrl: "https://sketchfab.com/models/83e7f955589b4aac89bb2d8b70e671dd/embed"
  },
  maria: {
    title: "Maria",
    level: "Nivel 81",
    class: "Cazadora Nocturna",
    description: "Cazadora que opera exclusivamente durante la noche, usando la oscuridad como su aliada. Sus movimientos son tan silenciosos como la brisa nocturna y sus ataques tan letales como el veneno más potente. Tiene una conexión especial con las criaturas de la noche.",
    stats: {
      hp: 3200,
      attack: 2700,
      defense: 1400,
      magic: 1200,
      speed: 3200
    },
    skills: [
      {
        name: "Sombras de la Noche",
        icon: "🌑",
        description: "Se fusiona con las sombras volviéndose temporalmente invisible"
      },
      {
        name: "Garras Lunares",
        icon: "🌙",
        description: "Ataques cargados con energía lunar que atraviesan armaduras"
      },
      {
        name: "Llamado Nocturno",
        icon: "🐾",
        description: "Invoca criaturas de la noche para luchar a su lado"
      },
      {
        name: "Danza de la Muerte",
        icon: "💃",
        description: "Serie de ataques rápidos que aumentan su velocidad con cada golpe"
      }
    ],
    weapons: [
      {
        name: "Arco del Cazador Lunar",
        type: "Arco Compuesto",
        description: "Arco hecho de madera de árbol ancestral bajo la luz de luna llena",
        damage: "+620 Ataque",
        effect: "Flechas rastreadoras que no fallan"
      },
      {
        name: "Cuchillas del Anochecer",
        type: "Cuchillas de Mano",
        description: "Par de cuchillas curvas que brillan con tenue luz plateada",
        damage: "+480 Ataque c/u",
        effect: "Aumenta velocidad de ataque en 25%"
      }
    ],
    modelUrl: "https://sketchfab.com/models/3bcce544f16e4539ac9582e2d4eb9543/embed"
  }
};

// Variables globales
let currentVillain = null;

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  initializeLoader();
  initializeCards();
  initializeModal();
  initializeTabs();
});

// Simular carga
function initializeLoader() {
  const loader = document.getElementById('loader');
  const villainsScene = document.querySelector('.villains-scene');
  
  // Simular tiempo de carga
  setTimeout(() => {
    loader.style.display = 'none';
    villainsScene.classList.remove('hidden');
    
    // Pequeño delay para la animación de aparición
    setTimeout(() => {
      villainsScene.classList.add('show');
    }, 100);
  }, 3000);
}

// Inicializar eventos de las tarjetas
function initializeCards() {
  const villainCards = document.querySelectorAll('.villain-card');
  
  villainCards.forEach(card => {
    card.addEventListener('click', function() {
      const villainType = this.getAttribute('data-villain');
      openModal(villainType);
    });
  });
}

// Inicializar el modal
function initializeModal() {
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.close-btn');
  
  // Cerrar modal con el botón X
  closeBtn.addEventListener('click', closeModal);
  
  // Cerrar modal haciendo clic fuera del contenido
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Cerrar modal con tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
}

// Inicializar sistema de pestañas
function initializeTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      switchTab(tabId);
    });
  });
}

// Cambiar entre pestañas
function switchTab(tabId) {
  // Remover clase active de todos los botones y contenidos
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => btn.classList.remove('active'));
  tabContents.forEach(content => content.classList.remove('active'));
  
  // Activar la pestaña seleccionada
  document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
  document.getElementById(`tab-${tabId}`).classList.add('active');
}

// Abrir modal con datos del villano
function openModal(villainType) {
  const modal = document.getElementById('modal');
  const villain = villainsData[villainType];
  
  if (!villain) return;
  
  currentVillain = villainType;
  
  // Actualizar información básica
  document.getElementById('modal-title').textContent = villain.title;
  document.getElementById('modal-level').textContent = villain.level;
  document.getElementById('modal-class').textContent = villain.class;
  document.getElementById('modal-description').textContent = villain.description;
  
  // Actualizar modelo 3D
  document.getElementById('modal-iframe').src = villain.modelUrl;
  
  // Actualizar estadísticas
  updateStats(villain.stats);
  
  // Actualizar habilidades
  updateSkills(villain.skills);
  
  // Actualizar armas
  updateWeapons(villain.weapons);
  
  // Mostrar modal
  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
  
  // Cambiar a pestaña de habilidades por defecto
  switchTab('skills');
}

// Cerrar modal
function closeModal() {
  const modal = document.getElementById('modal');
  
  modal.classList.remove('show');
  setTimeout(() => {
    modal.classList.add('hidden');
    // Limpiar el iframe para detener la reproducción
    document.getElementById('modal-iframe').src = '';
  }, 400);
}

// Actualizar barras de estadísticas
function updateStats(stats) {
  const maxValues = {
    hp: 5000,
    attack: 4000,
    defense: 2500,
    magic: 4000,
    speed: 4000
  };
  
  Object.keys(stats).forEach(stat => {
    const value = stats[stat];
    const maxValue = maxValues[stat];
    const percentage = (value / maxValue) * 100;
    
    // Actualizar valor numérico
    document.getElementById(`stat-${stat}`).textContent = value.toLocaleString();
    
    // Actualizar barra de progreso
    const fillElement = document.getElementById(`fill-${stat}`);
    fillElement.style.width = `${percentage}%`;
    
    // Añadir animación de llenado
    setTimeout(() => {
      fillElement.style.transition = 'width 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    }, 100);
  });
}

// Actualizar lista de habilidades
function updateSkills(skills) {
  const skillsContainer = document.getElementById('modal-skills');
  skillsContainer.innerHTML = '';
  
  skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill-card';
    skillElement.innerHTML = `
      <div class="skill-icon">${skill.icon}</div>
      <div class="skill-name">${skill.name}</div>
      <div class="skill-description">${skill.description}</div>
    `;
    skillsContainer.appendChild(skillElement);
  });
}

// Actualizar lista de armas
function updateWeapons(weapons) {
  const weaponsContainer = document.getElementById('modal-weapons');
  weaponsContainer.innerHTML = '';
  
  weapons.forEach(weapon => {
    const weaponElement = document.createElement('div');
    weaponElement.className = 'weapon-card';
    weaponElement.innerHTML = `
      <div class="weapon-image">${weapon.type.includes('Espada') ? '⚔️' : 
                                 weapon.type.includes('Daga') ? '🗡️' : 
                                 weapon.type.includes('Arco') ? '🏹' : 
                                 weapon.type.includes('Báculo') ? '🔮' : '🛡️'}</div>
      <div class="weapon-name">${weapon.name}</div>
      <div class="weapon-type">${weapon.type}</div>
      <div class="weapon-description">${weapon.description}</div>
      <div class="weapon-stats">
        <div class="weapon-stat">
          <span>Daño:</span>
          <span class="weapon-stat-value">${weapon.damage}</span>
        </div>
        <div class="weapon-stat">
          <span>Efecto:</span>
          <span class="weapon-stat-value">${weapon.effect}</span>
        </div>
      </div>
    `;
    weaponsContainer.appendChild(weaponElement);
  });
}


















