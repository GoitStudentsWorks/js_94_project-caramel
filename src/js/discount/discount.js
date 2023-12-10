import { getProducts } from '../get-api';
import { getData, saveData } from './api/storage';
import { createMarkup } from './markup-discount';

let products = [];
const productEl = document.querySelector('.products-discount');

async function onLoad() {
  const response = await getProducts();

  products = response.slice(0, 2);

  const items = getData();

  const idProducts = getIdProducts(items);

  const markup = createMarkup(products, idProducts);

  addMarkup(markup);
}
onLoad();

function addMarkup(markup) {
  productEl.insertAdjacentHTML('beforeend', markup);
}

productEl.addEventListener('click', onClick);

function onClick(event) {
  const btnEl = event.target.closest('.card-product-btn');
  if (!btnEl) {
    return;
  }
  const cardEl = event.target.closest('.card-product-discount');

  const icons = btnEl.querySelectorAll('svg');

  const id = cardEl.dataset.id;

  //   console.log(data);
  const items = getData();
  if (items.find(item => id === item._id)) {
    saveData(items.filter(item => id !== item._id));
  } else {
    const data = products.find(item => id === item._id);
    items.push(data);
    saveData(items);
  }

  icons.forEach(element => {
    element.classList.toggle('is-hidden');
  });
}

function getIdProducts(items = []) {
  return items.map(item => item._id);
}
