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

var HelpCircleSharp = function HelpCircleSharp(props) {
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
      _react2.default.createElement('path', { d: 'M288.55 150.84c-8.09-3.86-20-6-32.72-5.82-18 .22-33.13 5.2-45 14.78-23 18.48-24.55 40.37-24.77 42.8a61.69 61.69 0 00-.09 12 3 3 0 003 2.69h21.23a3 3 0 003-3A65.7 65.7 0 01214 204c0-.11 1.14-11.7 14.36-22.34 7-5.64 16.11-8.44 27.83-8.59 9.32-.11 16.93 1.47 20.34 3.09C291 183 298 192.31 298 204.57c0 18-10.9 26.23-30.18 39.18C247.08 257.68 237 275.1 237 297v11a3 3 0 003 3h22a3 3 0 003-3v-11c0-9.16 2.23-19.13 18.44-30 19.95-13.41 42.56-28.6 42.56-62.43 0-23.14-13.3-42.23-37.45-53.73z', fill: 'none' }),
      _react2.default.createElement('path', { d: 'M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64zm10.44 302h-30.21a2.57 2.57 0 01-2.56-2.57v-30.2a2.57 2.57 0 012.56-2.57h30.21a2.57 2.57 0 012.56 2.57v30.2a2.57 2.57 0 01-2.56 2.57zm17-99C267.23 277.88 265 287.85 265 297v11a3 3 0 01-3 3h-22a3 3 0 01-3-3v-11c0-21.91 10.08-39.33 30.82-53.26C287.1 230.8 298 222.6 298 204.57c0-12.26-7-21.57-21.49-28.46-3.41-1.62-11-3.2-20.34-3.09-11.72.15-20.82 2.95-27.83 8.59C215.12 192.25 214 203.84 214 204a65.7 65.7 0 00-.84 10.28 3 3 0 01-3 3h-21.25a3 3 0 01-3-2.69 61.69 61.69 0 01.09-12c.22-2.43 1.8-24.32 24.77-42.8 11.91-9.58 27.06-14.56 45-14.78 12.7-.15 24.63 2 32.72 5.82 24.21 11.51 37.51 30.6 37.51 53.74 0 33.83-22.61 49.02-42.56 62.43z' })
    )
  );
};

HelpCircleSharp.defaultProps = {
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

HelpCircleSharp.propTypes = {
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

exports.default = HelpCircleSharp;
module.exports = exports['default'];
//# sourceMappingURL=HelpCircleSharp.js.map