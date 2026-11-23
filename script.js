/* Edit the content below to personalize your portfolio. */
const PROFILE = {
  github: 'https://github.com/jeanna359', // REPLACE with your actual GitHub profile URL
  linkedin: 'https://www.linkedin.com/in/jeannamarie-laureta-216490114', // REPLACE with your actual LinkedIn profile URL
  email: 'laur2545@kettering.edu',
  resume: 'resume.pdf'
};

const projects = [
  {title:'Wordle Web Application',tag:'Full-stack development',stack:'C# · JavaScript · Blazor · ASP.NET Core',description:'Collaborated on a full-stack Wordle-inspired web game with multiple game modes and an AI opponent. Implemented frontend and backend features for account management, administration, player statistics, and gameplay instructions.'},
  {title:'Book Finder 101',tag:'Cloud & API integration',stack:'Python · Flask · Google Books API · AWS EC2 · Nginx',description:'Built a Flask application that lets users search for books by title, author, or genre using the Google Books API. Designed the interface and deployed the application to AWS EC2 with Nginx.'},
  {title:'Scene Analyzer',tag:'In progress',stack:'JavaScript · Python · Flask · AWS (planned/in progress)',description:'Developing a browser-based experience for exploring contextual information and technical analysis of film and television scenes. Designing the cloud workflow and interactive interface; implementation is in progress.'}
];
const jobs = [
  {title:'Jabil Circuit Inc.',tag:'Test Engineer · Oct 2022–Jun 2023',description:'Modified and validated existing C# applications for updated testing requirements and collaborated with engineering teams on software and hardware issues.'},
  {title:'General Dynamics Land Systems',tag:'High Voltage Test Engineer · Oct–Dec 2023',description:'Used MATLAB/Simulink and existing code templates to analyze vehicle system functionality; supported high-voltage testing, troubleshooting, and data analysis.'},
  {title:'Webasto Roof Systems Inc.',tag:'Electrical Test Engineer · Apr–Dec 2024',description:'Conducted functionality and integration testing at various voltage levels for production and prototype sunroof systems; collaborated with lead engineers on testing, equipment setup, and daily engineering tasks.'},
  {title:'Lear Corporation',tag:'Digital Systems Engineer · Apr–Dec 2025',description:'Contributed to a Python image segmentation tool using PyTorch, Ultralytics YOLO, and OpenCV. Supported ML training through dataset validation and annotation, and developed VBA scripts for processing and organizing large datasets.'}
];

const link = (url,label) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
const content = {
  welcome: () => `<p class="eyebrow">Welcome to my little corner of the internet ✧</p><h1>Hi, I'm <span class="accent">Jeannamarie!</span> ♡</h1><p>I'm a Computer Science senior at Kettering University (expected June 2027) who enjoys building useful software, automation tools, and creative technology.</p><p>Explore my engineering experience, projects, and the operational challenges that motivate my work.</p><div class="action-row"><button class="primary-btn" data-open="projects">✦ View Projects</button><button class="secondary-btn" data-open="resume">View Resume</button></div>`,
  about: () => `<p class="eyebrow">01 / About me</p><h2>A little about me ✿</h2><p>I'm pursuing a B.S. in Computer Science at Kettering University, with an expected graduation in June 2027. My experience spans software development, computer vision, engineering testing, and workflow automation.</p><p>I enjoy turning complicated processes into tools that people can actually use. I'm also interested in film, animation, and the intersection of storytelling and software.</p><h3>From running a shop to building software</h3><p>In high school, I ran a small K-pop merchandise business, coordinating group orders and tracking inventory, customer payments, and shipments in a manually maintained master list. That experience gave me firsthand appreciation for the repetitive operational work that good software can simplify.</p><p class="muted">Currently exploring: cloud applications, AI-assisted workflows, and creative technology.</p>`,
  projects: () => `<p class="eyebrow">02 / Selected work</p><h2>Projects & experiments</h2><div class="tile-list">${projects.map(p=>`<article class="tile"><span class="tag">${p.tag}</span><h3>${p.title}</h3><p class="stack">${p.stack}</p><p>${p.description}</p></article>`).join('')}</div>`,
  experience: () => `<p class="eyebrow">03 / Experience</p><h2>Where I've worked</h2><div class="tile-list">${jobs.map(j=>`<article class="tile"><span class="tag">${j.tag}</span><h3>${j.title}</h3><p>${j.description}</p></article>`).join('')}</div><p class="muted" style="margin-top:15px">For more detail, see my résumé.</p>`,
  resume: () => `<p class="eyebrow">04 / Resume</p><h2>My résumé 📄</h2><p>My latest engineering résumé (November 2026).</p><div class="action-row"><a class="primary-btn" href="${PROFILE.resume}" target="_blank" rel="noopener noreferrer">Open Résumé PDF ↗</a><a class="secondary-btn" href="${PROFILE.resume}" download="JeannamarieLauretaResume.pdf">Download PDF ↓</a></div>`,
  contact: () => `<p class="eyebrow">05 / Say hello</p><h2>Let's connect! 💌</h2><p>I'm interested in software engineering, applied AI, workflow automation, and creative technology.</p><div class="tile-list">${PROFILE.github !== 'https://github.com/' ? `<div class="tile"><h3>GitHub</h3><p>${link(PROFILE.github,'View profile')}</p></div>` : ''}${PROFILE.linkedin !== 'https://www.linkedin.com/' ? `<div class="tile"><h3>LinkedIn</h3><p>${link(PROFILE.linkedin,'Connect with me')}</p></div>` : ''}<div class="tile"><h3>Email</h3><p><a href="mailto:${PROFILE.email}">Send an email ↗</a></p></div></div>`
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
