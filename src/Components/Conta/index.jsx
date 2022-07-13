import React, { useState } from "react";
import styled from "styled-components";

import privado from "../../assets/images/privado.svg";
import olho_IconeTema from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

import { IconeTema, Box, Botao, Saldo, Detalhe } from "../../Components/UI";

const IconeTemaMargin = styled(IconeTema)`
  margin-top: 2px;
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <IconeTema src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalhe>R$</Detalhe> 0,00{" "}
          </Saldo>
        ) : null}
      </div>

      <Botao onClick={toggleHandler}>
        <IconeTemaMargin
          src={toggleState ? privado : olho_IconeTema}
          alt="Privacidade do Saldo"
        />
      </Botao>
    </Box>
  );
};

export default Conta;
