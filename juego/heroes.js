// Datos de héroes (descripciones únicas y stats)
const heroesData = {
  fia: {
    title: "Fia",
    level: "Nivel 78",
    class: "Cazadora Escarlata",
    description: "Fia es una cazadora legendaria que persigue bestias de la noche con precisión letal. Sus espadas gemelas cortan las sombras mientras su oído distingue latidos lejanos.",
    stats: { hp: 2800, attack: 3200, defense: 800, magic: 600, speed: 4000 },
    skills: [
      { name: "Golpe Fantasma", icon: "👻", description: "Ataque desde las sombras con alta probabilidad de crítico." },
      { name: "Veneno Letal", icon: "🧪", description: "Aplica venenos que desgastan y debilitan defensas." },
      { name: "Espejismo", icon: "🔄", description: "Crea clones que confunden a sus enemigos." },
      { name: "Asesinato Instantáneo", icon: "🗡️", description: "Ejecución relámpago sobre objetivos desprevenidos." }
    ],
    weapons: [
      { name: "Espadas Escarlatas del Alba", type: "Dagas Gemelas", description: "Acero forjado bajo la primera luz, veloz y letal.", damage: "+450 Ataque c/u", effect: "30% probabilidad de ataque doble" },
      { name: "Shuriken Venenoso", type: "Arma Arrojadiza", description: "Proyectiles impregnados con toxina paralizante.", damage: "+280 Ataque", effect: "Envenena por 15s" }
    ],
    modelUrl: "https://sketchfab.com/models/a580604eeebb459db2e0bdbb270e1249/embed"
  },

  ciri: {
    title: "Ciri",
    level: "Nivel 92",
    class: "Viajera Dimensional",
    description: "Dotada del poder del Tiempo y el Espacio, Ciri atraviesa realidades. Sus movimientos son imposibles de predecir y devastadores en combate.",
    stats: { hp: 3800, attack: 2500, defense: 1600, magic: 3400, speed: 3500 },
    skills: [
      { name: "Desgarro Dimensional", icon: "🌀", description: "Abre portales que desgarran a los enemigos cercanos." },
      { name: "Paradoja Temporal", icon: "⏳", description: "Ralentiza el paso del tiempo alrededor de sus oponentes." },
      { name: "Teletransporte", icon: "⚡", description: "Se desplaza instantáneamente a través del campo." },
      { name: "Colapso de Realidad", icon: "💥", description: "Implosión que inflige daño masivo." }
    ],
    weapons: [
      { name: "Espada de Zireael", type: "Espada Dimensional", description: "Hoja que corta el tejido entre mundos.", damage: "+680 Ataque", effect: "Ignora 50% de la defensa" },
      { name: "Amuleto del Vacío", type: "Artefacto", description: "Canaliza energía de otras realidades.", damage: "+550 Magia", effect: "Regenera maná" }
    ],
    modelUrl: "https://sketchfab.com/models/880857157db54a96a79c3327ebf8e7f1/embed"
  },

  geralt: {
    title: "Geralt de Rivia",
    level: "Nivel 95",
    class: "Brujo",
    description: "Brujo veterano; su mirada fría revela cicatrices de batallas con bestias y hombres. Equilibrio, alquimia y acero son sus herramientas.",
    stats: { hp: 4500, attack: 2900, defense: 2200, magic: 800, speed: 1800 },
    skills: [
      { name: "Furia del Lobo", icon: "🐺", description: "Entra en furia aumentada, golpea con más fuerza." },
      { name: "Sentidos Agudizados", icon: "👁️", description: "Detecta vulnerabilidades y reacciona veloz." },
      { name: "Corte Giratorio", icon: "⚔️", description: "Ataque en área para múltiples enemigos." },
      { name: "Instinto de Supervivencia", icon: "❤️", description: "Regenera salud en situaciones críticas." }
    ],
    weapons: [
      { name: "Espadas de Acero y Plata", type: "Espadas", description: "Acero para humanos, plata para monstruos.", damage: "+720 Ataque", effect: "Doble daño vs criaturas mágicas" },
      { name: "Ballesta Pesada", type: "Arma a Distancia", description: "Ballesta modificada para alto impacto.", damage: "+580 Ataque", effect: "Alta probabilidad de aturdir" }
    ],
    modelUrl: "https://sketchfab.com/models/83e7f955589b4aac89bb2d8b70e671dd/embed"
  },

  maria: {
    title: "Maria",
    level: "Nivel 81",
    class: "Hechicera Errante",
    description: "Hechicera que domina los elementos y alambre del destino; su fuego es tan bello como destructivo.",
    stats: { hp: 3200, attack: 2700, defense: 1400, magic: 1200, speed: 3200 },
    skills: [
      { name: "Sombras de la Noche", icon: "🌑", description: "Se funde con la penumbra y gana sigilo." },
      { name: "Garras Lunares", icon: "🌙", description: "Ataques cargados con energía lunar que atraviesan armaduras." },
      { name: "Llamado Nocturno", icon: "🐾", description: "Invoca criaturas que luchan a su lado." },
      { name: "Danza de la Muerte", icon: "💃", description: "Serie de golpes que aumentan su velocidad." }
    ],
    weapons: [
      { name: "Bastón de Fuego Ancestral", type: "Báculo", description: "Canaliza llamas antiguas con feroz precisión.", damage: "+620 Magia", effect: "Ignición continua" },
      { name: "Cuchillas del Anochecer", type: "Cuchillas", description: "Cuchillas rápidas y letales bajo la luna.", damage: "+480 Ataque c/u", effect: "Aumenta velocidad de ataque" }
    ],
    modelUrl: "https://sketchfab.com/models/3bcce544f16e4539ac9582e2d4eb9543/embed"
  },

  vesemir: {
    title: "Vesemir",
    level: "Nivel 80",
    class: "Mentor",
    description: "Sabio y curtido por años de enseñanza; sus golpes y palabras forjan nuevos brujos.",
    stats: { hp: 3600, attack: 2400, defense: 1800, magic: 1500, speed: 1600 },
    skills: [
      { name: "Táctica de Maestro", icon: "📜", description: "Mejora las capacidades del equipo y la defensa." },
      { name: "Golpe Experto", icon: "🛡️", description: "Ataque preciso con gran potencia." },
      { name: "Bendición del Mentor", icon: "✨", description: "Regenera salud a los aliados cercanos." },
      { name: "Cuchilla Precisa", icon: "⚔️", description: "Ataque que perfora defensas." }
    ],
    weapons: [
      { name: "Espada de Maestro", type: "Espada", description: "Hoja de veteranía y geometría perfecta.", damage: "+640 Ataque", effect: "Control en combate" },
      { name: "Antiguo Escudo", type: "Escudo", description: "Escudo con historia que absorbe golpes.", damage: "+0", effect: "Reduce daño recibido" }
    ],
    modelUrl: "https://sketchfab.com/models/8f62c76580144ed2a8c648dd5046d8d9/embed"
  }
};

