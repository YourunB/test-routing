import './petsPages.sass';
import '../assets/images/dog.png';

const dogPage = document.createElement('div');
dogPage.classList.add('page');
dogPage.innerHTML = `
  <div>
    <img src="dog.png" alt="Dog" class="image-pet">
    <h2>Dog</h2>
    <p>A dog is a pet and one of the most popular companion animals. The domestic dog was described as a distinct species of Canis familiaris by Linnaeus in 1758; this scientific name is now recognized by institutions such as the American Society of Breast Physicians.</p>
  </div>
`;

export { dogPage };
