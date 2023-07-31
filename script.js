let TodoList = document.getElementById('TodoList');
let TodoButton = document.getElementById('TodoButton');

TodoButton.addEventListener('click', function() {
  if(TodoList.value == '') {
    alert("List Tidak boleh kosong");
  } else {
    let TodoContainer = document.querySelector('.list-group');
    let TodoHtml = TodoContainer.innerHTML;
    TodoHtml += `<li class="list-group-item d-flex justify-content-between">
                    <div><input class="form-check-input me-1" type="checkbox">
                    <label class="form-check-label" for="firstCheckbox">${TodoList.value}</label></div>
                    <button class="badge border-0 bg-danger ButtonHapus id='ButtonHapus'">X</button>
                </li>`;
    TodoContainer.innerHTML = TodoHtml
    TodoList.value = '';
    TodoList.focus();

    let checkTodo = document.querySelectorAll('.form-check-input');
    for(let i = 0; i < checkTodo.length; i++) {
      let input = checkTodo[i];
      input.addEventListener('change', function() {
        let TodoLabel = input.nextElementSibling;
        TodoLabel.classList.toggle('text-decoration-line-through')
      })
    }
    let ButtonHapus = document.querySelectorAll('.ButtonHapus');
    for (let j = 0; j < ButtonHapus.length; j++) {
      let hapus = ButtonHapus[j];
      hapus.addEventListener('click', function() {
        this.parentElement.remove();
      })
    }
  }
})
