/* Edit the content below to personalize your portfolio. */
const PROFILE = {
  github: 'https://github.com/', // REPLACE with your actual GitHub profile URL
  linkedin: 'https://www.linkedin.com/', // REPLACE with your actual LinkedIn profile URL
  email: '', // OPTIONAL: add your email address to enable an email link
  resume: '' // OPTIONAL: add 'resume.pdf' after putting that file in this folder
};

const projects = [
  {title:'AI Modeling & Automation',tag:'Professional experience',description:'Computer vision and software automation work at Lear Corporation, including Python-based development and process improvements.'},
  {title:'Wordle Web Application',tag:'Software engineering',description:'Full-stack Wordle-inspired web application using Blazor WebAssembly and ASP.NET Core Web API, with user accounts and leaderboards.'},
  {title:'BookFinder101',tag:'Cloud computing',description:'Book discovery application using a Flask backend, Google Books API, and AWS EC2 deployment.'},
  {title:'SceneSense',tag:'In development',description:'Concept for an AI-powered browser extension to help viewers explore the filmmaking context behind scenes.'}
];

const link = (url,label) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
const content = {
  welcome: () => `<p class="eyebrow">Welcome to my little corner of the internet ✧</p><h1>Hi, I'm <span class="accent">Jeannamarie!</span> ♡</h1><p>I'm a Computer Science student and software engineer interested in AI, creative technology, and the intersection of storytelling and software.</p><p>Explore my projects, experience, and the things I'm currently learning.</p><div class="action-row"><button class="primary-btn" data-open="projects">✦ View Projects</button><button class="secondary-btn" data-open="about">More About Me</button></div>`,
  about: () => `<p class="eyebrow">01 / About me</p><h2>A little about me ✿</h2><p>I'm studying Computer Science at Kettering University, with a minor in Computer Engineering. I love building practical software and exploring how technology supports creative work.</p><p>My interests include machine learning, computer vision, cloud applications, and tools that make complex workflows easier for people.</p><p class="muted">Currently exploring: animation production tools, Maya scripting, and creative technology.</p>`,
  projects: () => `<p class="eyebrow">02 / Selected work</p><h2>Projects & experiments</h2><div class="tile-list">${projects.map(p=>`<article class="tile"><span class="tag">${p.tag}</span><h3>${p.title}</h3><p>${p.description}</p></article>`).join('')}</div><p class="muted" style="margin-top:15px">More case studies and demos coming soon.</p>`,
  experience: () => `<p class="eyebrow">03 / Experience</p><h2>Where I've worked</h2><div class="tile-list"><article class="tile"><span class="tag">AI & automation</span><h3>Lear Corporation</h3><p>Data Science Engineering co-op experience with computer vision, Python tooling, and process automation.</p></article><article class="tile"><span class="tag">Engineering</span><h3>Webasto</h3><p>Electrical and software engineering internship experience.</p></article></div><p class="muted" style="margin-top:15px">A fuller experience timeline is coming soon.</p>`,
  resume: () => `<p class="eyebrow">04 / Resume</p><h2>My résumé 📄</h2><p>${PROFILE.resume ? 'View or download my latest résumé below.' : 'My résumé will be available here soon. In the meantime, feel free to explore my projects and experience.'}</p><div class="action-row">${PROFILE.resume ? `<a class="primary-btn" href="${PROFILE.resume}" target="_blank" rel="noopener noreferrer">Open Résumé PDF ↗</a>` : `<button class="primary-btn" data-open="experience">View Experience</button>`}</div>`,
  contact: () => `<p class="eyebrow">05 / Say hello</p><h2>Let's connect! 💌</h2><p>I'm always happy to connect about software engineering, creative technology, and interesting projects.</p><div class="tile-list"><div class="tile"><h3>GitHub</h3><p>${link(PROFILE.github,'View profile')}</p></div><div class="tile"><h3>LinkedIn</h3><p>${link(PROFILE.linkedin,'Connect with me')}</p></div>${PROFILE.email ? `<div class="tile"><h3>Email</h3><p><a href="mailto:${PROFILE.email}">Send an email ↗</a></p></div>` : ''}</div><p class="muted" style="margin-top:14px">Update the links in script.js with your real profiles before sharing.</p>`
};

const titles={welcome:'Welcome',about:'About Me',projects:'Projects',experience:'Experience',resume:'Resume.pdf',contact:'Contact'};
const windowEl=document.getElementById('app-window');
const contentEl=document.getElementById('window-content');
function openSection(section){if(!content[section])return;contentEl.innerHTML=content[section]();document.getElementById('window-title').textContent=`✧ ${titles[section]} — jeannamarie.exe`;document.getElementById('status-label').textContent=section;windowEl.hidden=false;document.getElementById('desktop-hint').hidden=true;}
document.addEventListener('click',e=>{const target=e.target.closest('[data-open]');if(target)openSection(target.dataset.open);});
document.getElementById('home-btn').addEventListener('click',()=>openSection('welcome'));
document.getElementById('start-btn').addEventListener('click',()=>openSection('welcome'));
document.getElementById('close-btn').addEventListener('click',()=>{windowEl.hidden=true;document.getElementById('desktop-hint').hidden=false;});
openSection('welcome');
