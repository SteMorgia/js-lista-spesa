const listaSpesa = ['acqua', 'pane', 'biscotti', 'verdura', 'uova'];
let i = 0;
const lista = document.getElementById('lista');
while (i < listaSpesa.length) {
    lista.innerHTML += `<li>${listaSpesa[i]}</li>`
    i++
} 