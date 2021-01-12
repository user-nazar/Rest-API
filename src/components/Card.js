import React, {useState} from "react";
import {
    Footer,
    CardStyles,
    ButtonStyles,
    CardImage,
    MetaStyles,
    TextStyles,
    MoreInfo,
    ButtonLessStyles,
} from "../styles/CardStyles";
import {useHistory} from "react-router-dom";
import description from "./UtilsInfo";

const Card = ({player}) => {
    return (
        <div>
            <CardStyles
                hoverable
                cover={<CardImage alt="Player" src={player.imageOfPlayer}/>}
            >
                <Footer>
                    <MetaStyles title={player.name} description={player.description}/>
                    <TextStyles>Price: {player.price} euro</TextStyles>
                    <AllInfo player={player}/>
                </Footer>
            </CardStyles>
        </div>
    );
};

export default Card;

const AllInfo = ({player}) => {
    const [visible, setVisible] = useState(false);

    let history = useHistory();

    return (
        <React.Fragment>
            <ButtonStyles onClick={() => setVisible(true)}>View More</ButtonStyles>
            <MoreInfo height={visible ? 1 : 0}>
                <MetaStyles title={player.title} description={description(player)}/>
                <ButtonStyles
                    onClick={() => {
                        history.push(`/item?id=${player.id}`);
                    }}
                >
                    Open
                </ButtonStyles>
                <ButtonLessStyles
                    onClick={() => {
                        setVisible(false);
                    }}
                >
                    Collapse
                </ButtonLessStyles>
            </MoreInfo>
        </React.Fragment>
    );
};