import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-brown: #020c1b;
    --brown: #0a192f;
    --light-brown: #112240;
    --lightest-brown: #233554;
    --brown-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --orange: #64ffda;
    --orange-tint: rgba(100, 255, 218, 0.1);

    --dark-brown: #020c1b;
    --dark-brown: hsl(20, 14.3%, 3.1%);
    --brown: hsl(10, 20.3%, 5.1%);
    --light-brown: hsl(12, 14%, 8.1%);
    --lightest-brown: hsl(12, 6.5%, 15.1%);
    --brown-shadow: hsl(20, 14.3%, 4.1%);
    --dark-slate: hsl(0, 8%, 34%);
    --slate: hsl(24, 5.4%, 63.9%);
    --light-slate: hsl(160, 5%, 64.9%);
    --lightest-slate: hsl(60, 12%, 85.8%);
    --white: #e6f1ff;
    --white: hsl(33, 100%, 96.5%);
    --orange-tint: hsla(12, 6.5%, 15.1%, 0.1);
    --orange: hsl(20.5, 90.2%, 48.2%);
    --orange-tint: hsla(20.5, 90.2%, 25%, 0.2);

    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 2px;
    --nav-height: 100px;
    --nav-height-bptab: 80px;
    --nav-height-bpmob: 70px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
