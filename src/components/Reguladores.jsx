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
              <img src="img/faltaposte.jpg" className="img-responsive" alt="" />
              <figcaption className="text-center">Figura 1 - Descargas atmosféricas podem causar faltas.</figcaption>
            </figure>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text text-justify">
              <h2>Reguladores</h2>
              <h5>A análise de Curto Circuito no sistema elétrico de potência é necessária principalmente para viabilizar o estudo de dimensionamento de proteção, para que em caso de faltas elétricas, o sistema possa continuar operando normalmente. É importante ressaltar a importância da coordenação e seletividade da proteção elétrica, não basta apenas dimensionar a proteção de forma que seja capaz de lidar com as faltas mais severas como as faltas trifásicas, é importante também que a proteção seja sensível a faltas que impactam o sistema com menor intensidade.</h5>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                <h3>Trifásicos</h3>
                  <h5>
                    Os curtos trifásicos, também são conhecidos como curtos simétricos, e ganham esse nome por conta do equílibrio que existe entre as fases previamente a falta.
                    Curtos circuitos trifásicos são os curtos mais estudados para o dimensionamento de proteção, isso ocorre principalmente por conta de geralmente possuírem a maior corrente de curto, tornando necessário utilizá-lo como parâmetro.
                  </h5>
                  <h3>Monofásicos</h3>
                  <h5>
                    Curtos monofásicos são os mais comuns em sistemas elétricos de potência, ocorrendo principalmente nas linhas, temos nesse caso uma situação onde não há equilíbrio entre as fases, trazendo a necessidade da utilização de componentes de sequência para o seu estudo.
                    As redes de sequência trazem a necessidade de uma análise mais detalhada, como podemos ver na Figura 2, agora tratamos de três circuitos.
                  </h5>
                  <h3>Bifásico</h3>
                  <h5>
                    Faltas Bifásicas também não possuem simetria, ou seja, assim como as faltas monofásicas, é necessário utilizar as redes de sequência para estudar o impacto do curto circuito.
                    Essas Faltas ocorrem quando há contato entre duas fases, isso pode ocorrer por exemplo em dias quentes e com ventos mais intensos devido a dilatação térmica dos condutores.
                  </h5>
                  <h3>Bifásico-Terra</h3>
                  <h5>
                    Nesse caso temos a mesma situação que o caso anterior, porém, com o contato dos condutores à terra.
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