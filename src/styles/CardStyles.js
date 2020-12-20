import styled from "styled-components";
import {Card, Button} from "antd";

const {Meta} = Card;

export const Footer = styled.div`
  border: 1px solid black;
  border-radius: 30px;
  margin: 10px 27px;
  padding: 10px;
  height: 345px;
  width: 272px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const CardStyles = styled(Card)`
  width: 715px;
  height: 385px;
  display: flex;
  background: red;
  margin-bottom: 10px;
  border-radius: 65px;
`;

export const ButtonStyles = styled(Button)`
  background: black;
  border: 1px solid black;
   border-radius: 30px;
  text-transform: uppercase;
  text-align: center;
  font-size: 19px;
  line-height: inherit;
  color: #ffff;
  letter-spacing: 5px;
  width: 78%;
  height: 36px;
  margin: 0 auto;
  margin-left: 30px;
    :hover {
    border: 1px solid black;
    color: black;
  }
`;

export const CardImage = styled.img`
  height: 315px;
  width: 365px;
    border: 5px solid black; 
    box-shadow: 0 0 7px #666;
`;

export const MetaStyles = styled(Meta)`
  font-size: 14px;
  text-align: center;
  color: black;
  margin-top: 14%;
`;

export const TextStyles = styled.p`
  font-size: 17pt;
  color: black;
  text-align: center;
  letter-spacing: 5px;
  margin-top: 21%;
  margin-bottom: 0px;
`;

export const MoreInfo = styled.div`
  top: 17px;
  left: 419px;
  width: 262px;
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: yellow;
  border-radius 30px;
  margin-top: 30px;
  height: ${(props) => (props.height ? "322px" : "0px")};
  max-width: 290px;
  transition: 0.6s;
  
`;

export const ButtonLessStyles = styled(ButtonStyles)`
  margin-bottom: 10px;
    :hover {
    border: 1px solid black;
    color: black;
  }
`;
