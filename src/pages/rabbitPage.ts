import './petsPages.sass';
import '../assets/images/rabbit.png';

const rabbitPage = document.createElement('div');
rabbitPage.classList.add('page');
rabbitPage.innerHTML = `
  <div>
    <img src="rabbit.png" alt="Rabbit" class="image-pet">
    <h2>Rabbit</h2>
    <p>The domestic rabbit is a descendant of the wild rabbit, native to Western Europe and North Africa. Rabbits live in groups and reproduce very quickly. - Rabbits are herbivores and feed most actively at dusk or at night.</p>
  </div>
`;

export { rabbitPage };
