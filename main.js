const buttons = document.querySelectorAll('button');
const answers = document.querySelectorAll('.answer');
const toggleDarkMode = document.querySelector('#toggle-dark-btn')
const body = document.querySelector('body');
const i = document.querySelector('i');
const ul = document.querySelector('.unorderedList');
const li = document.querySelector('li');
const input = document.querySelector('input');
const btn = document.querySelector('#addButton');

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

btn.addEventListener('click' , function(e){
    e.preventDefault();
    const newLI = document.createElement('li');

    newLI.textContent = input.value;
    ul.append(newLI);

})

