import './notFoundPage.sass';

const notFoundPage = document.createElement('div');
notFoundPage.classList.add('page-404');
notFoundPage.innerHTML = `
  <h2 class="page-404__title">404</h2>
  <p class="page-404__description">This Page Not Found</p>
`;

export { notFoundPage };
