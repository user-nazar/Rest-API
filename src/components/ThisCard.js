import React from "react";
import NewCard from "./NewCard";
import {
    CartContainer,
    TitleStyled,
    TotalPriceStyled,
    ButtonOnCart,
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
            <TitleStyled>🛒</TitleStyled>
            {select.orders.map((value) => {
                return <NewCard value={value}/>;
            })}

            <Footer>
                <ButtonOnCart onClick={history.goBack}>Return</ButtonOnCart>
                <ButtonOnCart onClick={handleClick}>Next</ButtonOnCart>
            </Footer>
        </CartContainer>
    );
};

export default ThisCard;