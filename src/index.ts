import './index.sass';

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

document.body.append(header, main, footer);
