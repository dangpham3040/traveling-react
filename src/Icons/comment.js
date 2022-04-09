import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={17}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17 8.5a7.351 7.351 0 01-.8 3.353 7.522 7.522 0 01-2.784 3.026 7.598 7.598 0 01-7.35.327L1 15.89l1.689-4.037a7.35 7.35 0 01-.8-3.353c0-1.393.392-2.757 1.13-3.942a7.535 7.535 0 013.048-2.764A7.494 7.494 0 019.444 1h.445a7.564 7.564 0 014.915 2.18A7.458 7.458 0 0117 8.06V8.5z"
        stroke="#2F88FF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
