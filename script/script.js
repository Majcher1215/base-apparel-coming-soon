const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  
const validate = () => {
    const result = document.getElementById('email-validation');
    const email = document.getElementById('email').value;
    const border = document.getElementById('email');
    const errorIcon = document.getElementById('error')

    if(validateEmail(email)){
      border.style.border = "1px solid var(--primary-1)";
      result.innerHTML = "";
      errorIcon.style.display = "none";
    } else{
      border.style.border = "2px solid red";
      errorIcon.style.display = "block";
      result.innerHTML = 'Please provide a valid email';
    }
    return false;
}