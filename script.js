/* ===== DATA ===== */
const timelineData = [
  { date:"September 08,2021", title:"Universe made us met", note:"You just greeted me a HAPPY BIRTHDAY and just like that, I knew it's you.", right:false },
  { date:"April 11, 2022", title:"Our First Meet Up", note:"It seems like yesterday, sweetie. Unang ice cream together, unang tawanan na magkasama. Glad I met you, my bff.", right:true },
  { date:"May 10, 2022", title:"First Bestfriend Date?", note:"I was nervous. You were perfect. Hindi ako makapaniwala na inaya mo ako sa SM HAHAHHAAHAHA, todo outfit ka, ako nakapang bahay lang.", right:false },
  { date:"May 12, 2022", title:"Home Hangout", note:"This was your first time coming to my house, sweetie. We played guitar all day, I taught you how to play a guitar and you taught me how to love you.  You were strumming so well, but my eyes were locked up on your face.", right:true },
  { date:"October 2, 2022", title:"Cine", note:"Hindi tayo nakapag celebrate ng first friendsary natin kaya I just offered you to come and watch cine with me HAAHAHAH hindi ka pa nanonood OP niyan pero you watched with me. Very lucky to have you.", right:false },
  { date:"December 10, 2022", title:"Happy birthday!", note:"I gave you a very simple present, a music box with music that tells how much I adore you.", right:true },
  { date:"April 21, 2023", title:"Overnight?", note:"Can't believe you slept in my house, mag bff lang tayo ah? HAHAHAHAHAHAHH", right:false },
  { date:"October 20, 2024", title:"Met Again.", note:"halos isang taon hindi nagkita, glad we found each other back again, I love you.", right:true },
  { date:"November 23, 2024", title:"Courting.", note:"Tinanggal ko lahat ng katorpehan ko para maligawan na kita, hehe kiniss moko after kita ligawan panalo agad. I love you more than anything in this world.", right:false },
  { date:"November 30, 2024", title:"A Yes.", note:"1 week lang na ligawan and I already got your YES, I can't believe it until today that we are already in a relationship, after long years I'm glad we end up together.", right:true }
];

const lettersData = [
  {
    label:"My love",
    unlock:false,
    to:"My sweetie,",
    body:"I just want to love you forever. It always fascinates me that my love for you is that I just always know it, like I will sleep tonight and I know that when I wake up, I still love you that my heart always belongs to you.",
    sign:"— Kayi"
  },
  {
    label:"For When You're Sad",
    unlock:false,
    to:"Dearest,",
    body:"I know some days feel too heavy. I know sometimes the world doesn't feel kind enough for someone as good as you.\n\nOn those days, remember: I am always, always in your corner. No matter what. Your sadness is safe with me. Kayi will always love and support you.",
    sign:"— Kayi"
  },
  {
    label:"My First Poem",
    unlock:false,
    to:"Adoring you,",
    body:"Just like the moon, you have caught my attention, a flawless woman that shines alone. \n\nMy eyes look through you much more than what others does, and a word that can illustrate my adoration for you is nowhere to be found in this reality. \n\nFinally the dawn will come, the sun will rise, to express the beauty of the sunset.",
    sign:"— Kayi"
  },
  {
    label:"Just Because",
    unlock:false,
    to:"darling,",
    body:"I love you. I appreciate you in everything, you are the sweetest person in the whole universe. \n\nThat's the whole letter. You are my everything.",
    sign:"— Kayi"
  },
  {
    label:"For a Hard Day",
    unlock:false,
    to:"My strong darling,",
    body:"You are the most strongest person I know, sweetie. Always ka nag iisip ng good side sa lahat ng nangyayaring bad situations. I am always proud of you and will forever be grateful for your existense.",
    sign:"— Kayi"
  },
  {
    label:"For Our Anniversary",
    unlock:true,
    lockLabel:"Unlock on our anniversary",
    to:"To my person,",
    body:"Another year. Another orbit around the sun together. Every day I choose you — not out of habit, but because choosing you is the easiest and best decision I ever make.\n\nHere's to all the years left.",
    sign:"— Yours, completely"
  }
];

