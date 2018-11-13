const wrapper = document.querySelector('.wrapper');
const listDiv = document.querySelector('.list-div');
const ol = listDiv.querySelector('ol');
const addButton = document.querySelector('.add-button');
const listTitle = document.querySelector('h2');
const changeListTitleButton = document.querySelector('.list-name');
const titleInput = document.querySelector('.name-of-list-input');


//function creates remove, up, and down buttons with creation of each new list item
function createListButtons (li) {
  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.textContent = 'Remove';
  li.appendChild(removeButton);

}


// whatever input field gets clicked, make place holder text dissaper.
  wrapper.addEventListener('click', (e) =>{
  if (e.target.className == 'name-of-list-input'){
    e.target.placeholder = '';

  } else if (e.target.className == 'list-items-input'){
      e.target.placeholder = '';
    }
});

//displays text field and changes button text for the change list title section
changeListTitleButton.addEventListener('click', () => {
  if (titleInput.style.display = 'none'){
      titleInput.style.display = 'inline-block';
      changeListTitleButton.textContent = 'Change';
      changeListTitleButton.style.backgroundColor = '#dc6868';
      listTitle.textContent = titleInput.value;
      titleInput.value = '';

    }
});


//// event for add button to append a list item to the invisable unordered list.
//addButton.addEventListener('click', ()=>{
//  const li = document.createElement('li');
//  const input = document.querySelector('.list-items-input');
//  li.textContent = input.value;
//  createListButtons(li);
//  ol.appendChild(li);
//  input.value = '';
//});

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
  }
});
