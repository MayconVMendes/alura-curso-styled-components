import React from "react";
import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";
import { IconeTema } from "../UI";

const claro = <IconeTema src={ThemeOn} alt="Tema Claro" />;
const escuro = <IconeTema src={ThemeOff} alt="Tema Escuro" />;

export default ({tema}) => (tema ? escuro : claro);