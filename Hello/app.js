(function() {
    
     const buttons=document.querySelectorAll('.btn')
    //console.log(x)
    const m=document.querySelectorAll('.store-item')
    //console.log(m)//


    buttons.forEach((button)=>{
        button.addEventListener('click',(e)=>{
            e.preventDefault()
            const filter=e.target.dataset.filter

            m.forEach((item)=>{
                if(filter==='all'){
                    item.style.display='block'
                 }else {
                    if (item.classList.contains(filter)) {
                        item.style.display='block'  
                   }
                    else{
                     item.style.display='none'
                }
                }
            })
        })
    })
})
();
