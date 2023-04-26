import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
 border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background:  linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  cursor: pointer;
  transition: border-color 0.25s;
 
`

export const WrapBackLink = styled.div`
margin: 20px 50px;
`