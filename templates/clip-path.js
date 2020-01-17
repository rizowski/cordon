const rect = require('./rect');

module.exports = ({ id, width, height, radius, x, y }) => {
  return {
    _name: 'clipPath',
    _attrs: {
      id
    },
    _content: rect({ x, y, width, height, radius }),
  }
};
