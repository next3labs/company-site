const {test} = require('node:test');
const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const vm = require('node:vm');
const source = readFileSync('src/assets/js/vigil-chat.js', 'utf8');
function fixture(url='https://app.vigilcc.com/widget/'+'a'.repeat(32), supported=true) {
  const node = () => ({hidden:true, listeners:{}, attrs:{}, addEventListener(name,fn){this.listeners[name]=fn;},setAttribute(k,v){this.attrs[k]=v;},getAttribute(k){return this.attrs[k];},click(){this.clicked=true;},focus(){this.focused=true;},contentWindow:{messages:[],postMessage(data,origin){this.messages.push({data,origin});}}});
  const launcher=node(), dialog=node(), close=node(), contact=node(), slot={children:[],append(n){this.children.push(n);}},window={listeners:{},addEventListener(name,fn){this.listeners[name]=fn;}};
  contact.attrs.href='mailto:contact@next3labs.com';dialog.classList={values:new Set(),add(value){this.values.add(value);}};
  dialog.dataset={vigilUrl:url};dialog.open=false;
  if(supported)dialog.showModal=()=>{dialog.open=true;};
  dialog.close=()=>{dialog.open=false;dialog.listeners.close();};
  dialog.querySelector=s=>s==='[data-vigil-close]'?close:s==='[data-vigil-contact]'?contact:slot;
  const document={querySelector:()=>launcher,getElementById:()=>dialog,createElement:()=>node()};
  vm.runInNewContext(source,{document,window});
  return {launcher,dialog,close,contact,slot,window};
}
test('never creates an iframe before an explicit visitor click',()=>{
  const f=fixture();assert.equal(f.launcher.hidden,false);assert.equal(f.slot.children.length,0);
  f.launcher.listeners.click();assert.equal(f.slot.children.length,1);assert.equal(f.dialog.open,true);assert.equal(f.launcher.attrs['aria-expanded'],'true');
  const frame=f.slot.children[0];assert.equal(frame.src,'https://app.vigilcc.com/widget/'+'a'.repeat(32));assert.equal(frame.title,'NEXT3LABS website support chat');assert.equal(frame.referrerPolicy,'no-referrer');assert.equal(frame.attrs.sandbox,'allow-scripts allow-same-origin allow-forms allow-popups');
});
test('close returns focus and reopening preserves the same chat frame/history',()=>{
  const f=fixture();f.launcher.listeners.click();const frame=f.slot.children[0];f.close.listeners.click();assert.equal(f.launcher.attrs['aria-expanded'],'false');assert.equal(f.launcher.focused,true);f.launcher.listeners.click();assert.equal(f.slot.children.length,1);assert.equal(f.slot.children[0],frame);
});
test('invalid hosts, malformed keys and unsupported dialogs fail closed',()=>{
  for(const url of ['javascript:alert(1)','https://foreign.test/widget/'+'a'.repeat(32),'https://app.vigilcc.com/widget/short','https://app.vigilcc.com/widget/'+'a'.repeat(32)+'?extra=1']){
    const f=fixture(url);assert.equal(f.launcher.hidden,true);assert.equal(f.slot.children.length,0);assert.equal(f.launcher.listeners.click,undefined);
  }
  const f=fixture(undefined,false);assert.equal(f.launcher.hidden,true);assert.equal(f.slot.children.length,0);
});
test('single-header integration accepts only exact frame and app origin; contact uses configured host email',()=>{
  const f=fixture();f.launcher.listeners.click();const frame=f.slot.children[0];
  const send=(type,origin='https://app.vigilcc.com',source=frame.contentWindow)=>f.window.listeners.message({origin,source,data:{type}});
  send('vigil:ready','https://foreign.test');send('vigil:ready',undefined,{});assert.equal(f.dialog.classList.values.size,0);
  send('vigil:ready');assert.equal(f.dialog.classList.values.has('vigil-chat--integrated'),true);assert.equal(frame.contentWindow.messages.length,1);assert.equal(frame.contentWindow.messages[0].origin,'https://app.vigilcc.com');assert.equal(frame.contentWindow.messages[0].data.contactAvailable,true);
  send('vigil:contact');assert.equal(f.contact.clicked,true);send('vigil:close');assert.equal(f.dialog.open,false);assert.equal(f.launcher.focused,true);
});
test('release gate: navigation labels do not carry prohibited ARIA names',()=>{
  const nav=readFileSync('src/_includes/v3-nav.njk','utf8');
  assert.doesNotMatch(nav,/<label\b[^>]*aria-label=/);
  assert.match(nav,/<input\b[^>]*id="v3-nav-toggle"[^>]*aria-label="Toggle menu"/);
});
test('release gate: contact headings and links retain accessible semantics and contrast token',()=>{
  const page=readFileSync('src/pages/contact.njk','utf8');
  assert.match(page,/<h2>Email<\/h2>/);assert.doesNotMatch(page,/<h3>/);
  const css=readFileSync('src/assets/css/v3.css','utf8');
  assert.match(css,/\.v3 \.v3-contact__item a\s*\{\s*color:\s*var\(--v3-primary\)/);
});
