/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // Intro Document
    'intro',

    // Connecting to Device Category
    {
      type: 'category',
      label: 'Connecting to Device',
      items: [
        'connecting-to-device/Connecting-to-your-hive-player-via-Dhcp',
        'connecting-to-device/Setting-up-a-Hive-player-with-a-static-network-connection',
      ],
      collapsible: true,
      collapsed: true, // Expanded by default
    },

    // User Interface Document
    {
      type: 'doc',
      id: 'user-interface',
      label: 'User Interface',
    },

    // The Device Page Document
    {
      type: 'doc',
      id: 'The-Device-Page',
      label: 'The Device Page',
    },

    // The Map Page Category
    {
      type: 'category',
      label: 'The Map Page',
      link: {
        type: 'doc', // Link to the Map Page introduction
        id: 'the-map-page/Map-Page',
      },
      items: [
        'the-map-page/simple-mapping',
        'the-map-page/Advanced-map',
        'the-map-page/warp-and-blend',
      ],
      collapsible: true,
      collapsed: true, // Expanded by default
    },

    // The Media Page Category
    {
      type: 'category',
      label: 'The Media Page',
      link: {
        type: 'doc', // Link to the Main Media Page
        id: 'the-media-page/media',
      },
      items: [
        'the-media-page/media 2',
        'the-media-page/media-3',
        'the-media-page/media-4',
        'the-media-page/media-5',
        'the-media-page/media-6',
      ],
      collapsible: true,
      collapsed: true,
    },

    // The Play Page Category
    {
      type: 'category',
      label: 'The Play Page',
      link: {
        type: 'doc', // Link to the Play Page introduction
        id: 'the-play-page/play-intro',
      },
      items: [
        'the-play-page/Playlists',
        'the-play-page/external-control',
        'the-play-page/Live-Control',
        'the-play-page/Timeline',
        'the-play-page/schedule',
      ],
      collapsible: true,
      collapsed: true, // Set to true if you want it collapsed by default
    },

    // The Adjust Page Category
    {
      type: 'category',
      label: 'The Adjust Page',
      link: {
        type: 'doc', // Link to the Adjust Page introduction
        id: 'the-adjust-page/adjust-intro',
      },
      items: [
        'the-adjust-page/settings',
        'the-adjust-page/parameters',
        'the-adjust-page/effects',
        'the-adjust-page/sensors',
        'the-adjust-page/cloud',
      ],
      collapsible: true,
      collapsed: true, // Set to true if you want it collapsed by default
    },
  ],
};

export default sidebars;
