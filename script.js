console.log("debut de script");

for(var i=0; i<document.getElementsByClassName('trash').length; i++) {

  document.getElementsByClassName('trash')[i].addEventListener("click",
   function(){

    console.log('clique detecter');
   }
  );

}
console.log("fin de script");
