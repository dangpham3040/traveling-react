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
        fill="#fff"
        stroke="#C4C4C4"
      />
      <Path
        d="M34.815 23.64h-.765v-.04H25.5v3.8h5.369a5.698 5.698 0 01-11.07-1.9 5.7 5.7 0 015.7-5.7 5.67 5.67 0 013.782 1.443l2.687-2.687A9.456 9.456 0 0025.5 16a9.5 9.5 0 109.315 7.64z"
        fill="#FFC107"
      />
      <Path
        d="M17.096 21.079l3.12 2.289A5.697 5.697 0 0125.5 19.8a5.67 5.67 0 013.782 1.444l2.687-2.687A9.456 9.456 0 0025.5 16a9.494 9.494 0 00-8.404 5.078z"
        fill="#FF3D00"
      />
      <Path
        d="M25.5 35c2.453 0 4.683-.94 6.368-2.466l-2.94-2.488A5.657 5.657 0 0125.5 31.2a5.697 5.697 0 01-5.36-3.774l-3.097 2.387C18.614 32.889 21.807 35 25.499 35z"
        fill="#4CAF50"
      />
      <Path
        d="M34.814 23.64h-.765v-.04h-8.55v3.8h5.369a5.718 5.718 0 01-1.941 2.646h.001l2.94 2.487c-.208.19 3.13-2.283 3.13-7.033 0-.637-.065-1.259-.184-1.86z"
        fill="#1976D2"
      />
    </Svg>
  )
}

export default SvgComponent
