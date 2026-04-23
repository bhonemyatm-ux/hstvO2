const slides = [
  {
    title: "ကျောင်းသားများ အတွက်",
    description: "သင်၏ ကျောင်းဘဝကို ပိုမိုလွယ်ကူ အောင်မြင်အောင် ကူညီပေးသော ကိရိယာများ",
  },
  {
    title: "စီမံချက် ရေးဆွဲပါ",
    description: "စာမေးပွဲများ၊ အိမ်စာများနှင့် ရည်မှန်းချက်များကို တစ်နေရာတည်းတွင် စီမံပါ",
  },
  {
    title: "အောင်မြင်မှုဆီသို့",
    description: "သင်ကြားမှု ပန်းတိုင်များ ချမှတ်ကာ တိုးတက်မှုကို နေ့တိုင်း ခြေရာခံပါ",
  }
];

let current = 0;
let animating = false;
const slideContainer = document.querySelector('.slide-container');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const dots = document.querySelectorAll('.dot');
const skipBtn = document.getElementById('skipBtn');
const actionBtn = document.getElementById('actionBtn');

function updateSlide() {
  const slide = slides[current];
  title.textContent = slide.title;
  description.textContent = slide.description;

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === current);
  });

  const isLast = current === slides.length - 1;
  skipBtn.style.visibility = isLast ? 'hidden' : 'visible';
  actionBtn.textContent = isLast ? 'START' : 'NEXT';
}

function goTo(index) {
  if (animating || index === current) return;
  animating = true;
  slideContainer.classList.add('hidden');

  requestAnimationFrame(() => {
    setTimeout(() => {
      current = index;
      updateSlide();
      slideContainer.classList.remove('hidden');
      animating = false;
    }, 320);
  });
}

function next() {
  if (current === slides.length - 1) {
    handleStart();
    return;
  }
  goTo(current + 1);
}

function skip() {
  goTo(slides.length - 1);
}

function handleStart() {
  alert('ကြိုဆိုပါသည် HST! (Connect your main app here)');
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => goTo(i));
});
skipBtn.addEventListener('click', skip);
actionBtn.addEventListener('click', next);

// Initialize
updateSlide();
