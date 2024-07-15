

let listaElemento = document.querySelector("#app ul");
let input = document.querySelector("#app input");
let button = document.querySelector("#app button");
let guarda = JSON.parse(localStorage.getItem("@lista")) || [] ;


function adicionar(){
if(input.value === ''){
    alert("Adicione alguma tarefa")
    return false;
}else{
    guarda.push(input.value);
    input.value = '';
    mostraLista();
    salva();
}

}
function mostraLista(){
 listaElemento.innerHTML = "";
 guarda.map((todos)=>{
   let li = document.createElement("li")
   let texto = document.createTextNode(todos)
    let excluir = document.createElement("a")
    let textoex = document.createTextNode("Excluir")
    excluir.setAttribute("href", "#")
    excluir.appendChild(textoex)
    let posicao = guarda.indexOf(todos);
    excluir.setAttribute("onclick",`excluir(${posicao})`)
   li.appendChild(texto);
   li.appendChild(excluir);
   listaElemento.appendChild(li)

 })

}
mostraLista();
function excluir(posi){
guarda.splice(posi,1)
mostraLista();
salva();

}

function salva(){
localStorage.setItem("@lista", JSON.stringify(guarda))

}





button.onclick = adicionar;
