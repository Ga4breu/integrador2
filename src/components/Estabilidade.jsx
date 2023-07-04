import React from "react";
import { Navigation } from "./navigation";
 const CurtoCircuito = (props) => {
  return (
    <div id="about">
      <Navigation/>
      <div className="container">
        
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Estabilidade</h2>
              <h5 className="font-extrabold">A estabilidade em um sistema elétrico de potência é definida a partir da capacidade do sistema de suportar perturbações. </h5>
              <h2>Análises</h2>
              <h5 className="text-justify">As barras mais críticas do ponto de vista de estabilidade são as barras de geração. No entanto, em transformadores e geradores as faltas são menos comuns e se devem a erros de operação e manutenção inadequada. Dessa forma, uma análise importante a ser indicada aqui, trata-se a respeito do tempo crítico para os geradores de acordo com a carga do sistema. Observamos que o tempo crítico diminui conforme a carga do sistema aumenta.</h5>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>

            
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                   
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};
export default CurtoCircuito;