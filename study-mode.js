// Study Mode JavaScript v3.0 — Apple-premium upgrade
// Focus overlay always works. Fullscreen/orientation lock are best-effort.

/* ==================== TIMER STATE ==================== */
let timerInterval = null;
let totalSeconds   = 25 * 60;
let currentSeconds = totalSeconds;
let isRunning      = false;
let currentMode    = "focus"; // focus | short | long

/* ==================== STATS ==================== */
let sessionsCompleted = parseInt(localStorage.getItem("sessionsCompleted"), 10) || 0;
let totalMinutes      = parseInt(localStorage.getItem("totalMinutes"),      10) || 0;
let currentStreak     = parseInt(localStorage.getItem("currentStreak"),     10) || 0;

/* ==================== TODOS ==================== */
let todos = JSON.parse(localStorage.getItem("todos") || "[]");

/* ==================== MUSIC ==================== */
let currentSound = null;

const soundLinks = {
  lofi:   "https://www.youtube.com/watch?v=jfKfPfyJRdk",
  rain:   "https://www.youtube.com/watch?v=mPZkdNFkNps",
  cafe:   "https://www.youtube.com/watch?v=gaGdKu_a-kY",
  nature: "https://www.youtube.com/watch?v=ln3wAdRAim4",
  ocean:  "https://www.youtube.com/watch?v=WHPEKLQID4U",
  fire:   "https://www.youtube.com/watch?v=L_LUpnjgPso"
};

const soundNames = {
  lofi:   "Lo-fi Beats",
  rain:   "Rain Sounds",
  cafe:   "Coffee Shop",
  nature: "Nature",
  ocean:  "Ocean Waves",
  fire:   "Fireplace"
};

/* ==================== BREAK ACTIVITIES ==================== */
const breakActivities = {
  short: [
    { icon: "💧", title: "Drink Water",      desc: "Stay hydrated! Drink a glass of water to refresh your mind and body." },
    { icon: "👁️", title: "20-20-20 Rule",   desc: "Look at something 20 feet away for 20 seconds to rest your eyes." },
    { icon: "🧘", title: "Quick Stretch",    desc: "Stand up and stretch your arms, neck, and back for 2 minutes." },
    { icon: "🚶", title: "Walk Around",      desc: "Take a short walk around your room or house to get blood flowing." },
    { icon: "🎵", title: "Listen to Music",  desc: "Play your favorite upbeat song to energize yourself!" },
    { icon: "🌬️", title: "Deep Breathing", desc: "Take 10 deep breaths: inhale for 4, hold for 4, exhale for 4." },
    { icon: "🪟", title: "Look Outside",     desc: "Gaze out the window at nature or the sky for a mental refresh." },
    { icon: "📱", title: "Quick Message",    desc: "Send a quick text to a friend or family member (set a timer!)" }
  ],
  long: [
    { icon: "🍎", title: "Healthy Snack",  desc: "Eat a nutritious snack: fruit, nuts, or yogurt to fuel your brain." },
    { icon: "🏃", title: "Quick Exercise", desc: "Do 5 minutes of jumping jacks, push-ups, or yoga stretches." },
    { icon: "📞", title: "Call Someone",   desc: "Have a short chat with a friend or family member to recharge." },
    { icon: "🌿", title: "Go Outside",     desc: "Step outside for fresh air and sunlight. Walk around your yard." },
    { icon: "🧊", title: "Wash Your Face", desc: "Splash cold water on your face to wake up and feel refreshed." },
    { icon: "🎮", title: "Quick Game",     desc: "Play a 5-minute mobile game or puzzle (set a timer!)" },
    { icon: "📖", title: "Read for Fun",   desc: "Read a chapter of a novel or interesting article (not study material!)" },
    { icon: "🧹", title: "Tidy Up",        desc: "Organize your desk or room for 10 minutes. A clean space = clear mind!" }
  ]
};

