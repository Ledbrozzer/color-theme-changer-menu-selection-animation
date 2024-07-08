const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
});

function animar(){
    const btn = document.getElementById('btn-menu')
    btn.classList.toggle('ativar')
};