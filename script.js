const navToggle=document.querySelector('.nav-toggle');const navMenu=document.querySelector('.nav-menu');
navToggle?.addEventListener('click',()=>{const open=navMenu.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open));navToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
document.querySelectorAll('.nav-menu a')
.forEach(a=>a.addEventListener('click',()=>{navMenu.classList.remove('open');navToggle?.setAttribute('aria-expanded','false')}));
document.getElementById('year')
.textContent=new Date().getFullYear();
const form=document.getElementById('contact-form');
const status=document.getElementById('form-status');
function setError(field,message){document.querySelector(`[data-error-for="${field.name}"]`)
.textContent=message;field.setAttribute('aria-invalid',message?'true':'false')}
form.addEventListener('submit',e=>{e.preventDefault();let valid=true;const data=new FormData(form);
const name=form.name,email=form.email,message=form.message;setError(name,'');setError(email,'');
setError(message,'');
if(name.value.trim().length<2){setError(name,'Please enter your name.');valid=false}if(!email.validity.valid){setError(email,'Please enter a valid email address.');valid=false}if(message.value.trim().length<10){setError(message,'Message must be at least 10 characters.');valid=false}if(!valid){status.textContent='Please correct the highlighted fields.';return}const subject=encodeURIComponent(`Portfolio enquiry from ${name.value.trim()}`);const body=encodeURIComponent(`Name: ${name.value.trim()}\nEmail: ${email.value.trim()}\n\n${message.value.trim()}`);localStorage.setItem('lastContactMessage',JSON.stringify({name:name.value.trim(),email:email.value.trim(),message:message.value.trim(),savedAt:new Date().toISOString()}));status.textContent='Validation passed. Your email app will open with the message ready to send.';window.location.href=`mailto:benedictabaidoo983@gmail.com?subject=${subject}&body=${body}`;form.reset()});
