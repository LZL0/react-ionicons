import React from 'react'
import PropTypes from 'prop-types'

import SvgContainer from './SvgContainer'

const Hammer = props => {
  return (
    <SvgContainer
      height={props.height}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
      className={props.className}
    >
      <svg style={props.style} className={props.cssClasses} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Hammer</title><path d="M280.16 242.79l-26.11-26.12a32 32 0 00-45.14-.12L27.38 384.08c-6.61 6.23-10.95 14.17-11.35 23.06a32.11 32.11 0 009.21 23.94l39 39.43a.46.46 0 00.07.07A32.29 32.29 0 0087 480h1.18c8.89-.33 16.85-4.5 23.17-11.17l168.7-180.7a32 32 0 00.11-45.34zM490 190l-.31-.31-34.27-33.92a21.46 21.46 0 00-15.28-6.26 21.89 21.89 0 00-12.79 4.14c0-.43.06-.85.09-1.22.45-6.5 1.15-16.32-5.2-25.22a258 258 0 00-24.8-28.74.6.6 0 00-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.55 139.55 0 00257.56 32C226 32 202 46.24 192.81 54.68a119.92 119.92 0 00-14.18 16.22 16 16 0 0018.65 24.34 74.45 74.45 0 018.58-2.63 63.46 63.46 0 0118.45-1.15c13.19 1.09 28.79 7.64 35.69 13.09 11.7 9.41 17.33 22.09 18.26 41.09.18 3.82-7.72 18.14-20 34.48a16 16 0 001.45 21l34.41 34.41a16 16 0 0022 .62c9.73-8.69 24.55-21.79 29.73-25 7.69-4.73 13.19-5.64 14.7-5.8a19.18 19.18 0 0111.29 2.38 1.24 1.24 0 01-.31.95l-1.82 1.73-.3.28a21.52 21.52 0 00.05 30.54l34.26 33.91a21.45 21.45 0 0015.28 6.25 21.7 21.7 0 0015.22-6.2l55.5-54.82c.19-.19.38-.39.56-.59A21.87 21.87 0 00490 190z"/></svg>
    </SvgContainer>
  )
}


Hammer.defaultProps = {
  // style
  style: {},
  color: '#000000',
  height: '22px',
  width: '22px',
  cssClasses: '',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


Hammer.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  cssClasses: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default Hammer