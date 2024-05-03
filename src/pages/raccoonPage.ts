import './petsPages.sass';
import '../assets/images/raccoon.png';

const raccoonPage = document.createElement('div');
raccoonPage.classList.add('page');
raccoonPage.innerHTML = `
  <div>
    <img src="raccoon.png" alt="Raccoon" class="image-pet">
    <h2>Raccoon</h2>
    <p>Raccoons are very freedom-loving animals. If you want to keep him as a pet, you will have to allocate a separate room for him. Raccoons also require 4-6 hours of attention per day, otherwise they will begin to destroy your home at night.    </p>
  </div>
`;

export { raccoonPage };
