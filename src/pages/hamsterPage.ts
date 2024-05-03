import './petsPages.sass';
import '../assets/images/hamster.png';

const hamsterPage = document.createElement('div');
hamsterPage.classList.add('page');
hamsterPage.innerHTML = `
  <div>
    <img src="hamster.png" alt="Hamster" class="image-pet">
    <h2>Hamster</h2>
    <p>Hamsters are a subfamily of rodents of the hamster family. Includes 19 species belonging to seven genera. They have become popular pets. The most famous type of hamster is the golden or Syrian hamster, which is most often used as pets.</p>
  </div>
`;

export { hamsterPage };
