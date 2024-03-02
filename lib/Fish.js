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

var Fish = function Fish(props) {
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
      _react2.default.createElement('path', { d: 'M512 256c0-16.54-14.27-46.76-45.61-74a207.06 207.06 0 00-60.28-36.12 3.15 3.15 0 00-3.93 1.56c-.15.29-.3.57-.47.86l-9.59 15.9a183.24 183.24 0 00.07 183.78l.23.39 8.74 16a4 4 0 004.94 1.82C479.63 337.42 512 281.49 512 256zm-93.92-.14a16 16 0 1113.79-13.79 16 16 0 01-13.79 13.79z' }),
      _react2.default.createElement('path', { d: 'M335.45 256a214.8 214.8 0 0129.08-108l.12-.21 4.62-7.67a4 4 0 00-2.59-6 284.29 284.29 0 00-39.26-5.39 7.94 7.94 0 01-4.29-1.6c-19.28-14.66-57.5-40.3-96.46-46.89a16 16 0 00-18 20.18l10.62 37.17a4 4 0 01-2.42 4.84c-36.85 13.69-68.59 38.75-91.74 57.85a8 8 0 01-10.06.06q-4.72-3.75-9.69-7.39c-39.64-28.95-86.21-32.76-88.17-32.9a16 16 0 00-16.83 19.4c.42 1.93 9.19 40.69 31.7 71.61a8.09 8.09 0 010 9.55C9.57 291.52.8 330.29.38 332.22a16 16 0 0016.83 19.4c2-.14 48.53-4 88.12-32.88q4.85-3.56 9.47-7.22a8 8 0 0110.06.07c23.25 19.19 55.05 44.28 92 58a4 4 0 012.42 4.83l-10.66 37.18a16 16 0 0018 20.18c17.16-2.9 51.88-12.86 96.05-46.83a8.15 8.15 0 014.36-1.65 287.36 287.36 0 0039.22-5.3 4 4 0 002.69-5.83l-4.51-8.29A214.81 214.81 0 01335.45 256z' })
    )
  );
};

Fish.defaultProps = {
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

Fish.propTypes = {
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

exports.default = Fish;
module.exports = exports['default'];
//# sourceMappingURL=Fish.js.map