const galleryData = [
  { src: "img/IMG_20220411_155137.jpg", caption: "First picture, where everything started" },
  { src: "img/1780060168040.jpeg",    caption: "Samgyup ang mag bff" },
  { src: "img/IMG_20241020_204102.jpg", caption: "Walking home after ligawan" },
  { src: "img/IMG_20251210_005119.jpg",   caption: "Celebrating your birthday together" },
  { src: "img/IMG_20260529_200505.jpg",     caption: "Best kiss" },
  { src: "img/IMG_20241230_215536_912.jpg",  caption: "A day to remember, first monthsary" },
  { src: "img/1780059877443.jpeg",      caption: "Valentine's dayyyy" },
  { src: "img/IMG_20251013_205354_466.jpg",     caption: "Random gala sa manila" },
  { src: "img/IMG_20250202_170029.jpg",      caption: "Flowers" },
  { src: "img/1780059472548.jpeg",     caption: "Attended a wedding" },
  { src: "img/1780059255118.png",   caption: "Kayi's birthday" },
  { src: "img/IMG_20251130_224821_107.jpg",  caption: "1st Anniversaryyyyy, I love you!" },
  { src: "img/IMG_20251230_225542_519.jpg",      caption: "Random pic ang cute lang ng asawa ko" },
  { src: "img/1780060679211.jpg",      caption: "New year together" },
  { src: "img/IMG_20260331_210212_535.jpg",      caption: "Valentine's ulittt" },
  { src: "img/1780061015217.jpg",      caption: "Photobooth" },
  { src: "img/1780060618492.jpg",      caption: "Gym date yarn" },
];

const allReasons = [
  "Magandaaaa",
  "May patience ikaw sakin",
  "Your voice",
  "Ikaw ang bff ko",
  "You always check on me",
  "You make my day better",
  "Super bangoooo",
  "Random kakulitan mo sakin",
  "Opinyon mo bebi kahit mali ka",
  "Tight hugsss",
  "Your laugh",
  "Mga letters na ginawa mo sakin",
  "Pang aasar mo",
  "Kakulitan kagigil",
  "The way you see the best in me",
  "How you made even the worst day better",
  "Your voice when you're excited",
  "The small moments you think don't matter, they all matter",
  "How safe I feel beside you po",
  "Your eyes",
  "The way you look at the moon",
  "Your honesty, even when it's hard",
  "How you've grown, and how you've helped me grow",
  "You make ordinary days extraordinary",
  "I love who I am when I'm with you",
  "I just love you even with no reasons at all"
];

const easterEggs = {
  "strawberry": { title:"I love you", body:"You will always be my favorite, more than strawberries." },
  "always forever": { title:"Always", body:"Let's dance na ulit with our song po, I love our small dances na ginagawa na walang iba nakakaalam" },
  "first date": { title:"The Night That Changed Everything", body:"You looked beautiful. I was nervous. You made it so easy to be myself. I already knew that night that I was in trouble — the best kind of trouble." },
  "i love you": { title:"I love you too", body:"Maraming salamat sa I love you mo bebi, mahal na mahal kita HAHAAHAHHA" },
  "11-30-24": { title:"Best day", body:"Thank you for letting me become part of your life, sweetie. I love you so muchhh!" },
  "eating in one plate": { title:"Super comfy", body:"Sobrang sarap kumain bebi kasama ka" },
  "first guy best friend": { title:"Bff", body:"I got you always, forever and ever." },
  "my other half": { title:"bestest one", body:"Hanggat nandyan ang bespren ko na yan, kumpleto ako." },
  "flowers": { title:"Daisy", body:"Your beauty is reflected by your own favorite flower, darling." },
  "home": { title:"You Are My Home ", body:"Ikaw ang forever tahanan ko, namnam ko." },
  "first cine": { title:"One of the best", body:"Talagang sama ka sakin bebi kahit saan e no HAHAHAHAHAHAH" },
  "first cine": { title:"Food", body:"favorite food mo to bebi I love you" },
  "ice cream": { title:"Comfort", body:"if stress ikaw, eat lang ng ice cream or magsabi sakin para bibilhan kita" },
  "moon": { title:"Luna", body:"I learn to love moon na rin because of you po." },
};

