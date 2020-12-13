import the_first_player from "../image/player1.jpg";
import the_second_player from "../image/player2.jpg";
import the_third_player from "../image/player3.jpg";
import the_fourth_player from "../image/player4.jpg";
import React from "react";


export const data = [
    {
        name: "Donny van de Beek (left midfielder)",
        description: "МЮ підписав півзахисника Аякса ван де Бека.\n" +
            "\n" +
            "Сума трансферу склала 35 млн. євро. З голландським футболістом був підписаний контракт до 24-го року." +
            " У новій команді футболіст зароблятиме 7 млн. євро в рік. За ван де Беком також стежили: " +
            "Реал Мадрид, англійський Тоттенхем та Барселона.",
        price_in_mln_euro: 65,
        national: "Netherlands",
        image: the_first_player,
        id: 1,
    },
    {
        name: "Alex Telles (left defender)",
        description: "МЮ підписав підсилив лінію захисту, підписавши лівого захисника Алекса Теллеса.\n" +
            "\n" +
            "Порту отримав за власного оборонця 15 млн. євро. Нагадаємо, що в бразильця завершувався контракт із поточним клубом." +
            " Тому, португальський клуб зміг виручити хоча б будь-які кошти за капітана. " +
            " Теллес обрав двадцять сьомий номер.",
        price_in_mln_euro: 45,
        national: "Brazil",
        image: the_second_player,

        id: 2,
    },
    {
        name: "Daniel James (winger)",
        description: "Мю підсилився гравцем чемпіоншипу - Даніелем Джеймсом.\n" +
            "\n" +
            "Суонсі отримав за власного вінгера 20 млн. євро. Головний тренер МЮ заявив, що Джеймс є дуже перспективним" +
            " гравцем, який, звичайно, був підписаний для того, щоб підсилити атаку команди. " +
            " Гравець обрав 11-ий номер у новому клубі.",
        price_in_mln_euro: 55,
        national: "Wales",
        image: the_third_player,


        id: 3,
    },
    {
        name: "Bruno Fernandes (atacking midfielder)",
        description: "Бруну Фернандеш став новачком МЮ.\n" +
            "\n" +
            "Спортінг продав власного атакувального півзахисника за 55 млн. євро." +
            " Контракт був підписаний до 23-го року. Португалець отримав " +
            " гідну зарплату від нового клубу, у вигляді 8 млн. євро в рік." +
            " Бруну задоволений перейти сюди, повторивши шлях Роналду. ",
        price_in_mln_euro: 72,
        national: "Portugal",
        image: the_fourth_player,


        id: 4,
    },
];

