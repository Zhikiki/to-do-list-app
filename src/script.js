function newItem() {
  let toDoList = $('#list');
  let toDoListItem = $('<li></li>');
  let userInputValue = $('#input').val();

  if (userInputValue === '') {
    return alert('You must write something!');
  } else {
    toDoList.append(toDoListItem);
  }

  toDoListItem.append(userInputValue);

  $('#input').val('');

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
}

$('#form').on('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    newItem();
  }
});
