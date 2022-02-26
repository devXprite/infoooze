import chalk from 'chalk';
import colors from 'colors';
import chalkAnimation from 'chalk-animation';

import { home } from './src/home.js';

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const glitchTitle = chalkAnimation.glitch('Welcome to Dhanush!\n');
  await sleep(3000);
  glitchTitle.stop();
}

await welcome();
await home();
