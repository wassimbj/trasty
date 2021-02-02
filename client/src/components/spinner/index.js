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
      width={width || '50px'}
      height={width || '50px'}
      version="1.1"
      style={{margin: '0 auto', textAlign: 'center'}}
      x="0px" y="0px" viewBox="0 0 50 100" enable-background="new 0 0 0 0"
    >
      <circle fill="#333" stroke="none" cx="6" cy="50" r="6">
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate>    
      </circle>
      <circle fill="#333" stroke="none" cx="26" cy="50" r="6">
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate>       
      </circle>
      <circle fill="#333" stroke="none" cx="46" cy="50" r="6">
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate>     
      </circle>
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
