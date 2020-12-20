import React, {useEffect, useState} from "react";
import {
    CardStyles,
    MinusStyled,
    PlusStyled,
    CardImage,
    TextStyled,
    StyledCounter,
    Cross,
    ButtonSmall,
} from "../styles/ReservedItemStyles";
import {useDispatch} from "react-redux";
import {
    deleteItem,
    updateItem,
} from "./redux/Action";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const NewCard = ({value}) => {
    const [item, setElement] = useState(value);
    const dispatch = useDispatch();
    useEffect(() => {
        setElement(value);
    }, [value]);
    const reduceItemNumber = () => {
        if (item.number === 1) {
            return;
        }
        const newElement = {
            ...item,
            number: item.number - 1,
            price: (item.price / item.number) * (item.number - 1),
        };
        setElement(newElement);
        dispatch(updateItem(newElement));
    };

    const increaseItemNumber = () => {
        if (item.number === 20) {
            return;
        }
        const newElement = {
            ...item,
            number: item.number + 1,
            price: (item.price / item.number) * (item.number + 1),
        };
        setElement(newElement);
        dispatch(updateItem(newElement));
    };

    const removeElement = () => {
        dispatch(deleteItem(item));
    };

    return (
        <CardStyles>
            <Cross onClick={removeElement} icon={faTimes}/>
            <CardImage alt="Player" src={item.imageOfPlayer}/>
            <TextStyled>{item.name}</TextStyled>
            <StyledCounter>
                <ButtonSmall onClick={increaseItemNumber}>
                    <PlusStyled/>
                </ButtonSmall>
                <TextStyled>{item.number}</TextStyled>
                <ButtonSmall>
                    <MinusStyled onClick={reduceItemNumber}/>
                </ButtonSmall>
            </StyledCounter>
            <TextStyled>{item.price} euro</TextStyled>
        </CardStyles>
    );
};

export default NewCard;