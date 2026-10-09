const greetings=[{"name": "Mira", "message": "İyi ki doğdun, İsmail."}, {"name": "Zehra", "message": "İso olmasa 239 gemisi yürümez\nİyiki iso 👑"}, {"name": "Kral", "message": "Krallığımızın eli ayağı iso iyiki doğdun iyiki varsın ❤️"}, {"name": "Engin", "message": "İsmail baba nice senelere vurdurmaya umarım yeni yaşında son verirsin"}, {"name": "Yusuf", "message": "İYİ Kİ DOĞDUN İSMAİL BABA"}, {"name": "Hakan", "message": "İso adamdır gerisi yalan 👑"}, {"name": "Lider", "message": "Canım kardeşim İsmail, doğum günün kutlu olsun. Allah sana sağlıklı, huzurlu, bereketli ve hayırlı uzun ömürler nasip etsin. Yeni yaşında gönlünden geçen tüm güzel şeyler gerçek olsun inşallah. Rabbim yüzünden gülümsemeyi hiç eksik etmesin. İyi ki varsın kardeşim, nice güzel yaşlara."}, {"name": "Joory", "message": "iyiki  doğdun dede kardaş ,nice yıllar🥳🥳"}];
const letter=document.getElementById('mira-letter');
function openGreeting(index){const greeting=greetings[index];const letterGif=letter.querySelector("img.animated");const letterGifName=greetingGifs[index%greetingGifs.length];letterGif.dataset.gif=letterGifName+".gif";letterGif.dataset.still=letterGifName+".png";letterGif.src=letterGifName+(animationsPaused?".png":".gif");document.getElementById('letter-title').textContent=greeting.name?greeting.name+" · Mesaj":'Mesaj yakında';document.getElementById('letter-text').textContent=greeting.message||'Bu karta henüz bir mesaj eklenmedi.';document.getElementById('letter-sign').textContent=greeting.name||'';document.getElementById('letter-bottom').hidden=!greeting.message;letter.showModal();}
const greetingGifs=["mira-penguin", "jonah", "birthday-laugh", "bean", "joey", "michael", "leo", "napoleon", "oprah"];
const grid=document.getElementById('card-grid');greetings.forEach((greeting,index)=>{const card=document.createElement('article');card.className='greeting-card'+(greeting.message?'':' pending');const top=document.createElement('div');top.className='card-top';const name=document.createElement('span');name.textContent=greeting.name||'Mesaj '+String(index+1).padStart(2,'0');const icon=document.createElement('span');icon.setAttribute('aria-hidden','true');icon.textContent='✉';top.append(name,icon);const layout=document.createElement('div');layout.className='greeting-layout';const heading=document.createElement('h3');heading.textContent=greeting.name?'İsmail için':'Yeni mesaj';const preview=document.createElement('p');preview.textContent=greeting.message||'Arkadaşlarından yeni bir mesaj yakında burada.';const button=document.createElement('button');button.type='button';button.className='button dark';button.textContent=greeting.message?'Mesajı aç':'Yakında';button.setAttribute('aria-haspopup','dialog');button.addEventListener('click',()=>openGreeting(index));const gif=document.createElement("img");const gifName=greetingGifs[index%greetingGifs.length];gif.className="reaction-img animated greeting-gif";gif.src=gifName+".png";gif.dataset.gif=gifName+".gif";gif.dataset.still=gifName+".png";gif.alt="Doğum günü GIF";gif.loading="lazy";layout.append(heading,gif,preview,button);card.append(top,layout);grid.appendChild(card);});

