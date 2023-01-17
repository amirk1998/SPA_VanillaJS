// 'use strict';
import Dashboard from 'client/pages/Dashboard.js';
import Products from 'client/pages/Products.js';
import Posts from 'client/pages/Posts.js';

// 1. what to show user based on Route

function router() {
  // dashboard , products , posts
  const routes = [
    { path: '/', view: Dashboard },
    { path: '/products', view: Products },
    { path: '/posts', view: Posts },
  ];

  const potentialRoutes = routes.map((item) => {
    return {
      route: item,
      isMatch: location.pathname === item.path,
    };
  });
  let match = potentialRoutes.find((route) => route.isMatch);

  if (!match) {
    match = {
      route: { path: '/not-found', view: () => console.log('Not-Found Page') },
      isMatch: true,
    };
  }

  document.querySelector('#app').innerHTML = match.route.view();
  // console.log(match.route.view());
  // console.log(potentialRoutes);
}

// 2.Push user to new url:
function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (event) => {
    if (event.target.matches('[data-link]')) {
      // event.target.hasAttribute('data-link')
      event.preventDefault();
      navigateTo(event.target.href);
    }
  });
  router();
});
