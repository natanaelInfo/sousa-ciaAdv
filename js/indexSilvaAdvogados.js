const menu1 = document.querySelectorAll('.menu');

const $navegacao = document.querySelector('.menu .navegacao');





/*menu ao ser escrolado muda de cor e fica fixo*/
const scrollMenu = document.querySelector('.navegacao');

window.addEventListener('scroll', scroolMenu, false);

function scroolMenu(){

   if( window.pageYOffset >=30){
      scrollMenu.classList.add('scroolPage');
   }else if(window.pageYOffset <30){
      scrollMenu.classList.remove('scroolPage');
   }
}
  


/*scrool suave */
const $navegacao1  = document.querySelectorAll('.navegacao a');



$navegacao1.forEach(item =>{
  
   item.addEventListener('click', scrollToId);

});

/**funcao */
function scrollToId(event){
  event.preventDefault();

   const element = event.target;
  

  const id = element.getAttribute('href');
  
  const to = document.querySelector(id).offsetTop;

  window.scroll({
   top:to,
   left:0,
   behavior: "smooth",


  });
}




/*sections aparecendo  do lado esquerdo  para a direita*/


const $main1 = document.querySelector('main');


const $area1Container = document.querySelectorAll('.conteiner .area1');
const $area2Container = document.querySelectorAll('.conteiner .area2');




window.addEventListener('scroll', scroolArea1, false);

function scroolArea1 (){
   if(window.pageYOffset > 400){
     /*Para area 1, enquanto area1 for menor do que a quantidade de containers,
     executar adicionar 1 a area1
     */
     for(let area1 = 0; area1 < $area1Container.length; area1++) {
       //selciona a div da lista e adiciona a classe
       $area1Container[area1].classList.add('showAreas');
     }
     
     //Mesmo da area1
     for(let area2 = 0; area2 < $area2Container.length; area2++) {
      $area2Container[area2].classList.add('showAreas');
     }
    
   }
}


/*funcao para o button aparecer ao scroll */
const $butao = document.querySelector('button');
const classTopo = document.querySelector('.btn-topo');




const $nossoPessoal = document.querySelector('.nosso-pessoal')//distancia que o botão tem que ser mostrado ao ser aproximado pelo scroll

window.addEventListener('scroll', scroolTopo, false);


function scroolTopo(){
     
  
   if(  window.pageYOffset > ( $nossoPessoal.offsetTop + 400)){
     
      $butao.classList.remove('btn-topo');
      $butao.classList.add('mostrarButton');
   }else if(window.pageYOffset < ( $nossoPessoal.offsetTop + 400)){
      $butao.classList.add('btn-topo');
      $butao.classList.remove('mostrarButton');
   }
}


/*funcao para voltar ao topo, evento click */

$butao.addEventListener('click', subirParaTopo, false);

function subirParaTopo(){

   window.scrollTo({
      top:50,
      left: 0,
      behavior: 'smooth'
   });

}






/*menu amburguer */

const $menu2 = document.querySelector('.menu .menu2');


$menu2.addEventListener('click', toogleMenu, false);

var isOpen = false;

function toogleMenu(){


   if(isOpen == false){
      $navegacao.classList.add('navegacao-open');
      isOpen = true;

      $menu2.firstElementChild.classList.add('close-btn');
   

   }else{
      $navegacao.classList.remove('navegacao-open');
      isOpen = false;

     // $amburguer.classList.remove('close-btn');

      $menu2.firstElementChild.classList.remove('close-btn');
   }

}



//no responsivo 480px scrool ao passar de 50px o menu mobili desaparece */

window.addEventListener('scroll', mobiliDesaparece, false);

function mobiliDesaparece(){
   if (window.pageYOffset > 50) {
      
      $navegacao.classList.remove('navegacao-open'); //removo a classe 
      $navegacao.classList.add('navegacao'); //adiciono

      $menu2.firstElementChild.classList.remove('close-btn');//removo a classe close btn e botão fica normal
   
   
   }
}