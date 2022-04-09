import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={18}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.612 2.415a4.73 4.73 0 00-1.537-1.047 4.659 4.659 0 00-3.626 0 4.731 4.731 0 00-1.536 1.047l-.913.93-.913-.93A4.693 4.693 0 005.737 1a4.693 4.693 0 00-3.35 1.415A4.875 4.875 0 001 5.828c0 1.28.5 2.509 1.388 3.414l.912.93L10 17l6.7-6.828.912-.93c.44-.448.79-.98 1.027-1.566a4.908 4.908 0 000-3.695 4.834 4.834 0 00-1.027-1.566v0z"
        stroke="#FF301B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
