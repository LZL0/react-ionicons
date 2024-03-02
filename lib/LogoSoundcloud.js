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

var LogoSoundcloud = function LogoSoundcloud(props) {
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
      _react2.default.createElement('path', { d: 'M5.8 278a2.11 2.11 0 00-2 2L0 308.64l3.74 28.16a2.12 2.12 0 002.05 2 2.14 2.14 0 002-2l4.44-28.17L7.83 280a2.14 2.14 0 00-2-2zM26.85 262.32a2.13 2.13 0 00-4.26 0l-5 46.32 5 45.3a2.13 2.13 0 004.26 0l5.73-45.31-5.73-46.32zM106.17 219.59a4 4 0 00-3.87 3.87l-4 85.22 4 55.08a3.88 3.88 0 007.75 0l4.53-55.08-4.53-85.22a4 4 0 00-3.88-3.87zM65.12 249.21a3.09 3.09 0 00-3 3l-4.52 56.45 4.51 54.63a3 3 0 006 0l5.13-54.63-5.13-56.48a3.1 3.1 0 00-2.99-2.97zM147.88 367.6a4.83 4.83 0 004.75-4.74l3.93-54.15-3.93-113.46a4.75 4.75 0 00-9.5 0l-3.49 113.45 3.49 54.17a4.81 4.81 0 004.75 4.73zM233.28 367.85a6.6 6.6 0 006.5-6.52l2.74-52.6-2.74-131a6.5 6.5 0 10-13 0l-2.45 131c0 .08 2.45 52.67 2.45 52.67a6.59 6.59 0 006.5 6.45zM190.26 367.65a5.67 5.67 0 005.62-5.64l3.34-53.33-3.34-114.28a5.63 5.63 0 10-11.25 0l-3 114.29 3 53.32a5.66 5.66 0 005.63 5.6zM85.56 367.15a3.53 3.53 0 003.44-3.41l4.83-55.09-4.83-52.4a3.44 3.44 0 00-6.88 0l-4.26 52.38 4.26 55.08a3.5 3.5 0 003.44 3.44zM44.84 364.13a2.67 2.67 0 002.57-2.52l5.43-53-5.42-55a2.57 2.57 0 00-5.14 0l-4.78 55 4.78 53a2.62 2.62 0 002.56 2.53zM211.69 192.53a6.1 6.1 0 00-6.07 6.09l-2.71 110.11 2.71 53a6.07 6.07 0 0012.13 0l3-53-3-110.13a6.1 6.1 0 00-6.06-6.07zM127 367.71a4.41 4.41 0 004.31-4.3l4.23-54.71-4.28-104.7a4.32 4.32 0 00-8.63 0l-3.74 104.7 3.75 54.73a4.38 4.38 0 004.36 4.28zM174.17 362.54l3.63-53.8-3.63-117.28a5.19 5.19 0 10-10.37 0l-3.23 117.28 3.23 53.83a5.18 5.18 0 0010.36 0zM449 241.1a62.42 62.42 0 00-24.33 4.9c-5-57.18-52.61-102-110.66-102a111.92 111.92 0 00-40.28 7.58c-4.75 1.85-6 3.76-6.06 7.46V360.4a7.66 7.66 0 006.8 7.5l174.56.11c34.78 0 63-28.41 63-63.45s-28.2-63.46-63-63.46zM254.79 158.87a7 7 0 00-6.94 7L245 308.75l2.85 51.87a6.94 6.94 0 1013.87-.06v.06l3.09-51.87-3.09-142.93a7 7 0 00-6.93-6.95z' })
    )
  );
};

LogoSoundcloud.defaultProps = {
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

LogoSoundcloud.propTypes = {
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

exports.default = LogoSoundcloud;
module.exports = exports['default'];
//# sourceMappingURL=LogoSoundcloud.js.map