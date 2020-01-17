module.exports = ({ body, width, height = 25 }) => {
  return {
    _name: 'svg',
    _attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      width,
      height,
      version: '1.1'
    },
    _content: body
  }
};
