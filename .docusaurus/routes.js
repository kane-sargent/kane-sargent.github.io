import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/',
    component: ComponentCreator('/blog/', '189'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/', '1d9'),
    exact: true
  },
  {
    path: '/blog/authors/',
    component: ComponentCreator('/blog/authors/', '347'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles/',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles/', 'a25'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun/',
    component: ComponentCreator('/blog/authors/yangshun/', 'c91'),
    exact: true
  },
  {
    path: '/blog/first-blog-post/',
    component: ComponentCreator('/blog/first-blog-post/', '08c'),
    exact: true
  },
  {
    path: '/blog/long-blog-post/',
    component: ComponentCreator('/blog/long-blog-post/', '447'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post/',
    component: ComponentCreator('/blog/mdx-blog-post/', 'bcc'),
    exact: true
  },
  {
    path: '/blog/tags/',
    component: ComponentCreator('/blog/tags/', 'e17'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus/',
    component: ComponentCreator('/blog/tags/docusaurus/', '350'),
    exact: true
  },
  {
    path: '/blog/tags/facebook/',
    component: ComponentCreator('/blog/tags/facebook/', '187'),
    exact: true
  },
  {
    path: '/blog/tags/hello/',
    component: ComponentCreator('/blog/tags/hello/', '046'),
    exact: true
  },
  {
    path: '/blog/tags/hola/',
    component: ComponentCreator('/blog/tags/hola/', 'bf6'),
    exact: true
  },
  {
    path: '/blog/welcome/',
    component: ComponentCreator('/blog/welcome/', 'a11'),
    exact: true
  },
  {
    path: '/Get_started/',
    component: ComponentCreator('/Get_started/', '64a'),
    exact: true
  },
  {
    path: '/getstarted/intro/',
    component: ComponentCreator('/getstarted/intro/', 'afb'),
    exact: true
  },
  {
    path: '/markdown-page/',
    component: ComponentCreator('/markdown-page/', '54d'),
    exact: true
  },
  {
    path: '/placeholder/',
    component: ComponentCreator('/placeholder/', 'dd5'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'f37'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'bb6'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '97a'),
            routes: [
              {
                path: '/docs/connecting-to-device/Connecting-to-your-hive-player-via-Dhcp/',
                component: ComponentCreator('/docs/connecting-to-device/Connecting-to-your-hive-player-via-Dhcp/', '8e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/connecting-to-device/Setting-up-a-Hive-player-with-a-static-network-connection/',
                component: ComponentCreator('/docs/connecting-to-device/Setting-up-a-Hive-player-with-a-static-network-connection/', 'e6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro/',
                component: ComponentCreator('/docs/intro/', 'd78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/queen-and-worker-mode/beesync/',
                component: ComponentCreator('/docs/queen-and-worker-mode/beesync/', '43c'),
                exact: true
              },
              {
                path: '/docs/queen-and-worker-mode/find-devices-page/',
                component: ComponentCreator('/docs/queen-and-worker-mode/find-devices-page/', '3ad'),
                exact: true
              },
              {
                path: '/docs/queen-and-worker-mode/Intro/',
                component: ComponentCreator('/docs/queen-and-worker-mode/Intro/', 'e85'),
                exact: true
              },
              {
                path: '/docs/queen-and-worker-mode/The-adjust-page-queen-and-worker-mode/',
                component: ComponentCreator('/docs/queen-and-worker-mode/The-adjust-page-queen-and-worker-mode/', '58a'),
                exact: true
              },
              {
                path: '/docs/queen-and-worker-mode/The-map-page-queen-and-worker-mode/',
                component: ComponentCreator('/docs/queen-and-worker-mode/The-map-page-queen-and-worker-mode/', 'f2e'),
                exact: true
              },
              {
                path: '/docs/queen-and-worker-mode/The-media-page-queen-and-worker-mode/',
                component: ComponentCreator('/docs/queen-and-worker-mode/The-media-page-queen-and-worker-mode/', '3cd'),
                exact: true
              },
              {
                path: '/docs/queen-and-worker-mode/The-play-page-queen-and-worker_mode/',
                component: ComponentCreator('/docs/queen-and-worker-mode/The-play-page-queen-and-worker_mode/', '2b4'),
                exact: true
              },
              {
                path: '/docs/the-adjust-page/adjust-intro/',
                component: ComponentCreator('/docs/the-adjust-page/adjust-intro/', '953'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-adjust-page/cloud/',
                component: ComponentCreator('/docs/the-adjust-page/cloud/', '4d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-adjust-page/effects/',
                component: ComponentCreator('/docs/the-adjust-page/effects/', 'c56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-adjust-page/parameters/',
                component: ComponentCreator('/docs/the-adjust-page/parameters/', '9a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-adjust-page/sensors/',
                component: ComponentCreator('/docs/the-adjust-page/sensors/', '81a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-adjust-page/settings/',
                component: ComponentCreator('/docs/the-adjust-page/settings/', 'a6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/The-Device-Page/',
                component: ComponentCreator('/docs/The-Device-Page/', '336'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-map-page/Advanced-map/',
                component: ComponentCreator('/docs/the-map-page/Advanced-map/', '885'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-map-page/Map-Page/',
                component: ComponentCreator('/docs/the-map-page/Map-Page/', '9d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-map-page/simple-mapping/',
                component: ComponentCreator('/docs/the-map-page/simple-mapping/', '0a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-map-page/warp-and-blend/',
                component: ComponentCreator('/docs/the-map-page/warp-and-blend/', '9e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-media-page/media 2/',
                component: ComponentCreator('/docs/the-media-page/media 2/', '920'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-media-page/media-3/',
                component: ComponentCreator('/docs/the-media-page/media-3/', 'e79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-media-page/media-4/',
                component: ComponentCreator('/docs/the-media-page/media-4/', '921'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-media-page/media-5/',
                component: ComponentCreator('/docs/the-media-page/media-5/', 'bac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-media-page/media-6/',
                component: ComponentCreator('/docs/the-media-page/media-6/', 'a0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-media-page/media/',
                component: ComponentCreator('/docs/the-media-page/media/', '34b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-play-page/external-control/',
                component: ComponentCreator('/docs/the-play-page/external-control/', '9ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-play-page/Live-Control/',
                component: ComponentCreator('/docs/the-play-page/Live-Control/', '231'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-play-page/play-intro/',
                component: ComponentCreator('/docs/the-play-page/play-intro/', 'fdf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-play-page/Playlists/',
                component: ComponentCreator('/docs/the-play-page/Playlists/', '7a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-play-page/schedule/',
                component: ComponentCreator('/docs/the-play-page/schedule/', '86b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/the-play-page/Timeline/',
                component: ComponentCreator('/docs/the-play-page/Timeline/', 'f38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/user-interface/',
                component: ComponentCreator('/docs/user-interface/', '2b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
