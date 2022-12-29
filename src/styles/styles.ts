import styled from "styled-components";

export const ImageHorizontalBox = styled.div<{imageWidth: number, type: 'px'|'vw'|'%'}>`
    position: relative;
    height: auto;
    width: ${props => props.imageWidth}${props => props.type};
`;

export const ImageVerticalBox = styled.div<{imageHeight: number, type: 'px'|'vh'|'%'}>`
    position: relative;
    height: ${props => props.imageHeight}${props => props.type};
    width: auto;
`;
//http://localhost:3000/_next/image?url=https%3A%2F%2Fd2b1beblys53u7.cloudfront.net%2F1671795113040_PXL_20220920_170235313.jpg&w=48&q=75
