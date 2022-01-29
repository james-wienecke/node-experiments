#! /usr/bin/env node

import chalk from 'chalk';

console.log(chalk.blue("this should be blue"));
console.log(chalk.bgBlackBright("bg black bright"));

let color = {
    red: 0,
    green: 0,
    blue: 0
};

for (let i = 0; i < 255; i++) {
    const colorStr = chalk.rgb(color.red, color.green, color.blue);
    console.log(colorStr("hello"));
    color.red = (color.red += 32) % 255;
}