import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={17}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.377 1.38a.701.701 0 011.246 0l1.934 3.845c.101.2.297.34.523.373l4.324.62a.68.68 0 01.385 1.164l-3.128 2.99a.675.675 0 00-.2.605l.738 4.224c.097.557-.499.982-1.01.72l-3.865-1.996a.707.707 0 00-.648 0L5.81 15.92c-.51.263-1.106-.162-1.009-.72l.738-4.223a.675.675 0 00-.2-.604l-3.128-2.99a.68.68 0 01.384-1.165l4.325-.62a.694.694 0 00.523-.373L9.377 1.38z"
        stroke="#C4C4C4"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
