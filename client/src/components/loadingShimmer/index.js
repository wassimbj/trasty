import React from 'react';
import styled, { css } from 'styled-components';

const Shimmer = styled.div`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #efefef;
  background-image: linear-gradient(
    to right, 
    #efefef 0%, 
    #e3e3e3 20%, 
    #efefef 40%, 
    #efefef 100%
  );
  background-repeat: no-repeat;
  background-size: 800px ${(props) => props.lheight};
  height: ${(props) => props.lheight};
  position: relative;
  width: ${(props) => props.lwidth};
  @keyframes placeHolderShimmer{
    0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
  }

  & div {
    background: #313236;
    height: 6px;
    left: 0;
    position: absolute;
    right: 0;
  }

  ${(props) => css` ${props.customStyle} `}
`;

export default function LoadingShimmer({ height, width, customStyle }) {
  return <Shimmer lheight={height} lwidth={width} customStyle={customStyle} />;
}
