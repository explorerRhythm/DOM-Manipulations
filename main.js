const buttons = document.querySelectorAll('button');
const answers = document.querySelectorAll('.answer');
const toggleDarkMode = document.querySelector('#toggle-dark-btn')
const body = document.querySelector('body');
const i = document.querySelector('i');
buttons.forEach((btn , index)=>{
    btn.addEventListener('click' , ()=>{
        const answer = answers[index];
        if(answer.style.display === 'block'){
            answer.style.display = 'none';
        }else{ 
            answer.style.display = 'block'
        }
    });
});
toggleDarkMode.addEventListener('click' , ()=>{
    if (body.style.backgroundColor === 'grey'){
        body.style.backgroundColor = 'white';
        i.classList.remove ('fa-moon');
        i.classList.add('fa-sun');

    }else{
        body.style.backgroundColor ='grey';
        i.classList.remove('fa-sun');
        i.classList.add('fa-moon');
    };
});