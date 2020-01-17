function stop({ offset, color, opacity }) {
  return {
    _name: 'stop',
    _attrs: {
      offset,
      'stop-color': color,
      'stop-opacity': opacity,
    }
  }
}

module.exports = ({ id }) => {
  return {
    _name: 'linearGradient',
    _attrs: {
      id,
      x2: '0',
      y2: '100%'
    },
    _content: [
      stop({ offset: 0, color: '#111', opacity: '.7' }),
      stop({ offset: 0.3, opacity: '1' }),
    ]
  };
};
