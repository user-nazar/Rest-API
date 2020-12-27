import React, {useContext, useEffect, useState} from "react";
import {
    ContainerCards,
    TitleStyles,
    ButtonStyles,
    CatalogContainer,
} from "../styles/HomeCatalogStyles";
import ElementsContext from "./Context";
import ContainerItem from "./ContainerItem";


const HomeCatalog = () => {
    const {source} = useContext(ElementsContext);
    useEffect(() => {
        setData(source.slice(0, 2));
    }, [source]);
    const [data, setData] = useState(source.slice(0, 2));
    const [isShowMore, setIsShowMore] = useState(false);

    const showMore = () => {
        setData(source);
        setIsShowMore(true);
    };

    const showLess = () => {
        window.scrollTo({
            top: 800,
            behavior: "smooth",
        });
        console.log(window);

        setData(source.slice(0, 2));
        setIsShowMore(false);
    };

    return (
        <CatalogContainer>
            <TitleStyles> Choose your player from this list:</TitleStyles>
            <ContainerCards>
                <ContainerItem products={data} currentView="card"/>
            </ContainerCards>
            {!isShowMore && (
                <ButtonStyles onClick={() => showMore()}>View More</ButtonStyles>
            )}
            {isShowMore && <ButtonStyles onClick={showLess}>View Less</ButtonStyles>}
        </CatalogContainer>
    );
};

export default HomeCatalog;