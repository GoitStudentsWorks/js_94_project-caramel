import Pagination from 'tui-pagination';
import { displayProducts } from './products';
import { getProductsByParams } from './get-api';
import { saveData } from './STORAGE';

const paginationContainer = document.querySelector('#pagination');
const productsList = document.querySelector('.list-prod-container');
const filterNomatches = document.querySelector('.filter-nomatches-container');
const FIRST_SET = 'firstset';

newDisplayPagination('first', 'get');

export async function newDisplayPagination(options) {
  const { keyword, category } = options;

  const paginationSearchParams = {
    keyword: keyword || '',
    category: category || '',
    page: 1,
    limit: 9,
  };

  if (window.matchMedia('(max-width: 375px)').matches) {
    paginationSearchParams.limit = 6;
  } else if (
    window.matchMedia('(min-width: 768px) and (max-width: 900px)').matches
  ) {
    paginationSearchParams.limit = 8;
  }
  const { results, totalPages } = await getProductsByParams(
    paginationSearchParams
  );

  if (totalPages === 0) {
    productsList.classList.add('visually-hidden');
    filterNomatches.classList.remove('visually-hidden');
    paginationContainer.classList.add('visually-hidden');
  }

  saveData(FIRST_SET, results);


  displayProducts(results);

  if (totalPages >= 1) {

    productsList.classList.remove('visually-hidden');
    paginationContainer.classList.remove('visually-hidden');
    filterNomatches.classList.add('visually-hidden');

    const optionsP = {
      totalItems: results.length * totalPages,
      itemsPerPage: paginationSearchParams.limit,
      visiblePages: 5,
      page: paginationSearchParams.page,
      centerAlign: true,
      usageStatistics: false,
    };

    if (window.matchMedia('(max-width: 767px)').matches) {
      optionsP.visiblePages = 3;
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      optionsP.visiblePages = 5;
    }

    const pagination = new Pagination(paginationContainer, optionsP);

    pagination.on('afterMove', async e => {
      paginationSearchParams.page = e.page;
      const { results } = await getProductsByParams(paginationSearchParams);
      saveData(FIRST_SET, results);
      displayProducts(results);
    });
  }
  return;
}
