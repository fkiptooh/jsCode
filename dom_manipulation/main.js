// Getting the DOM references
const listItem = document.getElementById('item-list');
const newInput = document.getElementById('new-item');
const addBtn = document.getElementById('add-button')

// Creating a function to add new item using the DOM Elements

const addNewItem =()=> {
    // 1.0 - Create a new item list for new shopping to be addde.
    
    // 1.1 Giving it an html attribute
    // 1.2 Assigning it a value from our html input field
    const newItem = document.createElement("li");
    newItem.textContent  = newInput.value;

    // 2.0 Create a delete button next to our newItem we added.

    // 2.1 Create the element which is a button.
    // 2.2 Give the button a name.
    // 2.3 Attached the button a listener, the type of event - click and create an external function to delete.
    // 2.4 Appended the delete button next to the new added shopping item.
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", deleteItem);
    newItem.appendChild(deleteBtn);

    // 3. Add the new item
    listItem.appendChild(newItem);

    // 4. Clear the html input field for new entry by assigning the value to an empty string.
    newInput.value = "";
}

// Create a deleteItem function that is attached to the deletebtn.
const deleteItem =(event)=>{
    const removeItem = event.target.parentNode;
    listItem.removeChild(removeItem);
}

// The button add functionality.
// Adding an event listener and passing the addNewItem function to it.
addBtn.addEventListener("click", addNewItem)