// Variables globales
let currentHero = null;

// DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initializeLoader();
  initializeCards();
  initializeModal();
  initializeTabs();
});

// Loader (simula)
function initializeLoader(){
  const loader = document.getElementById('loader');
  const scene = document.querySelector('.heroes-scene');
  setTimeout(()=>{
    loader.style.display = 'none';
    scene.classList.remove('hidden');
    setTimeout(()=> scene.classList.add('show'), 80);
  }, 1000);
}

// Cards click
function initializeCards(){
  const cards = document.querySelectorAll('.hero-card');
  cards.forEach(card=>{
    card.addEventListener('click', ()=>{
      const id = card.getAttribute('data-hero');
      openModal(id);
    });
  });
}

// Modal basic controls
function initializeModal(){
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.close-btn');

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e)=>{
    if(e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && modal.classList.contains('show')) closeModal();
  });
}

// Tabs
function initializeTabs(){
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const tab = btn.getAttribute('data-tab');
      switchTab(tab);
    });
  });
}

function switchTab(tabId){
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  tabBtns.forEach(b=> b.classList.remove('active'));
  tabContents.forEach(c=> c.classList.remove('active'));
  document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
  document.getElementById(`tab-${tabId}`).classList.add('active');
}

// Open modal and populate data
function openModal(id){
  const modal = document.getElementById('modal');
  const hero = heroesData[id];
  if(!hero) return;
  currentHero = id;

  // Basic
  document.getElementById('modal-title').textContent = hero.title;
  document.getElementById('modal-level').textContent = hero.level;
  document.getElementById('modal-class').textContent = hero.class;
  document.getElementById('modal-description').textContent = hero.description;

  // Model
  document.getElementById('modal-iframe').src = hero.modelUrl;

  // Stats
  updateStats(hero.stats);

  // Skills & Weapons
  updateSkills(hero.skills);
  updateWeapons(hero.weapons);

  // Show modal
  modal.classList.remove('hidden');
  setTimeout(()=> modal.classList.add('show'), 10);
  switchTab('skills');
}

// Close modal
function closeModal(){
  const modal = document.getElementById('modal');
  modal.classList.remove('show');
  setTimeout(()=>{
    modal.classList.add('hidden');
    document.getElementById('modal-iframe').src = '';
  }, 300);
}

// Update bars
function updateStats(stats){
  const maxValues = { hp:5000, attack:4000, defense:2500, magic:4000, speed:4000 };
  Object.keys(stats).forEach(stat=>{
    const value = stats[stat];
    const max = maxValues[stat] || 4000;
    const pct = Math.min(100, (value / max) * 100);
    document.getElementById(`stat-${stat}`).textContent = value.toLocaleString();
    const fill = document.getElementById(`fill-${stat}`);
    fill.style.width = '0%';
    setTimeout(()=>{
      fill.style.transition = 'width 1.2s cubic-bezier(.2,.9,.3,1)';
      fill.style.width = `${pct}%`;
    }, 120);
  });
}

// Populate skills
function updateSkills(skills){
  const container = document.getElementById('modal-skills');
  container.innerHTML = '';
  skills.forEach(s=>{
    const div = document.createElement('div');
    div.className = 'skill-card';
    div.innerHTML = `
      <div class="skill-icon">${s.icon}</div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-description">${s.description}</div>
    `;
    container.appendChild(div);
  });
}

// Populate weapons
function updateWeapons(weapons){
  const container = document.getElementById('modal-weapons');
  container.innerHTML = '';
  weapons.forEach(w=>{
    const div = document.createElement('div');
    div.className = 'weapon-card';
    const emoji = w.type.toLowerCase().includes('espada') ? '⚔️' :
                  w.type.toLowerCase().includes('daga') ? '🗡️' :
                  w.type.toLowerCase().includes('arco') ? '🏹' :
                  w.type.toLowerCase().includes('báculo') || w.type.toLowerCase().includes('baston') ? '🔮' : '🛡️';
    div.innerHTML = `
      <div class="weapon-image">${emoji}</div>
      <div class="weapon-name">${w.name}</div>
      <div class="weapon-type">${w.type}</div>
      <div class="weapon-description">${w.description}</div>
      <div class="weapon-stats">
        <div class="weapon-stat"><span>Daño:</span><span>${w.damage}</span></div>
        <div class="weapon-stat"><span>Efecto:</span><span>${w.effect}</span></div>
      </div>
    `;
    container.appendChild(div);
  });
}
