import test from 'node:test';
import assert from 'node:assert/strict';
import {handle,retrieve} from '../src/worker.js';
const base='https://victor-travers-cv-chatbot.test';
const origin='https://victortravers79-hash.github.io';
let calls=[];
const ai={run:async(model,payload)=>{calls.push({model,payload});return {response:'À la MAIF, j’ai réalisé un diagnostic et formulé des recommandations pour approfondissement.'}}};
const limiter={limit:async()=>({success:true})};
const env={AI:ai,CHAT_LIMITER:limiter,GLOBAL_LIMITER:limiter};
const req=(question,settings={})=>new Request(`${base}/api/chat`,{method:'POST',headers:{Origin:origin,'Content-Type':'application/json'},body:JSON.stringify({question,...settings})});
const expected=[
  ['Auto-Mission','auto'],['marchés publics et mémoire','memoire'],['souscription chez Groupama','underwriting'],
  ['sinistres corporels chez MAPA','claims_mapa'],['MAIF VIE et clauses bénéficiaires','claims_life'],
  ['newsletter commerciale','newsletter'],['LinkedIn croissance réseau','social'],
  ['Make et veille automatisée','automation'],['challenge S.M.A.R.T.','smart'],
  ['Rotaract et bénévoles','rotaract']
];
for(const [q,id] of expected) test(`Recherche de faits: ${id}`,()=>assert.ok(retrieve(q).some(p=>p.id===id),`Manque ${id} dans ${retrieve(q).map(x=>x.id)}`));
test('Contexte de recherche : sources nominatives présentes', async()=>{calls=[];const r=await handle(req('Qu’avez-vous réalisé sur Auto-Mission ?'),env);assert.equal(r.status,200);const x=await r.json();assert.ok(x.sources.some(p=>p.id==='auto'));assert.equal(r.headers.get('access-control-allow-origin'),origin);assert.ok(calls[0].payload.messages[0].content.includes('recommandations ont été entendues'));});
test('Le mémoire enrichi figure dans la base',async()=>{calls=[];await handle(req('Quel est le contenu de votre mémoire sur l’assurabilité des collectivités territoriales ?'),env);assert.ok(calls[0].payload.messages[0].content.includes('captive d’assurance'));assert.ok(calls[0].payload.messages[0].content.includes('2023'));});
test('Refus CORS d’un domaine tiers',async()=>{const r=await handle(new Request(`${base}/api/chat`,{method:'POST',headers:{Origin:'https://adversaire.example','Content-Type':'application/json'},body:'{"question":"Sinistres Auto"}'}),env);assert.equal(r.status,403)});
test('Preflight autorisé pour GitHub Pages',async()=>{const r=await handle(new Request(`${base}/api/chat`,{method:'OPTIONS',headers:{Origin:origin}}),env);assert.equal(r.status,204)});
test('Questions non documentées sans appel IA',async()=>{calls=[];const r=await handle(req('Raconte-moi une recette de cuisine'),env);assert.equal(r.status,200);assert.equal(calls.length,0);});
test('Question trop longue rejetée',async()=>{const r=await handle(req('a'.repeat(510)),env);assert.equal(r.status,400)});
test('Protection quota simulée',async()=>{const e={...env,CHAT_LIMITER:{limit:async()=>({success:false})}};const r=await handle(req('Parlez de la souscription chez Groupama'),e);assert.equal(r.status,429)});
test('Aucune AI bindée',async()=>{const r=await handle(req('Parlez de la souscription chez Groupama'),{...env,AI:null});assert.equal(r.status,503)});
test('Erreur AI isolée',async()=>{const r=await handle(req('Parlez de la souscription chez Groupama'),{...env,AI:{run:async()=>{throw new Error('TEST_NO_SECRET')}}});assert.equal(r.status,503);assert.doesNotMatch(await r.text(),/TEST_NO_SECRET/)});