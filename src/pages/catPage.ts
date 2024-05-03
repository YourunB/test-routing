import './petsPages.sass';
import '../assets/images/cat.png';

const catPage = document.createElement('div');
catPage.classList.add('page');
catPage.innerHTML = `
  <img src="cat.png" alt="Cat" class="image-pet">
  <h2>Cat</h2>
  <p>A cat is a pet, one of the most popular “companion animals”. From the point of view of scientific taxonomy, the domestic cat is a member of the cat orders of predatory animals. Some researchers consider the domestic cat as a subspecies of the wild cat, others - as a separate biological species.</p>
`;

export { catPage };
