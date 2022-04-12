import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.106 8.553L.724.362A.5.5 0 000 .809v6.459a.5.5 0 00.444.496l6.531.74c.592.066.592.926 0 .993l-6.531.739a.5.5 0 00-.444.496v6.459a.5.5 0 00.724.447l16.382-8.19a.5.5 0 000-.895z"
        fill="#C4C4C4"
      />
    </Svg>
  )
}

export default SvgComponent
