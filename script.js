/*buscando a lista de um array usando for*/
let msg=document.getElementById('msg')

const usuarios=[
    {nome: "Huguinho" , idade:18},
    {nome: "Zezinho" , idade:19},
    {nome: "Luixinho" , idade:20},
];

const Users =usuarios.length;

for (let i=0; i<Users; i++){
    msg.innerHTML += `<p>${usuarios[i].nome} ${usuarios[i].idade}</p>`

}

/*criando um array de imagem*/
var imagens=[
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
];

/*declarando variavel*/
var Index=0;
var time =2000;

/*criando uma função*/
function slideShow(){
    document.getElementById('image').src =imagens[Index];
    Index++;

    if (Index == imagens.length)(Index =0);
    setTimeout("slideShow()",time);
}

slideShow();