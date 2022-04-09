import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={45}
      height={44}
      viewBox="0 0 45 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M31.408 13.591a5.43 5.43 0 00-7.68 0l-1.047 1.047-1.047-1.047a5.432 5.432 0 00-7.68 7.681L15 22.32 22.68 30l7.682-7.681 1.046-1.047a5.43 5.43 0 000-7.68z"
        fill="#FF301B"
      />
    </Svg>
  )
}

export default SvgComponent
