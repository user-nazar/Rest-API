import React, {useState, useEffect, useRef} from "react";

import {useLocation, useHistory} from "react-router-dom";
import {Image} from "antd";
import {useDispatch} from "react-redux";
import {fetchDataById, patchData} from "../CRUD";
import {createItem} from "../components/redux/Action";
import ProcessOfLoading from "../components/ProcessOfLoading";
import {BottomPart, ButtonItemStyles, DescriptionStyles, ItemInfo, NameStyles, StyledItem, StyledPrice, TopPart} from "./ItemStyles";
import description from "../components/UtilsInfo";

const Item = () => {
    const [item, setItem] = useState({});
    const dispatch = useDispatch()
    const location = useLocation();
    const totalPrice = useRef(null);

    let history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);

        const id = parseInt(location.search.split("=")[1]);
        fetchDataById(id)
            .then(([foundItem]) => {
                setItem(foundItem);
                patchData(foundItem);
            })
            .catch(() => {
                console.log("Error download");
            });
    }, []);

    useEffect(() => {
        if (item === undefined) {
            return;
        }
        totalPrice.current = item.price;
    }, [item]);


    const goToCard = () => {
        dispatch(
            createItem({
                id: item.id,
                name: item.name,
                price: totalPrice.current,
                imageOfPlayer: item.imageOfPlayer,
                number: 1,
            })
        );
    };

    if (Object.keys(item).length === 0) {
        return <ProcessOfLoading/>;
    }

    return (
        <StyledItem>
            <TopPart>
                <Image src={item.imageOfPlayer}/>
                <ItemInfo>
                    <NameStyles>{item.name}</NameStyles>

                    <DescriptionStyles>{description(item)}</DescriptionStyles>

                </ItemInfo>
            </TopPart>
            <BottomPart>
                <StyledPrice>Price: {item.price} euro</StyledPrice>
                <ButtonItemStyles
                    onClick={history.goBack}
                >
                    Return
                </ButtonItemStyles>

                <ButtonItemStyles onClick={goToCard}>

                    Add a card
                </ButtonItemStyles>
            </BottomPart>
        </StyledItem>
    );
};

export default Item;