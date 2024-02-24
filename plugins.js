
let width = 380;
let height = 534;

let xPercentage2 ;
let yPercentage2;
    
let hoverList = document.querySelectorAll('.hover');
    
    console.log(hoverList);
    console.log(hoverList[0].getBoundingClientRect().width)
   
    hoverList.forEach(el => {
        el.addEventListener('mousemove' , function(e){

   
            xPercentage2 = e.layerX/el.getBoundingClientRect().width * 100 ; 
            yPercentage2 = e.layerY/el.getBoundingClientRect().height * 100 ;
   
          this.children[1].style.clipPath = `circle(82% at ${xPercentage2}% ${yPercentage2}%)`
          this.children[1].style.opacity = `1`;
   
       })
    });
    
    hoverList.forEach(el=>{

        el.addEventListener('mouseleave' , function(){


            this.children[1].style.clipPath = `circle(0% at ${xPercentage2}% ${yPercentage2}%)`
     
     
         })
    })
        
