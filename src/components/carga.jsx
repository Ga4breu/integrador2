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
            <figure>
              <img src="img/faltaseq.png" className="img-responsive" alt="" />
              <figcaption className="text-center">Figura 1 - Modelos que relacionam a oscilação da máquina síncrona.</figcaption>
            </figure>
            <figure>
              <img src="img/carga.png" className="img-responsive" alt="" />
              <figcaption className="text-center">Figura 2 - Diminuição do tempo crítico com o aumento da carga.</figcaption>
            </figure>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text text-justify">
              <h2>Variação da Carga.</h2>
              <h5>Nesse tópico abordamos como a variação da carga pode afetar o nosso sistema.</h5>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                <h3></h3>
                <h5>
                  Uma análise importante a ser indicada aqui, é referente ao tempo crítico para os geradores de acordo com a carga do sistema. Observamos que o tempo crítico diminui conforme a carga do sistema aumenta. Podemos validar a nossa teoria com o resultado obtido nas simulações realizadas no ANATEM. Dispostas na Figura 2.
                  </h5>
                  <h5>
                  A partir da equação que define a relação entre potência mecânica, elétrica, e torque acelerante, utilizando os modelos matemáticos dispostos na Imagem 1, a partir de algumas inferências, como o maior ângulo entre a máquina e a referência e a relação do torque acelerante, é possível deduzir que para sistemas mais carregados, a oscilação da máquina é maior, evidenciando que as proteções devam ocorrer em tempo menores do que para sistemas de carga leve. Inferimos também que para sistemas com carga mais leve, a oscilação da máquina é menor, o que ressalta a maior estabilidade de sistemas mais leves.
                  </h5>
                 
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