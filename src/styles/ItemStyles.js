import styled from "styled-components";
import {Statistic} from "antd";
import {ButtonStyles} from "./CardStyles";

export const StyledItem = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 455px;
  margin: 0 auto;
  padding-top: 30px;
  padding-left: 50px;
  background: #B0C4DE;
`;

export const TopPart = styled.div`
  width: auto;
  display: flex;
`;

export const ItemInfo = styled.div`
  flex-grow: 1;
  height: auto;
  padding-left: 60px;
`;

export const TagContainer = styled.div`
  margin-top: 20px;
  margin-left: 30px;
`;


export const NameStyles = styled.h3`
  display: inline;
  font-size: 24px;
  font-weight: 600;
  color: black;
  margin-left: 30px;
`;


export const DescriptionStyles = styled.p`
  font-size: 14px;
  color: black;
  padding-top: 7px;
  width: 315px;
  height: 255px;
`;

export const OptionTextStyled = styled.h3`
  display: inline-block;
  font-size: 18px;
  color: black;
  padding-top: 45px;
  max-width: 600px;
  margin-right: 20px;
`;


export const StatisticStyled = styled(Statistic)`
  margin-right: 50px;
`;

export const BottomPart = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledPrice = styled.p`
  margin-right: auto;
  text-transform: uppercase;
  text-align: center;
  font-size: 19px;
  letter-spacing: 5px;
  color: black;
`;

export const ButtonItemStyles = styled(ButtonStyles)`
  width: 215px;
  margin-right: 30px;
  margin-bottom: 20px;
  top: 15px;
`;