const jarMemories = [
  { text:"That night we stayed up talking about everything and nothing. So peaceful and super thankful sa lahat ng pinagsamahan natin.", tag:"Late Night" },
  { text:"We dance everytime ALWAYS FOREVER plays. Small thing. Huge thing.", tag:"Little Moments" },
  { text:"First time makapunta sa intramuros with you tapos biglaan pa HAHAHAHAHAH", tag:"Travel yarn" },
  { text:"You cooked for me always. I didn't even ask. Thank you, sweetie. Appreciate you po so much.", tag:"You Fed Me" },
  { text:"First sleep together. yakapin ka whole night ay super sarap", tag:"Quiet night" },
  { text:"Kasal na tayo, dalawa lang tayo nakakaalam HAHAHAHAHAH", tag:"Married" },
  { text:"Watching you sleep peacefully. You looked so safe. Hindi ko na inaalis braso ko hanggang umaga.", tag:"Sleeping beauty ang darling" },
  { text:"You always remembered my favorite strawberry.", tag:"Strawberry" },
  { text:"That fight where we both apologized at the same time and then laughed. I love how we do that.", tag:"We Always Come Back" },
  { text:"You are talking to me always when I'm asleep. I heard all the I love yous you've said.", tag:"Thankful sobra" },
  { text:"That hug after a terrible day. I held on longer. I knew you needed it, sweetie.", tag:"I Know You" },
];

/* ===== RENDER TIMELINE ===== */
const timelineEl = document.getElementById('timelineItems');
timelineData.forEach((item, i) => {
  const d = document.createElement('div');
  d.className = `timeline-item ${item.right ? 'right' : ''}`;
  d.innerHTML = `
    <div class="timeline-dot"></div>
    <div class="timeline-card">
      <span class="timeline-date">${item.date}</span>
      <h3>${item.title}</h3>
      <p>${item.note}</p>
    </div>`;
  timelineEl.appendChild(d);
});

/* ===== INTERSECTION OBSERVER FOR TIMELINE ===== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));

/* ===== RENDER LETTERS ===== */
const lettersGrid = document.getElementById('lettersGrid');
lettersData.forEach((letter, i) => {
  const div = document.createElement('div');
  div.className = `envelope${letter.unlock ? ' locked' : ''}`;
  div.innerHTML = `
    <div class="envelope-inner">
      <div class="envelope-front">
        <div class="envelope-flap"></div>
        ${letter.unlock ? `<span class="env-lock-badge">${letter.lockLabel}</span>` : ''}
        <div class="envelope-lines"><span></span><span></span><span></span></div>
        <span class="env-label">${letter.label}</span>
        <div class="env-seal">💌</div>
      </div>
      <div class="envelope-back">
       
        <p class="letter-to">${letter.to}</p>
        <p class="letter-body">${letter.body.replace(/\n/g,'<br>')}</p>
        <p class="letter-sign">${letter.sign}</p>
      </div>
    </div>`;
  if (!letter.unlock) {
    div.addEventListener('click', () => {
      div.classList.toggle('opened');
      if (div.classList.contains('opened')) spawnConfetti(5);
    });
  }
  lettersGrid.appendChild(div);
});

function closeEnvelope(btn) {
  btn.closest('.envelope').classList.remove('opened');
}

/* ===== RENDER GALLERY ===== */
const filmstrip = document.getElementById('filmstrip');
galleryData.forEach(photo => {
  const p = document.createElement('div');
  p.className = 'polaroid';
  p.innerHTML = `
    <div class="polaroid-img">
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
    </div>
    <p class="polaroid-caption">${photo.caption}</p>`;
  filmstrip.appendChild(p);
});

/* ===== RENDER REASONS ===== */
const reasonsWall = document.getElementById('reasonsWall');
let shownReasons = 0;
const BATCH = 12;

