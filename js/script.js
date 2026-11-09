const ROOT=document.body.dataset.root||'';const fixLinks=()=>document.querySelectorAll('a[href]').forEach(a=>{const h=a.getAttribute('href');if(/^(#|https?:|mailto:)/.test(h))return;const f=h.split('/').pop();a.setAttribute('href',f==='index.html'?ROOT+'index.html':(ROOT?'':'pages/')+f)});
/* ====== RÉGLAGES DU SITE : DÉBUT ====== */
const SITE={
 "instagram":"#",
 "tiktok":"#",
 "email":"contact@exemple.ma",
 "adresse":"ENSC Kénitra – adresse à renseigner",
 "admin":{"nom":"Adam Drif","email":"adam.drift@uit.ac.ma"},
 "membres":[
  {"nom":"Exemple Adhérent","email":"adherent@exemple.ma","role":"adherent","sports":["Basketball"]},
  {"nom":"Exemple Bureau","email":"bureau@exemple.ma","role":"bureau","sports":["Football"]}
 ]
};
/* ====== RÉGLAGES DU SITE : FIN ====== */
/* Configuration centrale – à modifier sans toucher au reste du code */
window.ENSCK_CONFIG={
  siteName:'ENSCK SPORTS',
  logos:{school:ROOT+'assets/logos/logo-ecole.png',office:ROOT+'assets/logos/logo-bureau.jpeg'},
  social:{instagram:SITE.instagram,tiktok:SITE.tiktok},           // TODO : liens officiels
  contact:{email:SITE.email,address:SITE.adresse,phone:''}, // TODO
  supabase:{url:'https://jcjgfjnuxslckxazybjr.supabase.co',anonKey:'sb_publishable_CTDtWb1Z2uKlUt3hJSwJWQ_QV2XUeWW'},               // Phase 2 : URL + clé ANON publique uniquement (jamais service_role)
  auth:{allowedEmailDomain:''}                // Phase 2 : domaine e-mail institutionnel, vérifié côté serveur
};
/* Données de DÉMONSTRATION. Phase 2 : remplacer le corps de chaque fonction api.* par un appel Supabase
   ex. supabase.from('events').select('*').order('date') — la forme des objets doit rester identique. */
const P=ROOT+'assets/images/';
const DB={
 events:[
  {id:1,title:'Tournoi inter-promotions de football',date:'2026-12-06',time:'14:00',place:"Terrain de l'école",cat:'Football',status:'À venir',img:P+'evt-foot.jpg',desc:"[Démo] Tournoi amical entre les promotions de l'école."},
  {id:2,title:'Championnat interne de basketball',date:'2026-12-13',time:'16:00',place:'Salle omnisports',cat:'Basketball',status:'À venir',img:P+'evt-basket.jpg',desc:'[Démo] Phase de poules et finale.'},
  {id:3,title:'Journée volleyball mixte',date:'2027-01-10',time:'15:00',place:'Terrain extérieur',cat:'Volleyball',status:'À venir',img:P+'evt-volley.jpg',desc:'[Démo] Matchs par équipes mixtes ouverts à tous.'},
  {id:4,title:"Journée d'intégration sportive",date:'2026-10-18',time:'10:00',place:'Campus',cat:'Événement',status:'Terminé',img:P+'evt-integration.jpg',desc:'[Démo] Accueil des nouveaux étudiants et présentation des sports.'},
  {id:5,title:'Match amical de basketball',date:'2026-10-25',time:'17:00',place:'Salle omnisports',cat:'Basketball',status:'Terminé',img:P+'evt-basket2.jpg',desc:'[Démo] Rencontre amicale de début de saison.'}],
 news:[
  {id:1,title:'Ouverture des inscriptions 2026-2027',date:'2026-10-05',cat:'Inscriptions',img:P+'news1.jpg',text:'[Démo] Les inscriptions aux équipes sportives sont ouvertes. Modalités à préciser par le Bureau des Sports.'},
  {id:2,title:'Calendrier des entraînements',date:'2026-10-12',cat:'Informations sportives',img:'',text:"[Démo] Les créneaux d'entraînement sont publiés sur les pages de chaque sport."},
  {id:3,title:"Modification d'horaire – entraînement de volleyball",date:'2026-11-02',cat:'Modifications des horaires',img:'',text:"[Démo] La séance du jeudi est décalée d'une heure."},
  {id:4,title:'Résultats du match amical',date:'2026-10-26',cat:'Résultats',img:'',text:'[Démo] Résumé du match amical de basketball.'},
  {id:5,title:'Message du Bureau des Sports',date:'2026-09-30',cat:'Annonces officielles',img:'',text:'[Démo] Bienvenue à la nouvelle saison sportive.'}],
 newsCats:['Annonces officielles','Informations sportives','Inscriptions','Résultats','Modifications des horaires'],
 sports:{
  basketball:{name:'Basketball',img:P+'basketball.jpg',intro:"[Démo] Présentation de l'équipe de basketball de l'ENSCK.",train:['[Démo] Mardi 18:00 – Salle omnisports','[Démo] Jeudi 18:00 – Salle omnisports'],next:['[Démo] ENSCK vs équipe à définir – date à confirmer'],res:['[Démo] Aucun résultat officiel enregistré'],ach:['[Exemple] Palmarès à renseigner']},
  football:{name:'Football',img:P+'football.jpg',intro:"[Démo] Présentation de l'équipe de football de l'ENSCK.",train:['[Démo] Mercredi 17:00 – Terrain','[Démo] Samedi 10:00 – Terrain'],next:['[Démo] ENSCK vs équipe à définir – date à confirmer'],res:['[Démo] Aucun résultat officiel enregistré'],ach:['[Exemple] Palmarès à renseigner']},
  volleyball:{name:'Volleyball',img:P+'volleyball.jpg',intro:"[Démo] Présentation de l'équipe de volleyball de l'ENSCK.",train:['[Démo] Lundi 17:30 – Terrain','[Démo] Jeudi 17:30 – Terrain'],next:['[Démo] ENSCK vs équipe à définir – date à confirmer'],res:['[Démo] Aucun résultat officiel enregistré'],ach:['[Exemple] Palmarès à renseigner']}},
 team:['Président(e)','Vice-président(e)','Trésorier(ère)','Secrétaire général(e)','Responsable basketball','Responsable football','Responsable volleyball','Responsable communication'].map((r,i)=>({id:i,name:'Nom à renseigner',role:r,img:P+'membre-'+(i+1)+'.jpg',bio:''})),
 timeline:[{y:'[Exemple] Année',t:'Participation à un tournoi universitaire',d:'Contenu fictif : à remplacer par les réalisations authentiques.'},{y:'[Exemple] Année',t:'Résultat de compétition',d:'Contenu fictif : à remplacer.'},{y:'[Exemple] Année',t:'Trophée / distinction',d:'Contenu fictif : à remplacer.'}],
 gallery:[...Array(9)].map((_,i)=>({id:i,cat:['Basketball','Football','Volleyball','Événements'][i%4],img:P+'galerie-'+(i+1)+'.jpg',alt:'Photo de démonstration '+(i+1)}))
};
const api={ // Couche d'accès aux données (asynchrone dès maintenant, pour faciliter la migration)
 events:async()=>DB.events,news:async()=>DB.news,sport:async s=>DB.sports[s],team:async()=>DB.team,gallery:async()=>DB.gallery,timeline:async()=>DB.timeline
};
(()=>{const C=ENSCK_CONFIG,pg=document.body.dataset.page;
const L=[['index.html','Accueil','home'],['about.html','Le Bureau','bureau'],['evenements.html','Événements','events'],['actualites.html','Actualités','news'],['basketball.html','Nos Sports','sport'],['palmares.html','Palmarès','palmares'],['galerie.html','Galerie','gallery'],['contact.html','Contact','contact']];
document.getElementById('site-header').innerHTML=`<header class="top"><div class="wrap bar"><a class="brand" href="index.html" aria-label="ENSCK SPORTS – Accueil"><img src="${C.logos.office}" alt="Logo du Bureau des Sports ENSCK"><span><b>ENSCK SPORTS</b><small>OFFICIAL SPORTS OFFICE</small></span></a>
<button class="burger" aria-label="Ouvrir le menu" aria-expanded="false">☰</button><nav id="nav" aria-label="Navigation principale"><ul>${L.map(l=>`<li><a href="${l[0]}" class="${pg===l[2]?'on':''}" ${pg===l[2]?'aria-current="page"':''}>${l[1]}</a></li>`).join('')}<li><a class="btn" href="espace-membre.html">ESPACE MEMBRE</a></li></ul></nav></div></header>`;
const b=document.querySelector('.burger'),n=document.getElementById('nav');b.onclick=()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);b.textContent=o?'✕':'☰'};
document.getElementById('site-footer').innerHTML=`<footer><div class="wrap"><div class="cols"><div><img src="${C.logos.school}" alt="Logo ENSC"><img src="${C.logos.office}" alt="Logo Bureau des Sports"><p style="margin-top:12px">ENSCK SPORTS – Bureau des Sports de l'École Nationale Supérieure de Chimie de Kénitra.</p></div>
<div><h4>Navigation</h4>${L.map(l=>`<a href="${l[0]}">${l[1]}</a>`).join('')}</div><div><h4>Nos sports</h4><a href="basketball.html">Basketball</a><a href="football.html">Football</a><a href="volleyball.html">Volleyball</a></div>
<div><h4>Suivez-nous</h4><a href="${C.social.instagram}">Instagram</a><a href="${C.social.tiktok}">TikTok</a><a href="mailto:${C.contact.email}">${C.contact.email}</a></div></div>
<p class="copy">© ${new Date().getFullYear()} ENSCK SPORTS – Tous droits réservés. Contenu de démonstration.</p></div></footer>`;})();
(()=>{const C=ENSCK_CONFIG,$=(s,e=document)=>e.querySelector(s),app=$('#app'),pg=document.body.dataset.page,dlg=$('#dlg');
const ph=(s,c='')=>`<div class="ph ${c}">${s?`<img src="${s}" alt="" loading="lazy" onerror="this.remove()">`:''}</div>`;
const fmt=d=>new Date(d).toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'});
const head=(t,p)=>`<div class="page-h"><div class="wrap fade"><h1>${t}</h1><p>${p}</p></div></div>`;
const sec=(t,p,body,alt)=>`<section class="${alt?'alt':''}"><div class="wrap"><h2>${t}</h2><p class="lead">${p||''}</p>${body}</div></section>`;
const open=h=>{dlg.className='';dlg.innerHTML=`<button class="x" aria-label="Fermer">✕</button>${h}`;$('.x',dlg).onclick=()=>dlg.close();dlg.showModal()};
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
const evCard=e=>`<article class="card" tabindex="0" role="button" data-ev="${e.id}">${ph(e.img)}<div class="cb"><span class="tag">${e.cat}</span><span class="st ${e.status==='À venir'?'on':''}">● ${e.status}</span><h3>${e.title}</h3><p class="meta">${fmt(e.date)} · ${e.time} · ${e.place}</p><p>${e.desc}</p></div></article>`;
const nCard=n=>`<article class="card" tabindex="0" role="button" data-nw="${n.id}">${n.img?ph(n.img):''}<div class="cb"><span class="tag">${n.cat}</span><h3>${n.title}</h3><p class="meta">${fmt(n.date)}</p><p>${n.text}</p></div></article>`;
const bind=(root,list,key,fn)=>root.querySelectorAll(`[data-${key}]`).forEach(el=>{const go=()=>fn(list.find(x=>x.id==el.dataset[key]));el.onclick=go;el.onkeydown=e=>{if(e.key==='Enter')go()}});
const evDetail=e=>open(`${ph(e.img)}<div class="cb"><span class="tag">${e.cat}</span><h2>${e.title}</h2><p class="meta">${fmt(e.date)} · ${e.time} · ${e.place} · ${e.status}</p><p>${e.desc}</p></div>`);
const nwDetail=n=>open(`${n.img?ph(n.img):''}<div class="cb"><span class="tag">${n.cat}</span><h2>${n.title}</h2><p class="meta">${fmt(n.date)}</p><p>${n.text}</p></div>`);
const lightbox=(list,i)=>{const show=()=>{const g=list[i];dlg.className='lb';dlg.innerHTML=`<button class="x" aria-label="Fermer">✕</button>${ph(g.img)}<p>${g.cat} – ${g.alt}</p><div class="nav"><button class="btn o" id="pv">← Précédent</button><button class="btn o" id="nx">Suivant →</button></div>`;$('.x',dlg).onclick=()=>dlg.close();$('#pv').onclick=()=>{i=(i-1+list.length)%list.length;show()};$('#nx').onclick=()=>{i=(i+1)%list.length;show()}};show();if(!dlg.open)dlg.showModal()};
const gal=list=>`<div class="gal">${list.map((g,i)=>`<figure data-i="${i}" tabindex="0" role="button" aria-label="Agrandir : ${g.alt}">${ph(g.img)}</figure>`).join('')}</div>`;
const bindGal=(root,list)=>root.querySelectorAll('[data-i]').forEach(f=>{const go=()=>lightbox(list,+f.dataset.i);f.onclick=go;f.onkeydown=e=>{if(e.key==='Enter')go()}});
const list=a=>a.map(x=>`<div class="row">${x}</div>`).join('');
const sportCard=(k,s)=>`<a class="card sport-card" href="${k}.html">${ph(s.img)}<div class="cb"><h3>${s.name}</h3><span>Découvrir l'équipe →</span></div></a>`;
const filt=(sel,fn)=>{$(sel).onclick=e=>{if(e.target.tagName!=='BUTTON')return;$(sel+' .on').classList.remove('on');e.target.classList.add('on');fn(e.target.textContent)}};
const R={
async home(){const [ev,nw,tl,g]=await Promise.all([api.events(),api.news(),api.timeline(),api.gallery()]);
 app.innerHTML=`<section class="hero" style="padding:0">${ph(ROOT+'assets/images/hero.jpg')}<div class="wrap fade"><h1>Le sport nous rassemble. <em>L'excellence nous anime.</em></h1><p>Bienvenue sur la plateforme officielle du Bureau des Sports de l'École Nationale Supérieure de Chimie de Kénitra.</p><a class="btn" href="evenements.html">Découvrir nos activités</a><a class="btn o" href="contact.html">Rejoindre nos équipes</a></div></section>
 <section><div class="wrap"><div class="grid quick">${[['📅','Événements à venir','evenements.html'],['🏀','Nos équipes','about.html'],['📰','Dernières actualités','actualites.html'],['🔐','Espace membre','espace-membre.html']].map(q=>`<a class="card" href="${q[2]}"><span class="ico">${q[0]}</span><h3>${q[1]}</h3></a>`).join('')}</div></div></section>`+
 sec('Événements à venir','Contenu de démonstration.',`<div class="grid">${ev.filter(e=>e.status==='À venir').map(evCard).join('')}</div>`,1)+
 sec('Dernières actualités','',`<div class="grid">${nw.slice(0,3).map(nCard).join('')}</div>`)+
 sec('Nos sports','',`<div class="grid">${Object.entries(DB.sports).map(([k,s])=>sportCard(k,s)).join('')}</div>`,1)+
 sec('Nos réalisations','<span class="demo">Exemples fictifs</span>',`<div class="timeline">${tl.map(t=>`<div><b>${t.y}</b><h3>${t.t}</h3><p>${t.d}</p></div>`).join('')}</div><p style="margin-top:20px"><a class="btn" href="palmares.html">Voir le palmarès</a></p>`)+
 sec('Temps forts en images','',gal(g.slice(0,6))+'<p style="margin-top:16px"><a class="btn" href="galerie.html">Toute la galerie</a></p>',1)+
 `<section class="insta"><div class="wrap"><h2>Suivez ENSCK SPORTS sur Instagram</h2><p class="lead" style="margin:0 auto 20px">Coulisses, résultats et temps forts de la vie sportive de l'école.</p><a class="btn o" href="${C.social.instagram}">Instagram</a> <a class="btn o" href="${C.social.tiktok}">TikTok</a></div></section>`;
 bind(app,ev,'ev',evDetail);bind(app,nw,'nw',nwDetail);bindGal(app,g.slice(0,6))},
async bureau(){const t=await api.team();app.innerHTML=head('Le Bureau des Sports','Mission, rôle et équipe du Bureau.')+
 sec('Notre mission','',`<div class="three"><div class="panel"><h3>Mission</h3><p>Promouvoir l'activité physique, l'esprit d'équipe et le bien-être des étudiants ingénieurs.</p></div><div class="panel"><h3>Rôle dans la vie étudiante</h3><p>Fédérer les étudiants autour du sport et de valeurs communes.</p></div><div class="panel"><h3>Activités</h3><p>Organisation de tournois, de rencontres inter-écoles et d'événements universitaires.</p></div></div>`)+
 sec('Notre équipe','<span class="demo">Noms et photos à renseigner</span>',`<div class="grid team">${t.map(m=>`<article class="card">${ph(m.img)}<div class="cb"><h3>${m.name}</h3><span class="tag">${m.role}</span></div></article>`).join('')}</div>`,1)},
async events(){const ev=await api.events();app.innerHTML=head('Événements','Matchs, tournois et rencontres.')+`<section><div class="wrap"><div class="filters"><select id="fs" aria-label="Statut"><option value="">Tous les statuts</option><option>À venir</option><option>Terminé</option></select><select id="fc" aria-label="Catégorie"><option value="">Tous les sports</option>${[...new Set(ev.map(e=>e.cat))].map(c=>`<option>${c}</option>`).join('')}</select><select id="fm" aria-label="Mois"><option value="">Toutes dates</option>${[...new Set(ev.map(e=>e.date.slice(0,7)))].sort().map(m=>`<option value="${m}">${new Date(m+'-01').toLocaleDateString('fr-FR',{month:'long',year:'numeric'})}</option>`).join('')}</select></div><div class="grid" id="l"></div></div></section>`;
 const draw=()=>{const f=ev.filter(e=>(!$('#fs').value||e.status===$('#fs').value)&&(!$('#fc').value||e.cat===$('#fc').value)&&(!$('#fm').value||e.date.startsWith($('#fm').value)));$('#l').innerHTML=f.map(evCard).join('')||'<p>Aucun événement.</p>';bind(app,ev,'ev',evDetail)};
 ['#fs','#fc','#fm'].forEach(s=>$(s).onchange=draw);draw()},
async news(){const nw=await api.news();app.innerHTML=head('Actualités & annonces','Informations officielles du Bureau.')+`<section><div class="wrap"><div class="filters" id="f">${['Toutes',...DB.newsCats].map((c,i)=>`<button class="${i?'':'on'}">${c}</button>`).join('')}</div><div class="grid" id="l"></div></div></section>`;
 const draw=c=>{$('#l').innerHTML=nw.filter(n=>c==='Toutes'||n.cat===c).map(nCard).join('')||'<p>Aucune annonce.</p>';bind(app,nw,'nw',nwDetail)};draw('Toutes');filt('#f',draw)},
async sport(){const k=document.body.dataset.sport,s=await api.sport(k),g=(await api.gallery()).filter(x=>x.cat===s.name);
 app.innerHTML=`<div class="hero" style="min-height:44vh">${ph(s.img)}<div class="wrap fade"><h1>${s.name}</h1><p>ENSCK SPORTS</p></div></div>`+
 sec('Présentation',s.intro,`<span class="demo">Démonstration</span>`)+
 `<section class="alt"><div class="wrap three"><div class="panel"><h3>Entraînements</h3>${list(s.train)}</div><div class="panel"><h3>Prochains matchs</h3>${list(s.next)}</div><div class="panel"><h3>Résultats</h3>${list(s.res)}</div></div></section>`+
 sec("Palmarès de l'équipe",'',list(s.ach))+sec('Galerie','',gal(g),1)+
 sec('Contact','',`<p>Responsable : <i>à renseigner</i> · <a href="mailto:${C.contact.email}">${C.contact.email}</a></p><p style="margin-top:10px"><a class="btn" href="contact.html">Nous écrire</a></p>`);bindGal(app,g)},
async palmares(){const tl=await api.timeline();app.innerHTML=head('Palmarès & Nos Réalisations','Participations, résultats, trophées et moments forts.')+sec('Parcours','<span class="demo">Exemples fictifs – aucune donnée officielle</span>',`<div class="timeline">${tl.map(t=>`<div><b>${t.y}</b><h3>${t.t}</h3><p>${t.d}</p></div>`).join('')}</div>`)},
async gallery(){const g=await api.gallery();app.innerHTML=head('Galerie','Les temps forts en images.')+`<section><div class="wrap"><div class="filters" id="f">${['Tout','Basketball','Football','Volleyball','Événements'].map((c,i)=>`<button class="${i?'':'on'}">${c}</button>`).join('')}</div><div id="l"></div></div></section>`;
 const draw=c=>{const f=g.filter(x=>c==='Tout'||x.cat===c);$('#l').innerHTML=gal(f);bindGal(app,f)};draw('Tout');filt('#f',draw)},
async contact(){app.innerHTML=head('Contact','Écrivez-nous ou suivez-nous.')+`<section><div class="wrap three"><form class="panel" id="cf"><h3>Formulaire</h3><label for="a">Nom</label><input id="a" required><label for="b">E-mail</label><input id="b" type="email" required><label for="c">Message</label><textarea id="c" rows="5" required></textarea><button class="btn">Envoyer</button><p id="m" class="meta" role="status"></p></form><div class="panel"><h3>Coordonnées</h3><p>E-mail : ${C.contact.email}</p><p>Adresse : ${C.contact.address}</p><p><a href="${C.social.instagram}">Instagram</a> · <a href="${C.social.tiktok}">TikTok</a></p><span class="demo">Informations à renseigner</span></div></div></section>`;
 $('#cf').onsubmit=e=>{e.preventDefault();$('#m').textContent="Démonstration : l'envoi sera activé en phase 2 (Supabase)."}},
async member(){
const norm=s=>(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,' ').trim();
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
const get=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}};
const set=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const W=JSON.parse(JSON.stringify(SITE));let u=null;try{u=JSON.parse(sessionStorage.getItem('ensck_u'))}catch(e){}
let tab='pr',D=new Date().toISOString().slice(0,10),SP='Basketball';
const find=(n,e)=>{n=norm(n);e=norm(e);const a=SITE.admin;if(e===norm(a.email)&&n.startsWith(norm(a.nom)))return{nom:a.nom,email:a.email,role:'admin',sports:[]};const m=SITE.membres.find(x=>norm(x.email)===e&&norm(x.nom)===n);return m?{...m}:null};
const note='<span class="demo">Mode démonstration : vérification faite dans le navigateur, sans sécurité réelle ; les données restent sur cet appareil.</span>';
const login=()=>{app.innerHTML=head('Espace membre','Accès réservé aux adhérents et au bureau.')+sec('Connexion','',note+`<div class="three"><form class="panel" id="lg"><h3>Se connecter</h3><label for="n">Nom complet</label><input id="n" autocomplete="name" required><label for="e">E-mail</label><input id="e" type="email" autocomplete="email" required><button class="btn">Entrer</button><p id="m" class="meta" role="status"></p></form><div class="panel"><h3>Visiteur</h3><p>Sans compte reconnu, vous gardez l'accès public : annonces, événements, sports, palmarès et galerie.</p></div><div class="panel"><h3>Adhérent</h3><p>Si votre nom et votre e-mail figurent sur la liste, vous voyez vos séances, présences et absences.</p></div></div>`);
 $('#lg').onsubmit=ev=>{ev.preventDefault();const r=find($('#n').value,$('#e').value);if(!r){$('#m').textContent='Nom ou e-mail non reconnu : vous restez visiteur.';return}u=r;try{sessionStorage.setItem('ensck_u',JSON.stringify(r))}catch(x){}set('ensck_log',[...get('ensck_log',[]),{nom:r.nom,email:r.email,role:r.role,t:new Date().toISOString()}]);draw()}};
const mine=()=>get('ensck_att',[]).filter(a=>norm(a.email)===norm(u.email)).sort((a,b)=>b.date.localeCompare(a.date));
const stats=()=>{const a=mine(),p=a.filter(x=>x.present).length;return `<div class="kpi"><div><b>${p}</b>Séances</div><div><b>${a.length-p}</b>Absences</div></div>`+(a.length?list(a.map(x=>`<span>${fmt(x.date)} · ${x.sport}</span><b>${x.present?'Présent':'Absent'}</b>`)):'<p class="meta">Aucune séance enregistrée.</p>')};
const tabs=[['pr','Présences'],['ad','Adhérents'],['cx','Connexions'],['cf','Réglages']];
const inp=(id,l,v)=>`<label for="${id}">${l}</label><input id="${id}" value="${esc(v)}">`;
const adminBody=()=>{
 if(tab==='pr'){const att=get('ensck_att',[]);const st=m=>{const r=att.find(x=>x.date===D&&x.sport===SP&&norm(x.email)===norm(m.email));return r?r.present:null};
  return `<div class="filters"><input type="date" id="d" value="${D}" style="width:auto"><select id="s">${['Basketball','Football','Volleyball'].map(s=>`<option ${s===SP?'selected':''}>${s}</option>`).join('')}</select></div>`+(W.membres.length?list(W.membres.map((m,i)=>`<span>${esc(m.nom)}</span><span class="filters" style="margin:0"><button class="${st(m)===true?'on':''}" data-pr="${i}:1">Présent</button><button class="${st(m)===false?'on':''}" data-pr="${i}:0">Absent</button></span>`)):'<p>Aucun adhérent dans la liste.</p>')}
 if(tab==='ad')return list(W.membres.map((m,i)=>`<span>${esc(m.nom)} · ${esc(m.email)} · ${m.role==='bureau'?'Bureau':'Adhérent'}</span><button class="del" data-del="${i}" aria-label="Retirer">✕</button>`))+`<form id="af" style="margin-top:16px"><h3>Ajouter</h3><input id="an" placeholder="Nom complet" required><input id="ae" type="email" placeholder="E-mail" required><select id="ar"><option value="adherent">Adhérent</option><option value="bureau">Membre du bureau</option></select> <button class="btn">Ajouter</button></form>`;
 if(tab==='cx'){const l=get('ensck_log',[]).slice().reverse();return l.length?list(l.map(x=>`<span>${esc(x.nom)} · ${esc(x.email)}</span><span class="meta">${new Date(x.t).toLocaleString('fr-FR')}</span>`)):'<p class="meta">Aucune connexion enregistrée sur cet appareil.</p>'}
 return inp('ig','Instagram',W.instagram)+inp('tt','TikTok',W.tiktok)+inp('em','E-mail de contact',W.email)+inp('ad2','Adresse',W.adresse)+`<button class="btn" id="gen">Générer le code à coller</button><textarea class="code" id="out" readonly hidden></textarea>`};
const draw=()=>{
 if(!u)return login();
 const adm=u.role==='admin',L={admin:'Administrateur',bureau:'Membre du bureau',adherent:'Adhérent'}[u.role];let body;
 if(adm)body=`<div class="filters" id="tb">${tabs.map(t=>`<button class="${t[0]===tab?'on':''}" data-t="${t[0]}">${t[1]}</button>`).join('')}</div><div class="panel">${adminBody()}</div>`;
 else body=`<div class="three"><div class="panel"><h3>Mon profil</h3><p>${esc(u.nom)}</p><p>${esc(u.email)}</p><p>${L}${u.sports&&u.sports.length?' · '+esc(u.sports.join(', ')):''}</p></div><div class="panel"><h3>Mes séances</h3>${stats()}</div>${u.role==='bureau'?`<div class="panel"><h3>Adhérents</h3>${list(SITE.membres.map(m=>`<span>${esc(m.nom)}</span><span class="meta">${esc((m.sports||[]).join(', '))}</span>`))}</div>`:''}</div>`;
 app.innerHTML=head('Espace '+(adm?'administrateur':'adhérent'),`Bonjour ${esc(u.nom)} · ${L}`)+`<section><div class="wrap">${note}<p style="margin:8px 0 20px"><button class="btn" id="out2">Se déconnecter</button></p>${body}</div></section>`;
 $('#out2').onclick=()=>{try{sessionStorage.removeItem('ensck_u')}catch(e){}u=null;draw()};
 if(!adm)return;
 app.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{tab=b.dataset.t;draw()});
 if(tab==='pr'){$('#d').onchange=e=>{D=e.target.value||D;draw()};$('#s').onchange=e=>{SP=e.target.value;draw()};app.querySelectorAll('[data-pr]').forEach(b=>b.onclick=()=>{const[i,v]=b.dataset.pr.split(':'),m=W.membres[i];set('ensck_att',[...get('ensck_att',[]).filter(x=>!(x.date===D&&x.sport===SP&&norm(x.email)===norm(m.email))),{date:D,sport:SP,email:m.email,present:v==='1'}]);draw()})}
 if(tab==='ad'){app.querySelectorAll('[data-del]').forEach(b=>b.onclick=()=>{W.membres.splice(+b.dataset.del,1);draw()});$('#af').onsubmit=e=>{e.preventDefault();W.membres.push({nom:$('#an').value.trim(),email:$('#ae').value.trim(),role:$('#ar').value,sports:[]});draw()}}
 if(tab==='cf'){[['ig','instagram'],['tt','tiktok'],['em','email'],['ad2','adresse']].forEach(([id,k])=>$('#'+id).oninput=e=>{W[k]=e.target.value});$('#gen').onclick=()=>{const o=$('#out');o.hidden=false;o.value='/* ====== RÉGLAGES DU SITE : DÉBUT ====== */\nconst SITE='+JSON.stringify(W,null,1)+';\n/* ====== RÉGLAGES DU SITE : FIN ====== */';o.select()}}
};
draw()}
};
(R[pg]||R.home)().then(fixLinks).catch(e=>{console.error(e);app.innerHTML='<div class="wrap"><p>Une erreur est survenue.</p></div>'});})();
fixLinks();
