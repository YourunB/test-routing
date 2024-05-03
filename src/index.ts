import './index.sass';
import { catPage } from './pages/catPage';

const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');

header.innerHTML = `
  <ul>
    <li><a href="">Main</a></li>
    <li><a href="">Cat</a></li>
    <li><a href="">Dog</a></li>
    <li><a href="">Hamster</a></li>
    <li><a href="">Rabbit</a></li>
    <li><a href="">Raccoon</a></li>
  </ul>
`;

main.append(catPage);

footer.innerHTML = `
  <span>2024</span>
  <a href="https://github.com/yourunb">&copy; Yury Butskevich</a>
`;

document.body.append(header, main, footer);