/* ==================== QUOTES ==================== */
const quotes = [
  { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
  { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { text: "Your education is a dress rehearsal for a life that is yours to lead.", author: "Nora Ephron" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "အိပ်တော့မှာလား သူများတွေကတော့စာကြည့်နေအုံးမှာပဲ။", author: "HST Team" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
  { text: "Education is not preparation for life; education is life itself.", author: "John Dewey" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Don't let what you cannot do interfere with what you can do.", author: "John Wooden" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" }
];

/* ==================== INIT ==================== */
document.addEventListener("DOMContentLoaded", () => {
  loadThemePreference();
  loadMusicPreference();
  updateStatsDisplay();
  renderTodos();
  setupEventListeners();
  updateTimerDisplay();
  updateRingProgress();

  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission();
  }
});

/* ==================== TIMER ==================== */
function setTimer(minutes) {
  totalSeconds   = minutes * 60;
  currentSeconds = totalSeconds;
  updateTimerDisplay();
  updateRingProgress();
  updateModeLabel();
}

function updateTimerDisplay() {
  const m = Math.floor(currentSeconds / 60);
  const s = currentSeconds % 60;
  const str = `${pad(m)}:${pad(s)}`;

  const el = document.getElementById("timerDisplay");
  if (el) el.textContent = str;

  document.title = isRunning ? `${str} — HST Study Mode` : "Study Mode — HST";
}

function pad(n) { return String(n).padStart(2, "0"); }

function updateModeLabel() {
  const labels = { focus: "Focus Session", short: "Short Break", long: "Long Break" };
  const el = document.querySelector(".ring-label");
  if (el) el.textContent = labels[currentMode] || "Focus Session";
}

function updateRingProgress() {
  const bar = document.getElementById("progressBar");
  if (!bar) return;
  const circ     = 2 * Math.PI * 126;
  const progress = totalSeconds > 0 ? currentSeconds / totalSeconds : 0;
  bar.style.strokeDasharray  = String(circ);
  bar.style.strokeDashoffset = String(circ * (1 - progress));
}

function clearTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;

  const btn = document.getElementById("startBtn");
  if (btn) btn.textContent = "⏸ Pause";

  document.getElementById("timerCircle")?.classList.add("active");
  document.getElementById("ringGlow")?.style.setProperty("opacity", "1");

  clearTimer();
  timerInterval = setInterval(() => {
    currentSeconds = Math.max(0, currentSeconds - 1);
    updateTimerDisplay();
    updateRingProgress();
    if (currentSeconds <= 0) onTimerComplete();
  }, 1000);
}

function pauseTimer() {
  if (!isRunning) return;
  isRunning = false;

  const btn = document.getElementById("startBtn");
  if (btn) btn.textContent = "▶ Resume";

  document.getElementById("timerCircle")?.classList.remove("active");
  document.getElementById("ringGlow")?.style.removeProperty("opacity");
  clearTimer();
}

function resetTimer() {
  clearTimer();
  isRunning = false;

  const btn = document.getElementById("startBtn");
  if (btn) btn.textContent = "▶ Start";

  document.getElementById("timerCircle")?.classList.remove("active");
  document.getElementById("ringGlow")?.style.removeProperty("opacity");

  const activeBtn = document.querySelector(".mode-pill.active");
  const mins = activeBtn ? parseInt(activeBtn.dataset.time, 10) : 25;
  setTimer(mins);

  document.title = "Study Mode — HST";
}

function onTimerComplete() {
  clearTimer();
  isRunning = false;

  const btn = document.getElementById("startBtn");
  if (btn) btn.textContent = "▶ Start";

  document.getElementById("timerCircle")?.classList.remove("active");
  document.getElementById("ringGlow")?.style.removeProperty("opacity");

  playBeep();
  sendNotification();

  if (currentMode === "focus") {
    sessionsCompleted++;
    totalMinutes += 25;
    saveStats();
    showToast("🎉 Great work! Session complete — time for a break.");
    switchMode("short");
    setTimeout(() => showBreakBanner(), 400);
  } else {
    showToast("✨ Break over! Ready to focus again?");
    switchMode("focus");
    hideBreakBanner();
  }
}

function switchMode(mode) {
  const btn = document.querySelector(`[data-mode="${mode}"]`);
  if (btn) btn.click();
}

/* ==================== NOTIFICATION & SOUND ==================== */
function sendNotification() {
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  new Notification("Timer Complete! 🎉", {
    body: currentMode === "focus" ? "Great work! Time for a break." : "Break over! Ready to focus?",
    icon: "hstlogo.png"
  });
}

function playBeep() {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;

  const ctx  = new Ctx();
  const osc  = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = "sine";
  osc.frequency.value = 880;

  gain.gain.setValueAtTime(0.28, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.6);
}

/* ==================== TOAST ==================== */
function showToast(msg) {
  const existing = document.getElementById("studyToast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "studyToast";
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: #0d1117;
    color: #fff;
    padding: .85rem 1.75rem;
    border-radius: 999px;
    font-size: .9rem;
    font-weight: 600;
    font-family: inherit;
    box-shadow: 0 8px 32px rgba(0,0,0,.35);
    z-index: 5000;
    opacity: 0;
    transition: opacity .28s ease, transform .28s ease;
    max-width: 90vw;
    text-align: center;
    white-space: nowrap;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateX(-50%) translateY(0)";
  });

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50%) translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* ==================== STATS ==================== */
function saveStats() {
  localStorage.setItem("sessionsCompleted", sessionsCompleted);
  localStorage.setItem("totalMinutes",      totalMinutes);

  const today     = new Date().toDateString();
  const lastDate  = localStorage.getItem("lastStudyDate");
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (lastDate !== today) {
    currentStreak = lastDate === yesterday.toDateString() ? currentStreak + 1 : 1;
    localStorage.setItem("currentStreak",  currentStreak);
    localStorage.setItem("lastStudyDate",  today);
  }

  updateStatsDisplay();
}

function updateStatsDisplay() {
  const s = document.getElementById("sessionsCompleted");
  const m = document.getElementById("totalMinutes");
  const k = document.getElementById("currentStreak");
  if (s) s.textContent = sessionsCompleted;
  if (m) m.textContent = totalMinutes;
  if (k) k.textContent = currentStreak;
}

/* ==================== TODOS ==================== */
function addTodo() {
  const input = document.getElementById("todoInput");
  const text  = input.value.trim();
  if (!text) return;

  todos.push({ id: Date.now(), text, completed: false, pomodoros: 0 });
  saveTodos();
  renderTodos();
  input.value = "";
  input.focus();
}

function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (!todo) return;
  todo.completed = !todo.completed;
  if (todo.completed) todo.pomodoros++;
  saveTodos();
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  saveTodos();
  renderTodos();
}

