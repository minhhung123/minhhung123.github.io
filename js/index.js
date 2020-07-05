const IconLogo = document.querySelector('.icon_logo');
const SignOutButon = document.querySelector('#sign_out_button')
const userName = window.localStorage.getItem('userName') 

// display userName if it exists in localStorage
IconLogo.innerHTML = (userName) ? userName : '<a href="login.html"><span class="icon icon-person"></span></a>'  

// display sign_out_button if userName exists in localStorage
if(!userName || userName == '') {
    SignOutButon.style.display = 'none'
} 

// Sign out
const signOut = () => {
    // empty 'userName' in localStorage
    window.localStorage.setItem('userName','')
    // redirect to home page
    location.replace('index.html') 
} 
