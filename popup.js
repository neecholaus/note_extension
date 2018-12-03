let name = document.getElementById('note-name');
let text = document.getElementById('note-body');
let button = document.getElementById('note-save');


button.addEventListener('click', function () {
    let note = text.value;
    let empty = note.replace(/\s/g, '') == '';

    if (empty) return;

    let a = document.createElement('a');
    let data = new Blob([note], { type: 'text/plain' });
    let file = window.URL.createObjectURL(data);

    // Use given file name before the default 'Note'
    a.download = name.value.replace(/\s/g, '') ? name.value : "New Note";
    a.href = file;
    a.click();
});
