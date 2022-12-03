function newItem() {
  let t = $('#list'),
    e = $('<li></li>'),
    n = $('#input').val();
  if ('' === n) return alert('You must write something!');
  t.append(e),
    e.append(n),
    $('#input').val(''),
    e.on('dblclick', function () {
      e.toggleClass('strike');
    });
  let o = $('<crossOutButton></crossOutButton>');
  o.append(document.createTextNode('X')),
    e.append(o),
    o.on('click', function () {
      e.addClass('delete');
    }),
    t.sortable();
}
$('#form').on('keydown', function (t) {
  'Enter' === t.key && (t.preventDefault(), newItem());
});
