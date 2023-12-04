const pwd = document.getElementById('password');
const confirmPwd = document.getElementById('confirm-password');
const span = document.getElementById('confirm-password-span');
const submit = document.getElementById('submit');

confirmPwd.addEventListener('input', (e) => {  
  if(e.target.value === pwd.value) {
    e.target.style.border = "3px solid green";
    span.innerText = "✓";
    span.setAttribute('style', 'position: absolute; right: -25px; top: 30px; color: rgb(0, 119, 0); font-size: 1.4rem;');
    submit.removeAttribute("disabled");
  } else if (e.target.value !== pwd.value) {
    e.target.style.border = "3px solid red";
    span.innerText = "✖";
    span.setAttribute('style', 'position: absolute; right: -25px; top: 30px; color: red; font-size: 1.2rem;');
    submit.setAttribute("disabled", "");
  }
})

/*
position: absolute;
  right: -25px;
  top: 30px;
  content: "✖";
  color: red;
  font-size: 1.2rem;
*/

