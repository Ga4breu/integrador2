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
                <h3>Regulador de Velocidade</h3>
                  <h5>
                   Aumenta ou diminui o torque mecânico, consequentemente altera a potência mecânica Pm. Possui ação muito lenta, pois numa máquina síncrona um aumento no torque mecânico corresponde a abertura de uma válvula para a descida de mais água para a turbina, ou de mais vapor da caldeira. Essa razão (lentidão) é pela qual o RV é desprezado nos estudos de estabilidade, e, portanto, era esperado que o RV contribuísse pouco para a estabilidade.
                  </h5>
                  <h3>Regulador de Tensão.</h3>
                  <h5>
                  O regulador de tensão é um componente essencial da máquina síncrona, responsável por muitas funções, como manter a tensão terminal constante e dentro dos valores operativos, além de fazer com que a máquina retorne para um ponto de operação dentro de sua curva de capabilidade após um evento do sistema. Na estabilidade angular ele é responsável por diminuir a potência acelerante através da manipulação da potência elétrica Pe, sendo que grande parte dos problemas de estabilidade foram eliminados devido ao uso dos RTs.
                  </h5>
                  <h3>Power System Stabilizer</h3>
                  <h5>
                  Sua função básica é acrescentar amortecimento às oscilações do rotor pelo controle da excitação usando um sinal auxiliar estabilizador. Para realizar isso, o PSS deve produzir uma componente do torque elétrico em fase com o desvio de velocidade do rotor. Assim como o RT, o PSS atua em Pe, no entanto é utilizado apenas para pequenas perturbações, de modo que a utilização de RT+PSS nas simulações é esperado que o resultado seja similar ao com uso de apenas o RT e possivelmente mais amortecido.
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