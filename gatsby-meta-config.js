module.exports = {
  title: `bimasetyo.com`,
  description: `줌코딩의 개발일기`,
  language: `en`,
  siteUrl: `https://www.bimasetyo.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `bima0302/website`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `Bima Setyo`,
    bio: {
      role: `Software Developer`,
      description: ['like traveling', 'mostly write code', 'and share it here.'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/bima0302`,
      linkedIn: `https://www.linkedin.com/in/abimanyusrisetyo`,
      email: `bima030201@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2023.11 - NOW',
        activity: 'Full Stack Developer - PT. Sinergi Merah Putih',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2023.07 - 2023.11',
        activity: 'System Engineer - PT. Sinergi Merah Putih',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2022.03 - 2022.08',
        activity: 'Data Analyst - GoTo Impact Foundation',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'Dino Plus Movie',
        description:
          'Dino Plus Movie is a web application built using React, Tailwind CSS, and Vite. The project aims to provide a user-friendly and visually appealing interface for movie enthusiasts.',
        techStack: ['React', 'Vite', 'Tailwind CSS'],
        thumbnailUrl: 'movieplus.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
