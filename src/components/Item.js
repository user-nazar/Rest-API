import React, {useState, useEffect, useRef} from "react";
import {
    BottomPart,
    ItemInfo,
    StyledItem,
    StyledPrice,
    TopPart,
    ButtonItemStyles,
    NameStyles,
    DescriptionStyles,

} from "../styles/ItemStyles";
import {useLocation, useHistory} from "react-router-dom";
import {Image} from "antd";
import description from "./UtilsInfo";
import {fetchDataById, patchData} from "../CRUD";
import ProcessOfLoading from "./ProcessOfLoading";
import {useDispatch} from "react-redux";
import {createItem} from "./redux/Action";

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

                    Add a new card
                </ButtonItemStyles>
            </BottomPart>
        </StyledItem>
    );
};

export default Item;