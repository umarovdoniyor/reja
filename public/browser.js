console.log('FrontEnd JS ishga tushdi');

function itemTemplate(item) {
  return `
            <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja}</span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn-secondary btn-sm mr-1"
            >
              O'zgartirish
            </button>
            <button
              data-id="${item._id}"
              class="delete-me btn btn-danger btn-sm"
            >
              O'chirish
            </button>
          </div>
        </li>
  `;
}

let createField = document.getElementById('create-field');
document.getElementById('create-form').addEventListener('submit', (e) => {
  e.preventDefault();

  axios
    .post('/create-item', { reja: createField.value })
    .then((response) => {
      document
        .getElementById('item-list')
        .insertAdjacentHTML('beforeend', itemTemplate(response.data));
      createField.value = '';
      createField.focus();
    })
    .catch((err) => {
      console.log('Iltimos qaytadan harakat qiling!');
    });
});

document.addEventListener('click', (e) => {
  // delete operation
  if (e.target.classList.contains('delete-me')) {
    // console.log('delete-me button triggered');
    console.log('target: ', e.target);
    if (confirm('Aniq ochirmoqchimisiz?')) {
      axios
        .post('/delete-item', { id: e.target.getAttribute('data-id') })
        .then((response) => {
          console.log('res.data: ', response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log('Iltimos qaytadan harakat qiling!');
        });
    }
  }

  // edit operation
  if (e.target.classList.contains('edit-me')) {
    let promptPlaceholder =
      e.target.parentElement.parentElement.querySelector(
        '.item-text'
      ).innerHTML;
    let userInput = prompt("O'zgartirish kiriting", promptPlaceholder);
    if (userInput) {
      console.log('userInput: ', userInput);
      axios
        .post('/edit-item', {
          id: e.target.getAttribute('data-id'),
          new_input: userInput,
        })
        .then((response) => {
          console.log('response.data: ', response.data);
          e.target.parentElement.parentElement.querySelector(
            '.item-text'
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log('Iltimos qaytadan harakat qiling!');
        });
    }
  }
});

document.getElementById('clean-all').addEventListener('click', function () {
  axios.post('/delete-all', { delete_all: true }).then((response) => {
    alert(response.data.state);
    document.location.reload();
  });
});
