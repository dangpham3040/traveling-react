import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={23}
            height={20}
            viewBox="0 0 23 20"
            fill={props.fill}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M13.196 2.3h0a5.302 5.302 0 013.75-1.55 5.318 5.318 0 013.75 1.55l.53-.53-.529.53a5.282 5.282 0 011.553 3.735 5.268 5.268 0 01-1.553 3.736h0l-1.166 1.163-8.031 8.007-8.031-8.007-1.167-1.162a5.276 5.276 0 010-7.473 5.312 5.312 0 017.502 0l1.166 1.163a.75.75 0 001.06 0L13.195 2.3z"
                stroke={props.stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </Svg>
    )
}

export default SvgComponent
