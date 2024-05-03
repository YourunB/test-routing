import './index.sass';
//import { catPage } from './pages/catPage';
//import { dogPage } from './pages/dogPage';
import { hamsterPage } from './pages/hamsterPage';

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

main.append(hamsterPage);

footer.innerHTML = `
  <span>2024</span>
  <a href="https://github.com/yourunb">&copy; Yury Butskevich</a>
`;

document.body.append(header, main, footer);
