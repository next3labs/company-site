const {test} = require('node:test');
const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const vm = require('node:vm');
const source = readFileSync('src/assets/js/vigil-chat.js', 'utf8');
function fixture(url='https://app.vigilcc.com/widget/'+'a'.repeat(32), supported=true) {
  const node = () => ({hidden:true, listeners:{}, attrs:{}, addEventListener(name,fn){this.listeners[name]=fn;},setAttribute(k,v){this.attrs[k]=v;},focus(){this.focused=true;}});
  const launcher=node(), dialog=node(), close=node(), slot={children:[],append(n){this.children.push(n);}};
  dialog.dataset={vigilUrl:url};dialog.open=false;
  if(supported)dialog.showModal=()=>{dialog.open=true;};
  dialog.close=()=>{dialog.open=false;dialog.listeners.close();};
  dialog.querySelector=s=>s==='[data-vigil-close]'?close:slot;
  const document={querySelector:()=>launcher,getElementById:()=>dialog,createElement:()=>node()};
  vm.runInNewContext(source,{document});
  return {launcher,dialog,close,slot};
}
test('never creates an iframe before an explicit visitor click',()=>{
  const f=fixture();assert.equal(f.launcher.hidden,false);assert.equal(f.slot.children.length,0);
  f.launcher.listeners.click();assert.equal(f.slot.children.length,1);assert.equal(f.dialog.open,true);assert.equal(f.launcher.attrs['aria-expanded'],'true');
  const frame=f.slot.children[0];assert.equal(frame.src,'https://app.vigilcc.com/widget/'+'a'.repeat(32));assert.equal(frame.title,'NEXT3LABS website support chat');assert.equal(frame.referrerPolicy,'no-referrer');assert.equal(frame.attrs.sandbox,'allow-scripts allow-same-origin allow-forms');
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
