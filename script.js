let toggleBtn=document.getElementById('toggle-btn');
let body=document.body;
let darkmode=localStorage.getItem('dark-mode');

const enableDarkMode=()=>{
    toggleBtn.classList.replace('fa-sun','fa-moon');
    body.classList.add('dark');
    localStorage.setItem('dark-mode','enabled');
}
const disableDarkMode=()=>{
    toggleBtn.classList.replace('fa-moon','fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode','disabled');
}
if(darkmode==='enabled'){
    enableDarkMode();
}
toggleBtn.onclick=(e)=>{
    darkmode=localStorage.getItem('dark-mode');
    if(darkmode==='disabled'){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
}