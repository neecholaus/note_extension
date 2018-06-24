let text = document.getElementById('text');
let button = document.getElementById('button');


button.addEventListener('click', function() {
  let note = text.value;

  let a = document.createElement('a');

  let data = new Blob([note], {type: 'text/plain'});

  let file = window.URL.createObjectURL(data);

  a.download = "Note";

  a.href = file;

  a.click();
});
