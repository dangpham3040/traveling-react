import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={60}
      height={44}
      viewBox="0 0 60 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M33.808 7.14c7.919.217 14.37 6.305 15.16 14.067.054.527.081 1.065.081 1.606 0 8.66-7.02 15.68-15.68 15.68"
        stroke={props.stroke||"#fff"}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M48.97 21.206c5.322.552 9.47 5.047 9.47 10.515 0 5.836-4.734 10.57-10.573 10.57H11.57C5.733 42.29 1 37.556 1 31.72a10.57 10.57 0 015.455-9.252"
        stroke={props.stroke||"#fff"}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M33.81 7.139a18.902 18.902 0 00-.44-.007c-7.05 0-13.012 4.652-14.985 11.052a15.554 15.554 0 00-.691 4.366 3.744 3.744 0 01-.361.306 10.534 10.534 0 00-5.764-1.708c-.106 0-.211 0-.314.003a10.512 10.512 0 00-4.8 1.317 8.366 8.366 0 01-2.733-6.2 8.403 8.403 0 0110.494-8.142C15.646 3.98 19.579 1 24.21 1c4.257 0 7.925 2.515 9.6 6.139z"
        stroke={props.stroke||"#fff"}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
