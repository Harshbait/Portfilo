const fs = require('fs');
const app = fs.readFileSync('src/App.jsx', 'utf8');
const p3 = fs.readFileSync('src/pages/Page3.jsx', 'utf8');
const p4 = fs.readFileSync('src/pages/page4.jsx', 'utf8');
const p5 = fs.readFileSync('src/pages/page5.jsx', 'utf8');
const p6 = fs.readFileSync('src/pages/Page6.jsx', 'utf8');
const canvas = fs.readFileSync('src/pages/Canvas.jsx', 'utf8');
const css = fs.readFileSync('src/index.css', 'utf8');

const checks = [
  ['smoothMobile: false set for native touch momentum', app.includes('smoothMobile: false')],
  ['Desktop smooth scroll preserved', app.includes('smooth: true')],
  ['Desktop laptop scrub: 2 preserved in page4', p4.includes('scrub: 2')],
  ['Mobile scrub: 1 in page4', p4.includes('scrub: 1')],
  ['Desktop scrub: 2 preserved in page5', p5.includes('scrub: 2')],
  ['Mobile scrub: 1 in page5', p5.includes('scrub: 1')],
  ['Desktop scrub: 2 preserved in Page6', p6.includes('scrub: 2')],
  ['Desktop trigger: .rotat preserved in Page6', p6.includes("trigger: '.rotat'")],
  ['Canvas width/height only updated on dimension change', canvas.includes('canvas.width !== img.width')],
  ['Image cache used in Canvas', canvas.includes('imagesCacheRef')],
  ['Hardware acceleration in index.css', css.includes('will-change: transform, opacity')],
  ['Earth desktop position preserved', canvas.includes('lg:left-[45vw]')],
  ['About section has photo', p3.includes('/Hash.jpg')],
  ['About section has bio', p3.includes('I enjoy building modern and interactive web applications')],
  ['About section has academic stats', p3.includes('8.29') && p3.includes('65.67%') && p3.includes('74.80%')]
];

let allPassed = true;
checks.forEach(([name, passed]) => {
  console.log((passed ? '✓' : '✗') + ' ' + name);
  if (!passed) allPassed = false;
});
if (!allPassed) process.exit(1);
console.log('\n>>> ALL 15 PERFORMANCE & INTEGRITY CHECKS PASSED! <<<');
