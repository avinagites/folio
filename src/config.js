module.exports = {
  email: 'hello@avisumi.pw',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/avinagites',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/nagitesinc',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    orange: 'hsl(20.5, 90.2%, 48.2%)',
    brown: 'hsl(10, 20.3%, 5.1%)',
    darkbrown: 'hsl(20, 14.3%, 3.1%)',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
