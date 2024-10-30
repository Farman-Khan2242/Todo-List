
let btnAdd = document.querySelector('#btn-add');              //Add button
let main = document.querySelector('main')                   //todo-items-box

btnAdd.addEventListener('click',()=>{
    //Adding items in list 
    let input = document.querySelector('#todo-input'); 
    if(input.value.length > 0){
        main.innerHTML += `<div class='div-list'>
            <h4 class='list-item'>${input.value}</h4> <button id='remove-btn' class='remove-btns'>Remove</button> </div>`
        input.value = '';
    }


    // for remove button 
    let nodeList = document.querySelectorAll('.remove-btns') //remove 1 buuton
    nodeList.forEach((item)=>{
        item.addEventListener('click',()=>{
            item.parentElement.style.display = 'none';
        })
    })
});


