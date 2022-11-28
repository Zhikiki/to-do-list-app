// eventListener is already integrated in index.html and connected with
// Add button id="button"
// we create function that will add to a list value of input

function newItem() {
  // alert('hello');
  let toDoList = $('#list'); // alternative document.querySelector for ordered list
  let toDoListItem = $('<li></li>');

  // We put li to ordered list
  let userInputValue = $('#input').val();

  if (userInputValue === '') {
    return alert('You must write something!');
  } else {
    toDoList.append(toDoListItem);
  }

  toDoListItem.append(userInputValue);

  toDoListItem.on('dblclick', function () {
    toDoListItem.toggleClass('strike');
  });

  let deleteItemButton = $('<crossOutButton></crossOutButton>');
  deleteItemButton.append(document.createTextNode('X'));
  toDoListItem.append(deleteItemButton);
  deleteItemButton.on('click', function () {
    toDoListItem.addClass('delete');
  });

  toDoList.sortable();

  // How to remove the value of input after user pressed "Add"
}

$('#form').on('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    newItem();
  }
});
