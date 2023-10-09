function handleSubmit() 
{
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
  

    //store the values in the local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    //Retrive the value
    const showEmail = localStorage.getItem('email'); 
    const showPassword = localStorage.getItem('password');
}