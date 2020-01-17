function textLength(text) {
  return text.length * 54;
}

module.exports = ({ text, x, y, color }) => {
  return {
    _name: 'text',
    _content: text, //TODO
    _attrs: {
      x,
      y,
      // transform: 'scale(.1)',
      textLength: textLength(text),
      fill: color || 'white',
      'font-size': 1
    }
  };
};
