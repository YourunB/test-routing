import './index.sass';
import { catPage } from './pages/catPage';
import { dogPage } from './pages/dogPage';
import { hamsterPage } from './pages/hamsterPage';
import { rabbitPage } from './pages/rabbitPage';
import { raccoonPage } from './pages/raccoonPage';
import { mainPage } from './pages/mainPage';

const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');

header.innerHTML = `
  <ul class="menu">
    <li class="menu__item">Main</li>
    <li class="menu__item">Cat</li>
    <li class="menu__item">Dog</li>
    <li class="menu__item">Hamster</li>
    <li class="menu__item">Rabbit</li>
    <li class="menu__item">Raccoon</li>
  </ul>
`;

footer.innerHTML = `
  <span>2024</span>
  <a href="https://github.com/yourunb">&copy; Yury Butskevich</a>
`;

document.body.append(header, main, footer);

type Route = {
  path: string;
  handler: () => void;
};

class Router {
  private routes: Route[] = [];

  constructor() {
    window.addEventListener('popstate', () => {
      this.route(window.location.pathname);
    });
  }

  addRoute(route: Route) {
    this.routes.push(route);
  }

  route(pathname: string) {
    for (const route of this.routes) {
      if (route.path === pathname) {
        window.history.pushState({}, '', pathname);
        route.handler();
        return;
      }
    }
    console.log(`No handler found for ${pathname}`);
  }
}

const router = new Router();

router.addRoute({
  path: '/test-routing/',
  handler: () => {
    main.innerHTML = '';
    main.append(mainPage);
  },
});

router.addRoute({
  path: '/test-routing/cat',
  handler: () => {
    main.innerHTML = '';
    main.append(catPage);
  },
});

router.addRoute({
  path: '/test-routing/dog',
  handler: () => {
    main.innerHTML = '';
    main.append(dogPage);
  },
});

router.addRoute({
  path: '/test-routing/hamster',
  handler: () => {
    main.innerHTML = '';
    main.append(hamsterPage);
  },
});

router.addRoute({
  path: '/test-routing/rabbit',
  handler: () => {
    main.innerHTML = '';
    main.append(rabbitPage);
  },
});

router.addRoute({
  path: '/test-routing/raccoon',
  handler: () => {
    main.innerHTML = '';
    main.append(raccoonPage);
  },
});

const menuItems = document.getElementsByClassName('menu__item');
menuItems[0].addEventListener('click', () => {
  router.route('/test-routing/');
});
menuItems[1].addEventListener('click', () => {
  router.route('/test-routing/cat');
});
menuItems[2].addEventListener('click', () => {
  router.route('/test-routing/dog');
});
menuItems[3].addEventListener('click', () => {
  router.route('/test-routing/hamster');
});
menuItems[4].addEventListener('click', () => {
  router.route('/test-routing/rabbit');
});
menuItems[5].addEventListener('click', () => {
  router.route('/test-routing/raccoon');
});
