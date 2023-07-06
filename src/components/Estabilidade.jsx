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
              <h5 className="text-justify">A definição de estabilidade em um sistema elétrico de potência, diz a respeito da capacidade do sistema após uma perturbação, de voltar a operar normalmente, ou seja, sem perder a estabilidade.
              </h5>
              <h5 className="text-justify"> A análise de estabilidade transitória desenvolvida nesse trabalho é referente principalmente ao ângulo existente entre as barras e a referência em G.B. Munhoz
              , ou seja, em um sistema extremamente malhado. Eventualmente durante o trabalho, foi utilizado o critério das áreas iguais para inferências e relações causa efeito por motivos de simplificação do modelo.
              </h5>
              <h5 className="text-justify">
              </h5>
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
      {/* <a
  href="/redespacho"
  target="_blank"
  className="btn btn-custom btn-lg page-scroll bottom-button"
>
  Veja Mais
</a>{" "} */}
    </div>
  );
};
export default CurtoCircuito;