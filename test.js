const { toXML } = require('jsToXML');
const fs = require('fs');

const svg = require('./templates/svg');
const path = require('./templates/path');
const clipPath = require('./templates/clip-path');
const text = require('./templates/text');
const rect = require('./templates/rect');
const group = require('./templates/group');
const gradient = require('./templates/gradient');

const block1 = {
  text: 'building',
  bgColor: '#bbb',
  txtColor: 'white',
};
const block2 = {
  text: 'currently',
  bgColor: 'green',
  txtColor: 'white',
};

const height = 20;
const fromTop = 130;
const block1Size = block1.text.length * 6;
const block2Size = block2.text.length * 6;
const totalLength = block1Size + block2Size;
console.log(`(${block1.text.length} ${block1Size})`, `(${block2.text.length} ${block2Size})`, totalLength);

const buildText = text({ text: block1.text, x: block1Size, y: fromTop, color: block1.txtColor });
const failedText = text({ text: block2.text, x: (block2Size + block1Size) * 6.5, y: fromTop, color: block2.txtColor });

const rect1 = rect({ bgColor: block1.bgColor, x: 0, y: 0, height, width: totalLength, opacity: .5 });
const rect2 = rect({ bgColor: block2.bgColor, x: block1Size, y: 0, height, width: block2Size, opacity: .5 });

const gradientJs = gradient({ id: 'fade' });
const background = rect({ bgColor: 'url(#fade)', height, width: totalLength });

const group1 = group({ body: background });
const group2 = group({ body: [ rect1, buildText ], textArchor: 'middle' });
const group3 = group({ body: [ rect2, failedText ], textAnchor: 'middle' });



const mainGroup = group({ body: [ group1, group2, group3 ], clipPath: 'url(#round)', fontFamily: 'DejaVu Sans,Verdana,Geneva,sans-serif' });
const clipPathJs = clipPath({ id: 'round', x: 0, y: 0, height, width: totalLength, radius: 4 })
const svgJs = svg({ body: [ gradientJs, clipPathJs, mainGroup ], width: totalLength, height });


fs.writeFileSync('./templates/text.svg', toXML(svgJs));