function renderTodos() {
  const list    = document.getElementById("todoList");
  const counter = document.getElementById("taskCounter");
  if (!list || !counter) return;

  const pending = todos.filter(t => !t.completed).length;
  counter.textContent = pending;

  if (todos.length === 0) {
    list.innerHTML = '<div class="todo-empty">No tasks yet. Add one to get started!</div>';
    return;
  }

  list.innerHTML = todos.map(t => `
    <div class="todo-item${t.completed ? " completed" : ""}">
      <input type="checkbox" class="todo-checkbox"
        ${t.completed ? "checked" : ""} onchange="toggleTodo(${t.id})">
      <span class="todo-text">${escHtml(t.text)}</span>
      ${t.pomodoros > 0 ? `<span class="todo-pomodoro">🍅 ${t.pomodoros}</span>` : ""}
      <button class="todo-delete" onclick="deleteTodo(${t.id})" aria-label="Delete task">🗑</button>
    </div>
  `).join("");
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function escHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ==================== MUSIC ==================== */
function playSound(type) {
  if (currentSound === type) { stopMusic(); return; }

  document.querySelectorAll(".music-tile").forEach(b => b.classList.remove("active"));
  document.querySelector(`[data-sound="${type}"]`)?.classList.add("active");

  currentSound = type;
  setMusicStatus(`Playing — ${soundNames[type] || type}`, true);

  const url = soundLinks[type];
  showToast(`🎵 Opening ${soundNames[type] || type} in a new window. Keep it minimized while you study!`);
  window.open(url, "hstMusicPlayer", "width=420,height=300,noopener");

  localStorage.setItem("currentSound", type);
}

function stopMusic() {
  document.querySelectorAll(".music-tile").forEach(b => b.classList.remove("active"));
  currentSound = null;
  setMusicStatus("Stopped", false);
  localStorage.removeItem("currentSound");
}

function setMusicStatus(text, active) {
  const el  = document.getElementById("musicStatus");
  if (!el) return;
  const dot = active
    ? `<span class="status-dot" style="background:#10b981;box-shadow:0 0 6px #10b981"></span>`
    : `<span class="status-dot"></span>`;
  el.innerHTML = dot + text;
}

function loadMusicPreference() {
  const saved = localStorage.getItem("currentSound");
  if (!saved) return;
  document.querySelector(`[data-sound="${saved}"]`)?.classList.add("active");
  currentSound = saved;
  setMusicStatus(`Last: ${soundNames[saved] || saved}`, false);
}

/* ==================== THEME ==================== */
function applyTheme(name) {
  const body = document.body;
  body.classList.forEach(c => { if (c.startsWith("theme-")) body.classList.remove(c); });
  if (name !== "default") body.classList.add(`theme-${name}`);

  document.querySelectorAll(".theme-swatch").forEach(sw => sw.classList.remove("active"));
  document.querySelector(`[data-theme="${name}"]`)?.classList.add("active");

  localStorage.setItem("selectedTheme", name);
}

function loadThemePreference() {
  applyTheme(localStorage.getItem("selectedTheme") || "default");

  if (localStorage.getItem("studyTheme") === "dark") {
    document.body.classList.add("dark-mode");
    const t = document.getElementById("themeToggle");
    if (t) t.querySelector(".tool-btn-icon").textContent = "☀️";
  }
}

/* ==================== BREAK BANNER ==================== */
function showBreakBanner() {
  const banner = document.getElementById("breakSuggestions");
  if (!banner) return;
  setBreakActivity();
  banner.hidden = false;
}

function hideBreakBanner() {
  const banner = document.getElementById("breakSuggestions");
  if (banner) banner.hidden = true;
}

function setBreakActivity() {
  const pool = currentMode === "long" ? breakActivities.long : breakActivities.short;
  const act  = pool[Math.floor(Math.random() * pool.length)];

  const iconEl = document.querySelector(".break-activity-icon");
  const titleEl = document.querySelector(".break-activity-body strong");
  const descEl  = document.querySelector(".break-activity-body p");

  if (iconEl)  iconEl.textContent  = act.icon;
  if (titleEl) titleEl.textContent = act.title;
  if (descEl)  descEl.textContent  = act.desc;
}

function getNewActivity() {
  setBreakActivity();
}

/* ==================== QUOTES ==================== */
function getNewQuote() {
  const q  = quotes[Math.floor(Math.random() * quotes.length)];
  const qt = document.getElementById("quoteText");
  const qa = document.getElementById("quoteAuthor");
  if (qt) qt.textContent = `"${q.text}"`;
  if (qa) qa.textContent = `— ${q.author}`;
}

/* ==================== FOCUS DISPLAY (flip clock) ==================== */
function setupFocusDisplay() {
  const openBtn  = document.getElementById("focusDisplayBtn");
  const overlay  = document.getElementById("focusDisplay");
  const exitBtn  = document.getElementById("focusExitBtn");
  const mainTime = document.getElementById("timerDisplay");
  const subLabel = document.getElementById("focusSub");
  const hint     = document.getElementById("rotateHint");

  if (!openBtn || !overlay || !exitBtn || !mainTime) return;

  let syncId = null;
  const mq   = window.matchMedia?.("(orientation: landscape)") ?? null;

  const modeText = () => {
    const active = document.querySelector(".mode-pill.active");
    return active ? active.textContent.replace(/\d+\s*min/i, "").trim() : "Focus";
  };

  const syncHint = () => {
    if (hint && mq) hint.style.display = mq.matches ? "none" : "";
  };

  const sync = () => {
    const t = (mainTime.textContent || "").trim() || "00:00";
    const digits = t.replace(":", "").split("");
    overlay.querySelectorAll("[data-digit]").forEach((el, i) => {
      el.textContent = digits[i] ?? "0";
    });
    if (subLabel) subLabel.textContent = modeText();
    syncHint();
  };

  const open = () => {
    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    sync();
    syncId = setInterval(sync, 200);
    mq?.addEventListener?.("change", syncHint);

    (async () => {
      try {
        if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
      } catch {}
      try {
        if (screen.orientation?.lock) await screen.orientation.lock("landscape");
      } catch {}
    })();
  };

  const close = () => {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    clearInterval(syncId);
    syncId = null;
    mq?.removeEventListener?.("change", syncHint);
    try { document.fullscreenElement && document.exitFullscreen(); } catch {}
    try { screen.orientation?.unlock?.(); } catch {}
  };

  openBtn.addEventListener("click", open);
  exitBtn.addEventListener("click", close);
  overlay.addEventListener("click", e => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", e => {
    if (overlay.classList.contains("active") && e.key === "Escape") close();
  });
}

