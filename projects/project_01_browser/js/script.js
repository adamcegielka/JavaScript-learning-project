const search = document.querySelector('.search');
const li = document.querySelectorAll('li');

const searchEngine = (e) => {
  const text = e.target.value.toLowerCase();

  li.forEach((item) => {
    const listItem = item;
    if (listItem.textContent.toLowerCase().indexOf(text) !== -1) {
      listItem.style.display = 'block';
    } else {
      listItem.style.display = 'none';
    }
  });
};

search.addEventListener('keyup', searchEngine);
