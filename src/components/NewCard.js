import React, { useEffect, useState } from "react";
import {
    CardStyles,
    MinusStyles,
    PlusStyles,
    CardImage,
    TextStyles,
    StyledCounter,
    Cross,
    ButtonSmall,
} from "../styles/ThisCardStyles";
import { useDispatch } from "react-redux";
import {
    deleteItem,
    updateItem,
} from "./redux/Action";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const AddedCard = ({ value }) => {
    const [element, setElement] = useState(value);
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        setElement(value);
    }, [value]);

    const reduceItemNumber = (event) => {
        event.stopPropagation();
        if (element.number === 1) {
            return;
        }
        const newElement = {
            ...element,
            number: element.number - 1,
            price: (element.price / element.number) * (element.number - 1),
        };
        setElement(newElement);
        dispatch(updateItem(newElement));
    };

    const increaseItemNumber = (event) => {
        event.stopPropagation();
        if (element.number === 5) {
            return;
        }
        const newElement = {
            ...element,
            number: element.number + 1,
            price: (element.price / element.number) * (element.number + 1),
        };
        setElement(newElement);
        dispatch(updateItem(newElement));
    };

    const removeElement = (event) => {
        event.stopPropagation();
        dispatch(deleteItem(element));
    };

    const goToItem = () => {
        history.push(`/item?id=${element.id}`);
    };

    return (
        <CardStyles onClick={goToItem}>
            <Cross onClick={removeElement} icon={faTimes} />
            <CardImage alt="Player" src={element.imageOfPlayer} />
            <TextStyles>{element.name}</TextStyles>
            <StyledCounter>
                <ButtonSmall onClick={increaseItemNumber}>
                    <PlusStyles />
                </ButtonSmall>
                <TextStyles>{element.number}</TextStyles>
                <ButtonSmall>
                    <MinusStyles onClick={reduceItemNumber} />
                </ButtonSmall>
            </StyledCounter>
            <TextStyles>{element.price} euro</TextStyles>
        </CardStyles>
    );
};

export default AddedCard;