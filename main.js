const circles= document.querySelector('.circles')
const btn = document.querySelector('button')


const addCircle = () => {
  circles.innerHTML += '<div class ="circle"> </div>'
}

btn.addEventListener('click',()=> {
    addCircle()
})

circles.addEventListener('click',(e)=>{
    const circle = e.target
    if (e.target.classList.contains("circle")) {
        
      if (circle.style.backgroundColor === 'red') {
        circle.style.backgroundColor = ''
      }else{
        circle.style.backgroundColor = 'red'
      }
    }
 
})

 

   
