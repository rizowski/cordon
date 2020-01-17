module.exports = ({ body, clipPath, fontFamily, textAnchor, ...rest }) => {
  const attrs = Object.assign(
    {},
    clipPath && { 'clip-path': clipPath },
    fontFamily && { 'font-family': fontFamily },
    textAnchor && { 'text-anchor': textAnchor },
    { style: `width: 120; height: 20` },
    rest);

  return {
    _name: 'g',
    _attrs: attrs,
    _content: body,
  }
}
