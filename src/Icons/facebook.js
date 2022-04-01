import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={0.5}
        y={0.5}
        width={49}
        height={49}
        rx={14.5}
        fill="#4285F4"
        stroke="#C4C4C4"
      />
      <Path
        d="M26.621 26.925h2.365l.946-3.8h-3.31v-1.9c0-.979 0-1.9 1.891-1.9h1.419v-3.192c-.308-.04-1.473-.133-2.703-.133-2.568 0-4.391 1.574-4.391 4.465v2.66H20v3.8h2.838V35h3.783v-8.075z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
