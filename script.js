let first_name = document.getElementById('first-name-id');
let last_name = document.getElementById('last-name-id');
let email = document.getElementById('email-id');
let password = document.getElementById('password-id');
let button = document.getElementById('submit-id');

button.addEventListener('click',(e)=>{
  e.preventDefault();
  checking();
})

const checking = ()=>{
  document.getElementById('first-error-id').style.display = "none";
  document.getElementById('second-error-id').style.display = "none";
  document.getElementById('fourth-error-id').style.display = "none";

  let check = "";

  if(first_name.value===""){
    document.getElementById('first-error-id').style.display = "block";
    document.getElementById('error-id1').style.display = "block";
    check = "true";
  }
  else{
    document.getElementById('error-id1').style.display = "none";
  }
  
  if(last_name.value===""){
    document.getElementById('second-error-id').style.display = "block";
    document.getElementById('error-id2').style.display = "block";
    check = "true";
  }
  else{
    document.getElementById('error-id2').style.display = "none";
  }

  if(email.value===""){
    document.getElementById('third-error-id').style.display = "block";
    document.getElementById('error-id3').style.display = "block";
    check = "true";
  }
  else if(email.value.endsWith(".com") && email.value.includes("@")){
    document.getElementById('third-error-id').style.display = "none";
    document.getElementById('error-id3').style.display = "none";
  }
  else {
    document.getElementById('third-error-id').style.display = "block";
    document.getElementById('error-id3').style.display = "block";
    check = "true";
  }
  if(password.value===""){
    document.getElementById('fourth-error-id').style.display = "block";
    document.getElementById('error-id4').style.display = "block";
    check = "true";
  }
  else{
    document.getElementById('error-id4').style.display = "none";
  }

  if(check===""){
    document.getElementById('form-id').reset();
    document.getElementById('error-id1').style.display = "none";
    document.getElementById('error-id2').style.display = "none";
    document.getElementById('error-id3').style.display = "none";
    document.getElementById('error-id4').style.display = "none";
  }
}
