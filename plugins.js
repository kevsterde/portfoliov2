
let width = 380;
let height = 534;

let xPercentage2 ;
let yPercentage2;
    
let hoverList = document.querySelectorAll('.hover');
let overlayList = document.querySelectorAll('.overlay section');
let overlay = document.getElementById('overlay');

let overlay_close = document.getElementById('overlay_close');

overlay_close.addEventListener('click', function(){
    overlay.classList.remove("show");
    overlayList.forEach(item=>{
        item.classList.remove("active");
    })
})



console.log(overlayList);


   
    hoverList.forEach(el => {
        el.addEventListener('mousemove' , function(e){

   
            xPercentage2 = e.layerX/el.getBoundingClientRect().width * 100 ; 
            yPercentage2 = e.layerY/el.getBoundingClientRect().height * 100 ;
   
          this.children[1].style.clipPath = `circle(110% at ${xPercentage2}% ${yPercentage2}%)`
          this.children[1].style.opacity = `1`;
   
       })
    });
    
    hoverList.forEach(el=>{
    
        el.addEventListener('click' , function(e){
                
            overlay.classList.add("show");
            
            console.log(this.id); 
            let current = document.getElementById(`${this.id}_holder`);
            current.classList.add("active");


         })



        el.addEventListener('mouseleave' , function(){


            this.children[1].style.clipPath = `circle(0% at ${xPercentage2}% ${yPercentage2}%)`
     
     
         })


       


    })
        
