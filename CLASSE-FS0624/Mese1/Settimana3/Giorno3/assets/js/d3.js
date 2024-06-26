//task si aggiunge anche se premo invio sulla tastiera
const myList= document.getElementById('myList');
const insertItem= document.getElementById('insertItem');
const btnInsert = document.getElementById('btnInsert');
const pList= document.getElementById('list');
const listItem = [];

btnInsert.addEventListener('click', function(e){
    e.preventDefault();
    if (!chekInput()) return;
    populateArray();
    printList();
    barra();
    myList.reset();
    
    //lineItem();
    
});

function chekInput(){
    if (insertItem.value === ''){
        return false;
    } else {
        return true;
    }
};

function populateArray(){
    listItem.push(insertItem.value);
    console.log(listItem);
};

function printList(){
    pList.innerHTML = '';
    for (let i = 0; i < listItem.length; i++) {
        let newP = document.createElement('p');
        newP.classList.add('pippo');
        newP.innerText = listItem[i];
        let btnDelete= document.createElement ('button');
        btnDelete.setAttribute('type', 'button');
        btnDelete.setAttribute('onclick', `deleteItem(${i});`);
        btnDelete.innerText ='✔';
        newP.appendChild(btnDelete);
        pList.appendChild(newP);
    }
};
function barra(){
    let taskAdded= document.querySelectorAll('.pippo');
    for (let i = 0; i <taskAdded.length; i++){
       taskAdded[i].addEventListener('click', function(){
           this.classList.toggle('underline');
       })
    }
};

//pList.addEventListener('click', function(){
    //pList.classList.add('underline');
//})

function deleteItem (item) {
    listItem.splice(item, 1);
    printList();
}
