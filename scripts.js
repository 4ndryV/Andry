const toggle = document.querySelector('.toggle')
const sidebar = document.querySelector('.side-bar')
const conteudo = document.querySelector('.conteudo')
const background = document.querySelector('.background')

toggle.addEventListener('click', () =>{
    sidebar.classList.toggle('ativo')
    toggle.classList.toggle('ativo')
    conteudo.classList.toggle('ativo')
    background.classList.toggle('ativo')
    document.body.style.backgroundColor = sidebar.classList.contains('ativo') ? '#34495e' : '#ecf0f1'
})

background.addEventListener('click', () =>{
    sidebar.classList.remove('ativo')
    toggle.classList.remove('ativo')
    conteudo.classList.remove('ativo')
    background.classList.remove('ativo')
    document.body.style.backgroundColor = '#ecf0f1'
})