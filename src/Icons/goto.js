import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={24} height={24} rx={5} fill="#fff" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 0a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5H5zm6.47 7.47a.75.75 0 011.06 0l4 4a.75.75 0 010 1.06l-4 4a.75.75 0 11-1.06-1.06l2.72-2.72H7a.75.75 0 010-1.5h7.19l-2.72-2.72a.75.75 0 010-1.06z"
        fill="#FF301B"
      />
    </Svg>
  )
}

export default SvgComponent