letter.addEventListener('click',event=>{const bounds=letter.getBoundingClientRect();if(event.target===letter&&(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom))letter.close();});
const wishes=['Sağlık dolu bir yıl.','İçten gülümsemeler.','Güzel haberler.','Gerçekleşen hayaller.','Sevdiğin şeylere daha çok zaman.','Gurur duyacağın başarılar.','Huzurlu sabahlar.','Daha hafif günler.','Seni mutlu eden yeni bir adım.','Güzel bir yolculuk.','Seni anlayan insanlar.','Unutulmaz bir deneyim.','Keyifli kutlamalar.','Yeni başlangıçlar için cesaret.','Doğru zamanda gelen fırsatlar.','Güzel anılar.','Yorgunluğunu unutturan bir gülümseme.','Seni güzelliklerle şaşırtan bir yıl.','Huzur ve mutluluk.','Yeni yaşında güzel bir başlangıç.'];
const opened=new Set();wishes.forEach((wish,index)=>{const button=document.createElement('button');button.type='button';button.textContent=index+1;button.setAttribute('aria-label',(index+1)+'. dileği aç');button.setAttribute('aria-pressed','false');button.addEventListener('click',()=>{document.querySelectorAll('#wish-buttons button').forEach(b=>{b.classList.remove('selected');b.setAttribute('aria-pressed','false');});opened.add(index);button.classList.add('opened','selected');button.textContent='✦';button.setAttribute('aria-pressed','true');document.getElementById('wish-text').textContent=wish;document.getElementById('wish-count').textContent=opened.size;});document.getElementById('wish-buttons').appendChild(button);});
const canvas=document.getElementById('confetti');
const context = canvas.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let celebrationCount = 0;
    function celebrate() {
      celebrationCount += 1;
      document.getElementById('celebration-status').textContent = 'İyi ki doğdun, İsmail!';
      document.getElementById('celebration-status').textContent = celebrationCount % 2 ? 'Doğum günü kutlaması!' : 'Bir kez daha: iyi ki doğdun!';
      
      cancelAnimationFrame(frame);
      if (!context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      if (reducedMotion.matches || animationsPaused) return;
      // A modal belongs to the browser's top layer; place the effects inside it while open.
      (letter.open ? letter : document.body).appendChild(canvas);
      const width = window.innerWidth, height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const colors = ['#7253db','#ffdf55','#ff84be','#83dfc5'];
      const particles = Array.from({length: 40}, () => ({x: Math.random() * width, y: -30 - Math.random() * height * .45, vx: (Math.random() - .5) * 1.8, vy: 2.4 + Math.random() * 3, angle: Math.random() * Math.PI, spin: (Math.random() - .5) * .08, size: 4 + Math.random() * 5, color: colors[Math.floor(Math.random() * colors.length)]}));
      let previous = 0, started = 0;
      function draw(time) {
        if (!started) started = time;
        const step = previous ? Math.min((time - previous) / 16.67, 3) : 1;
        previous = time;
        context.clearRect(0, 0, width, height);
        for (const particle of particles) {
          particle.x += particle.vx * step; particle.y += particle.vy * step; particle.angle += particle.spin * step;
          context.save();context.translate(particle.x, particle.y);context.rotate(particle.angle);context.fillStyle = particle.color;context.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size * .5);context.restore();
        }
        if (time - started < 5000 && particles.some(particle => particle.y < height + 20)) frame = requestAnimationFrame(draw);
        else context.clearRect(0, 0, width, height);
      }
      frame = requestAnimationFrame(draw);
    }
    document.querySelectorAll('[data-celebrate]').forEach(button => button.addEventListener('click', celebrate));
    function stopEffects() {cancelAnimationFrame(frame); if (context) context.clearRect(0, 0, canvas.width, canvas.height);}
    letter.addEventListener('close', () => {stopEffects();document.body.appendChild(canvas);});
    reducedMotion.addEventListener('change', stopEffects);
    window.addEventListener('resize', stopEffects);
    document.addEventListener('visibilitychange', () => {if (document.hidden) stopEffects();});


const motionButton=document.getElementById('motion-toggle');let animationsPaused=reducedMotion.matches;
function syncMotion(){document.body.classList.toggle("motion-paused",animationsPaused);document.querySelectorAll('.animated').forEach(img=>{const next=animationsPaused?img.dataset.still:img.dataset.gif;if(img.getAttribute('src')!==next)img.src=next;});motionButton.textContent=animationsPaused?'Hareketi aç':'Hareketi durdur';motionButton.setAttribute('aria-pressed',String(animationsPaused));}
motionButton.addEventListener('click',()=>{animationsPaused=!animationsPaused;if(animationsPaused)stopEffects();syncMotion();});reducedMotion.addEventListener('change',()=>{animationsPaused=reducedMotion.matches;syncMotion();});syncMotion();
const audio=document.getElementById('party-audio');const musicButton=document.getElementById('music-toggle');audio.volume=.12;musicButton.addEventListener('click',async()=>{if(!audio.paused){audio.pause();musicButton.textContent='♫ Müziği aç';musicButton.setAttribute('aria-pressed','false');return;}try{await audio.play();musicButton.textContent='♫ Müziği kapat';musicButton.setAttribute('aria-pressed','true');document.getElementById('music-status').textContent='';}catch{document.getElementById('music-status').textContent='Müzik açılamadı. Lütfen tekrar dene.';}});

if('IntersectionObserver' in window){
 const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}});},{threshold:.08});
 document.querySelectorAll('.section-head,.greeting-card,.meme,.wishes-section,.final-party').forEach((el,i)=>{el.classList.add('soft-reveal');el.style.setProperty('--reveal-delay',String((i%4)*65)+'ms');revealObserver.observe(el);});
}

// Animate words without changing the greeting text or its reading order.
function prepareAnimatedWords(el){
 const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
 let wordIndex=0;nodes.forEach(node=>{const fragment=document.createDocumentFragment();node.textContent.split(/(\s+)/).forEach(part=>{if(!part)return;if(/^\s+$/.test(part)){fragment.append(document.createTextNode(part));return;}const word=document.createElement('span');word.className='text-word';word.textContent=part;word.style.setProperty('--word-delay',Math.min(wordIndex++*85,680)+'ms');fragment.append(word);});node.replaceWith(fragment);});
 el.classList.add('animated-text');
}
const animatedTextTargets=document.querySelectorAll('.hero-copy h1,.section-head h2,.final-party h2');
animatedTextTargets.forEach(prepareAnimatedWords);
if('IntersectionObserver' in window){const textObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('text-ready');textObserver.unobserve(entry.target);}});},{threshold:.2});animatedTextTargets.forEach(el=>textObserver.observe(el));}else animatedTextTargets.forEach(el=>el.classList.add('text-ready'));
