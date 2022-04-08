import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.334.908a.5.5 0 01.897 0l1.385 2.806a.5.5 0 00.376.273l3.098.453a.5.5 0 01.277.853L9.126 7.476a.5.5 0 00-.144.443L9.51 11a.5.5 0 01-.726.527l-2.77-1.456a.5.5 0 00-.465 0l-2.77 1.456a.5.5 0 01-.725-.527l.529-3.082a.5.5 0 00-.144-.443L.199 5.293a.5.5 0 01.277-.853l3.097-.453a.5.5 0 00.376-.273L5.334.908z"
        fill={props.fill||"#DADADA"}
      />
    </Svg>
  )
}

export default SvgComponent
