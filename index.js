"use strict";

var fs = require('fs');
var adapter = require('./TextToJsonAdapter');
var filename = '20160321_language-subtag-registry';
const ENCODING = 'utf-8';

var data = fs.readFileSync(`./data/${filename}.txt`, ENCODING);
var result = adapter(data);

fs.writeFileSync(
  `./dist/${filename}.json`,
  JSON.stringify(result, null, 2),
  {encoding: ENCODING}
);
