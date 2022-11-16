'use strict';

const tmpFolder = './tmp/';
const fs = require('fs');
const obj = {}

fs.readdirSync(tmpFolder).forEach(file => {
  let name = file.replace(".ftl","");
  // console.log(name);
  let rawdata = fs.readFileSync(tmpFolder+file);
  obj[name] = String(rawdata)
});

const theme = {};
theme['templates'] = obj;
const wrapper = {};
wrapper['theme'] = theme;

console.log(JSON.stringify(wrapper));
