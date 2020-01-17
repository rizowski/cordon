module.exports = ({ fill, moveTo, x, y }) => {
  return {
    _name: 'path',
    _attrs: {
      fill,
      d: `M${moveTo} `,
    }
  };
};
