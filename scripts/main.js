//All global Variables
const wrapper = document.querySelector('.wrapper');
const listDiv = document.querySelector('.list-div');
const ol = listDiv.querySelector('ol');
const addButton = document.querySelector('.add-button');
const listTitle = document.querySelector('h2');
const changeListTitleButton = document.querySelector('.list-name');
const titleInput = document.querySelector('.name-of-list-input');


//function creates remove, up, and down buttons with creation of each new list item
// takes in li as an argument saying to add these buttons to the li.
function createListButtons (li) {
  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  // removeButton.innerHTML ='<i class="fa">&#xf014;</i>';
  removeButton.textContent = 'X';
  // removeButton.textContent = '<i class="fa">&#xf014;</i>';
  li.appendChild(removeButton);

  const upButton = document.createElement('button');
  upButton.classList.add('up-button');
  upButton.textContent = 'Up';
  li.appendChild(upButton);

  const downButton = document.createElement('button');
  downButton.classList.add('down-button');
  downButton.textContent = 'Down';
  li.appendChild(downButton);

}


// whatever input field gets clicked, make place holder text dissaper.
  wrapper.addEventListener('click', (e) =>{
  if (e.target.className == 'name-of-list-input'){
    e.target.placeholder = '';

  } else if (e.target.className == 'list-items-input'){
      e.target.placeholder = '';
    }
});

//change title button lets you edit title
changeListTitleButton.addEventListener('click', () => {
   listTitle.contentEditable = true;
   listTitle.classList.toggle('list-name-focus');
});


//listens for click on targeted element.
//if target element is add button, then take the inputs value and append it to the OL as a list items
//if target element is remove button, remove the parent of target element (list item) from the OL
//if target element is upButton, move the parentNode (list item) before its previous element sibling but only if there is a previous element sibling
//if target element is downButton, move the parentNode (list item) before is next elements siblings next element. but only if there is a next element.
listDiv.addEventListener('click', (e) =>{

  if (e.target.className == 'add-button'){
      const li = document.createElement('li');
      const input = document.querySelector('.list-items-input');
      li.textContent = input.value;
      createListButtons(li);
      ol.appendChild(li);
      input.value = '';

  } else if (e.target.className == 'remove-button'){
    const deleteButton = e.target;
    const listItem = deleteButton.parentNode;
    const ul = listItem.parentNode;
    ul.removeChild(listItem);

  } else if (e.target.className == 'up-button'){
    const upButton = e.target;
    const liItem = upButton.parentNode;
    const prevSib = liItem.previousElementSibling;
      if (prevSib){
        ol.insertBefore(liItem, prevSib);
    }

  } else if (e.target.className == 'down-button'){
      const downButton = e.target;
      const liItem = downButton.parentNode;
      const nextSib = liItem.nextElementSibling;
      const nextNextSib = nextSib.nextElementSibling;
        if (nextSib){
          ol.insertBefore(liItem, nextNextSib);
    }
  }

});
