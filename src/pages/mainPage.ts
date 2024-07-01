import './petsPages.sass';

const mainPage = document.createElement('div');
mainPage.classList.add('page');
mainPage.innerHTML = `
  <div>
    <h1>Test routing in SPA</h1>
    <p>This application was created by <a href="https://github.com/yourunb">Yury Butskevich</a> for educational purposes, in order to understand and figure out how to implement routing in a single-page application using the github server.</p>
  </div>
`;

export { mainPage };
