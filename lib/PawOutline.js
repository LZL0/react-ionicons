'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SvgContainer = require('./SvgContainer');

var _SvgContainer2 = _interopRequireDefault(_SvgContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PawOutline = function PawOutline(props) {
  return _react2.default.createElement(
    _SvgContainer2.default,
    {
      height: props.height,
      width: props.width,
      color: props.color,
      onClick: props.onClick,
      rotate: props.rotate ? 1 : 0,
      shake: props.shake ? 1 : 0,
      beat: props.beat ? 1 : 0,
      className: props.className
    },
    _react2.default.createElement(
      'svg',
      { style: props.style, className: props.cssClasses, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512' },
      props.title ? _react2.default.createElement(
        'title',
        null,
        props.title
      ) : '',
      _react2.default.createElement('path', { d: 'M457.74 170.1a30.26 30.26 0 00-11.16-2.1h-.4c-20.17.3-42.79 19.19-54.66 47.76-14.23 34.18-7.68 69.15 14.74 78.14a30.21 30.21 0 0011.15 2.1c20.27 0 43.2-19 55.17-47.76 14.13-34.18 7.48-69.15-14.84-78.14zM327.6 303.48C299.8 257.35 287.8 240 256 240s-43.9 17.46-71.7 63.48c-23.8 39.36-71.9 42.64-83.9 76.07a50.91 50.91 0 00-3.6 19.25c0 27.19 20.8 49.2 46.4 49.2 31.8 0 75.1-25.39 112.9-25.39S337 448 368.8 448c25.6 0 46.3-22 46.3-49.2a51 51 0 00-3.7-19.25c-12-33.55-60-36.71-83.8-76.07zM192.51 196a26.53 26.53 0 004-.3c23.21-3.37 37.7-35.53 32.44-71.85C224 89.61 203.22 64 181.49 64a26.53 26.53 0 00-4 .3c-23.21 3.37-37.7 35.53-32.44 71.85C150 170.29 170.78 196 192.51 196zM366.92 136.15c5.26-36.32-9.23-68.48-32.44-71.85a26.53 26.53 0 00-4-.3c-21.73 0-42.47 25.61-47.43 59.85-5.26 36.32 9.23 68.48 32.44 71.85a26.53 26.53 0 004 .3c21.73 0 42.51-25.71 47.43-59.85zM105.77 293.9c22.39-9 28.93-44 14.72-78.14C108.53 187 85.62 168 65.38 168a30.21 30.21 0 00-11.15 2.1c-22.39 9-28.93 44-14.72 78.14C51.47 277 74.38 296 94.62 296a30.21 30.21 0 0011.15-2.1z', fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32' })
    )
  );
};

PawOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',
  title: '',

  // animation
  shake: false,
  beat: false,
  rotate: false
};

PawOutline.propTypes = {
  // style
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string,
  cssClasses: _propTypes2.default.string,
  title: _propTypes2.default.string,

  // animation
  shake: _propTypes2.default.bool,
  beat: _propTypes2.default.bool,
  rotate: _propTypes2.default.bool,

  // functions
  onClick: _propTypes2.default.func
};

exports.default = PawOutline;
module.exports = exports['default'];
//# sourceMappingURL=PawOutline.js.map