
let btnAdd = document.querySelector('#btn-add');              //Add button
let main = document.querySelector('main')                   //todo-items-box

btnAdd.addEventListener('click',()=>{
    //Adding items in list 
    let input = document.querySelector('#todo-input');       //input item
    //creating div for pushing to list
    let div = document.createElement('div')
    div.className = 'div-list';
    //creating h4 to add in div
    let h4 = document.createElement('h4')
    h4.className = 'list-item';
    h4.appendChild(document.createTextNode(input.value));
    //creating button to push in div
    let button = document.createElement('button')
    button.appendChild(document.createTextNode('Remove'))
    button.className = 'remove-btns'

    div.append(h4,button)         //pushing button and h4 in div
    if(input.value.length > 0){         // if input text is grater than 1
        main.append(div)               // so push the div into list
        input.value = '';             // & do the input null  
    }


    // for remove button 
    let nodeList = document.querySelectorAll('.remove-btns') //remove 1 buuton
    nodeList.forEach((item)=>{
        item.addEventListener('click',()=>{
            item.parentElement.style.display = 'none';
        })
    })
});


