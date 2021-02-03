import React from "react";
import styled, { css } from "styled-components";


const Wrapper = styled.div`
  ${(props) => css`${props.customStyle}`}
`;

export default function Spinner({
  spinnerColor,
  color,
  width,
  center,
  customStyle,
}) {
  return (
    <Wrapper customStyle={customStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || '30'}
        height={width || '30'}
        viewBox="0 0 38 38"
        style={{ margin: '0 auto' }}
        stroke={spinnerColor || '#000'}
      >
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
            <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>
            </path>
          </g>
        </g>
      </svg>
    </Wrapper>
  );
}


// const Wrapper = styled.div`
//   ${(props) =>
//     props.center &&
//     css`
//       text-align: center;
//     `}
//   ${(props) =>
//     css`
//       ${props.customStyle}
//     `}
// `;

// const StyledSpinner = styled.span`
//   box-sizing: border-box;
//   border-color: ${(props) => props.color || "#999"}
//     ${(props) => props.color || "#999"} ${(props) => props.color || "#999"}
//     ${(props) => props.spinnerColor || "#333"};
//   display: inline-block;
//   border-width: 2px;
//   border-style: solid;
//   border-radius: 50%;
//   animation: 0.8s ease 0s infinite normal none running spin;
//   width: ${(props) => props.width || "24px"};
//   height: ${(props) => props.width || "24px"};

//   @keyframes spin {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }
// `;

// export default function Spinner({
//   spinnerColor, color,
//   width, center, customStyle,
// }) {
//   return (
//     <Wrapper center={center} customStyle={customStyle}>
//       <StyledSpinner
//         spinnerColor={spinnerColor}
//         color={color}
//         width={width}
//       />
//     </Wrapper>
//   );
// }
