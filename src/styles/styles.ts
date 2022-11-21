import styled from "styled-components";

export const ColorDiv = styled.div<{color: string, backgroundColor: string}>`
  color: ${props => props.color};  
  background-color: ${props => props.backgroundColor}; 
`;

export const StrikeThrough = styled.div<{isStrikethrough?: boolean}>`
    text-decoration: ${props => props.isStrikethrough === false ? 'none' : 'line-through'};
`
