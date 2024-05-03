import './petsPages.sass';

const catPage = document.createElement('div');
catPage.classList.add('page');
catPage.innerHTML = `
  <h2>Cat</h2>
  <img src="./assets/cat.png" alt="Cat">
  <p>A cat is a pet, one of the most popular “companion animals”. From the point of view of scientific taxonomy, the domestic cat is a member of the cat orders of predatory animals. Some researchers consider the domestic cat as a subspecies of the wild cat, others - as a separate biological species.</p>
`;