import './index.sass';
import { catPage } from './pages/catPage';
import { dogPage } from './pages/dogPage';
//import { hamsterPage } from './pages/hamsterPage';
//import { rabbitPage } from './pages/rabbitPage';
//import { raccoonPage } from './pages/raccoonPage';
//import { mainPage } from './pages/mainPage';

const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');

header.innerHTML = `
  <ul>
    <li><a href="">Main</a></li>
    <li><a href="/cat">Cat</a></li>
    <li><a href="/dog">Dog</a></li>
    <li><a href="">Hamster</a></li>
    <li><a href="">Rabbit</a></li>
    <li><a href="">Raccoon</a></li>
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

// Использование:
const router = new Router();

router.addRoute({
  path: '/test-routing/cat',
  handler: () => {
    main.innerHTML = '';
    main.append(catPage);
    console.log('Cat page');
  },
});

router.addRoute({
  path: '/test-routing/dog',
  handler: () => {
    main.innerHTML = '';
    main.append(dogPage);
    console.log('Dog page');
  },
});

header.addEventListener('click', () => {
  router.route('/test-routing/dog');
});

footer.addEventListener('click', () => {
  router.route('/test-routing/cat');
});
