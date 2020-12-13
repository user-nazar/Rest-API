import styled from "styled-components";

export const MenuStyles = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  color: white;
    width: 75%;
  height: 75px;
  margin: 0 auto;
  padding-right: 12px;
  padding-left: 12px;
  background-color: brown;

`;

export const MenuItem = styled.li`
  font-size: 17px;
  color: #313943;
  padding-top: 15px;
  padding-bottom: 0px;
  margin-bottom: 12px;
  padding-left: 10px;
  margin-left: 15px;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  list-style: none;
  a {
    text-transform: uppercase;
  }
  :hover {
    color: #333;
    text-shadow: #595959 4px 0 10px;
  }
  .selected {
    text-shadow: none;
  }
`;

export const team = styled.img`
  position: absolute;
  left: 100px;
  top: 0px;
  display: inline;
  height:50px
  width: 100px;
  z-index: 3;
`;

export const ContainerStyles = styled.section``;
