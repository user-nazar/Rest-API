import styled from "styled-components";
import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";

export const CardStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  height: 175px;
  margin: 0 auto;
  padding-right: 20px;
  border: 1px solid black;
   border-radius: 36px;
  margin-bottom: 20px;
  position: relative;
   background: brown;
`;

export const CardImage = styled.img`
  height: 158px;
  width: 175px;
  border-radius: 35px;
  margin-left: 75px;
  border: 10px solid black; 
    box-shadow: 0 0 7px #666;
`;

export const TextStyled = styled.p`
  font-size: 27px;
  color: yellow;
  text-align: center;
  margin: 0;
`;

export const StyledCounter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 140px;
  margin-left: 100px;
`;

export const PlusStyled = styled(PlusSquareOutlined)`
  font-size: 45px;
  top: 5px;
  color: yellow;
  transition: 1.2s;
  :hover {
    transform: scale(1.2);
  }
`;

export const MinusStyled = styled(MinusSquareOutlined)`
  font-size: 45px;
  top: 5px;
  border-radius: 15px;
  color: yellow;
  transition: 1.2s;
  :hover {
    transform: scale(1.2);
  }
`;

export const Cross = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  top: 15px;
  font-size: 15px;
  color: yellow;
`;

export const ButtonForIncreaseAndDecrease = styled(Button)`
  border: 0px;
  background-color: transporant;
  width: 54px;
  height: 58px;
  margin: auto 0;
  padding: 0;
`;