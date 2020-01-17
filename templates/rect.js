module.exports = ({ radius, bgColor, opacity, ...rest }) => {
  const attrs = Object.assign(
    {},
    radius && { rx: radius },
    bgColor && { fill: bgColor },
    opacity && { 'fill-opacity':  opacity },
    rest
  );

  return {
    _name: 'rect',
    _attrs: attrs,
  };
};
