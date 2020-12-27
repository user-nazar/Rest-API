import React from "react";
import NewCard from "./NewCard";
import {
    CartContainer,
    TitleStyled,
    TotalPriceStyled,
    ButtonOnNewCard,
    Footer,
} from "../styles/ThisCardStyles";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const ThisCard = () => {
    let history = useHistory();
    const select = useSelector((state) => state);

    const handleClick = () => {
        console.log(select);
    };

    return (
        <CartContainer>
            <TitleStyled> The winter transfer window is open. Buy football players!</TitleStyled>
            {select.orders.map((value) => {
                return <NewCard value={value}/>;
            })}

            <Footer>
                <ButtonOnNewCard onClick={history.goBack}>Return</ButtonOnNewCard>
                <ButtonOnNewCard onClick={handleClick}>Next</ButtonOnNewCard>
            </Footer>
        </CartContainer>
    );
};

export default ThisCard;