function renderReasons(count) {
  const end = Math.min(shownReasons + count, allReasons.length);
  for (let i = shownReasons; i < end; i++) {
    const note = document.createElement('div');
    note.className = 'reason-note';
    note.innerHTML = `
      <span class="reason-num">#${String(i+1).padStart(2,'0')}</span>
      <p class="reason-text">${allReasons[i]}</p>
      <span class="reason-heart">♥</span>`;
    reasonsWall.appendChild(note);
    setTimeout(() => note.classList.add('visible'), (i - shownReasons) * 60);
  }
  shownReasons = end;
  if (shownReasons >= allReasons.length) {
    document.getElementById('loadMoreBtn').style.display = 'none';
  }
}

renderReasons(BATCH);
document.getElementById('loadMoreBtn').addEventListener('click', () => renderReasons(BATCH));

/* ===== EASTER EGGS ===== */
function checkEgg() {
  const val = document.getElementById('eggInput').value.trim().toLowerCase();
  const reveal = document.getElementById('eggReveal');
  const err = document.getElementById('eggError');
  reveal.classList.remove('show');
  err.classList.remove('show');
  const egg = easterEggs[val];
  if (egg) {
    document.getElementById('eggRevealTitle').textContent = egg.title;
    document.getElementById('eggRevealBody').textContent = egg.body;
    reveal.classList.add('show');
    spawnConfetti(20);
  } else {
    void err.offsetWidth;
    err.classList.add('show');
  }
}

document.getElementById('eggInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') checkEgg();
});


let jarUsed = [];
let jarCount = 0;

function shakeJar() {
  const jar = document.getElementById('jarSvg');
  jar.classList.remove('jar-shake');
  void jar.offsetWidth;
  jar.classList.add('jar-shake');
  jar.addEventListener('animationend', () => jar.classList.remove('jar-shake'), { once: true });
  setTimeout(showMemory, 350);
}

function showMemory() {
  if (jarUsed.length >= jarMemories.length) jarUsed = [];
  const remaining = jarMemories.filter((_, i) => !jarUsed.includes(i));
  const pick = remaining[Math.floor(Math.random() * remaining.length)];
  const idx = jarMemories.indexOf(pick);
  jarUsed.push(idx);
  jarCount++;
  const card = document.getElementById('jarCard');
  card.classList.remove('show');
  void card.offsetWidth;
  document.getElementById('jarEmoji').textContent = pick.emoji;
  document.getElementById('jarText').textContent = pick.text;
  document.getElementById('jarTag').textContent = pick.tag;
  card.classList.add('show');
}

/* ===== FLOATING HEARTS ===== */
const hc = document.getElementById('floatingHearts');
['🤎','💛','🤍','✨','💫'].forEach((h, i) => {
  for (let j = 0; j < 3; j++) {
    const el = document.createElement('div');
    el.className = 'fheart';
    el.textContent = h;
    el.style.left = (Math.random() * 100) + '%';
    el.style.animationDuration = (8 + Math.random() * 12) + 's';
    el.style.animationDelay = (Math.random() * 15) + 's';
    el.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
    hc.appendChild(el);
  }
});

/* ===== CONFETTI ===== */
function spawnConfetti(count) {
  const colors = ['#c68642','#8b4513','#d4a574','#fdf6ec','#c9a84c','#e8c4a0'];
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.className = 'confetti-piece';
      c.style.left = (Math.random() * 100) + 'vw';
      c.style.top = '-20px';
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.transform = `rotate(${Math.random()*360}deg)`;
      c.style.animationDuration = (1.5 + Math.random() * 2) + 's';
      c.style.width = c.style.height = (6 + Math.random() * 8) + 'px';
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 4000);
    }, i * 60);
  }
}

/* ===== NAV HAMBURGER ===== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
}));

/* ===== SCROLL ANIMATION FOR REASONS ===== */
const reasonObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

new MutationObserver(() => {
  document.querySelectorAll('.reason-note:not(.visible)').forEach(el => reasonObserver.observe(el));
}).observe(reasonsWall, { childList: true });
