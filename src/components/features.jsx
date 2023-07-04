import React from "react";
import { Link } from "react-router-dom";
export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container place-content-center">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Introdução</h2>
        </div>
        <div className="row justify-content-center place-content-center">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-6">
                <a href={d.link} target="_blank">
                  <i className={d.icon}></i>
                </a>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </div>
  );
};