/* ==================== MODAL HELPERS ==================== */
function openModal(id)  { document.getElementById(id)?.classList.add("active"); document.getElementById(id)?.setAttribute("aria-hidden","false"); }
function closeModal(id) { document.getElementById(id)?.classList.remove("active"); document.getElementById(id)?.setAttribute("aria-hidden","true"); }

/* ==================== EVENT LISTENERS ==================== */
function setupEventListeners() {

  /* Mode pills */
  document.querySelectorAll(".mode-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      if (isRunning) return;
      document.querySelectorAll(".mode-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentMode = btn.dataset.mode;
      setTimer(parseInt(btn.dataset.time, 10));
      if (currentMode === "focus") hideBreakBanner();
    });
  });

  /* Start / pause */
  document.getElementById("startBtn")?.addEventListener("click", () => {
    isRunning ? pauseTimer() : startTimer();
  });

  /* Reset */
  document.getElementById("resetBtn")?.addEventListener("click", resetTimer);

  /* Todo */
  document.getElementById("todoAddBtn")?.addEventListener("click", addTodo);
  document.getElementById("todoInput")?.addEventListener("keydown", e => {
    if (e.key === "Enter") addTodo();
  });

  /* Music tiles */
  document.querySelectorAll(".music-tile").forEach(btn => {
    btn.addEventListener("click", () => playSound(btn.dataset.sound));
  });

  /* Music nav toggle */
  document.getElementById("musicToggleNav")?.addEventListener("click", () => {
    if (currentSound) stopMusic();
    else showToast("🎵 Select a sound from the Focus Music section below!");
  });

  /* Volume slider */
  const slider = document.getElementById("volumeSlider");
  if (slider) {
    const savedVol = localStorage.getItem("musicVolume") || "50";
    slider.value = savedVol;
    const volLabel = document.getElementById("volumeValue");
    if (volLabel) volLabel.textContent = savedVol + "%";

    slider.addEventListener("input", () => {
      const v = slider.value;
      if (volLabel) volLabel.textContent = v + "%";
      localStorage.setItem("musicVolume", v);
    });
  }

  /* Dark mode toggle */
  document.getElementById("themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    const iconEl = document.querySelector("#themeToggle .tool-btn-icon");
    if (iconEl) iconEl.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("studyTheme", isDark ? "dark" : "light");
  });

  /* Theme picker open */
  document.getElementById("themePickerBtn")?.addEventListener("click", () => openModal("themePickerModal"));

  /* Theme swatches */
  document.querySelectorAll(".theme-swatch").forEach(sw => {
    sw.addEventListener("click", () => applyTheme(sw.dataset.theme));
    sw.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") applyTheme(sw.dataset.theme); });
  });

  /* FABs */
  document.getElementById("methodsBtn")?.addEventListener("click",    () => openModal("methodsModal"));
  document.getElementById("motivationBtn")?.addEventListener("click", () => openModal("motivationModal"));

  /* Quote refresh */
  document.getElementById("newQuoteBtn")?.addEventListener("click", getNewQuote);

  /* Break new activity */
  document.getElementById("newActivityBtn")?.addEventListener("click", getNewActivity);

  /* Modal backdrop close */
  document.querySelectorAll(".modal").forEach(m => {
    m.addEventListener("click", e => { if (e.target === m) m.classList.remove("active"); });
  });

  /* Keyboard shortcuts */
  document.addEventListener("keydown", e => {
    if (e.code === "Space" && !e.target.matches("input, textarea, select")) {
      e.preventDefault();
      document.getElementById("startBtn")?.click();
    }
    if (e.code === "KeyR" && e.ctrlKey && !e.target.matches("input, textarea, select")) {
      e.preventDefault();
      resetTimer();
    }
  });

  /* Focus display */
  setupFocusDisplay();
}

/* ==================== GLOBAL HOOKS for inline HTML handlers ==================== */
window.toggleTodo     = toggleTodo;
window.deleteTodo     = deleteTodo;
window.getNewActivity = getNewActivity;
window.getNewQuote    = getNewQuote;
window.closeModal     = closeModal;
