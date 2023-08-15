// TwoColumnTable.js

import React from "react";
import ColumnImg from "../assets/img_AHM_eng-1024x922.png";
import { frontBackText } from "../data/data";
import FlippingComponent from "./FlippingComponent";

const TwoColumnTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <h2>Agens HA Manager</h2>
          </th>
          <th>
            <h2>Agens Enterprise Manager</h2>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ fontSize: "24px" }}>
            <span style={{ color: "blue", fontWeight: "bold" }}>
              HA Clustering
            </span>{" "}
            – Failover/Failback, Load-balancing
          </td>
          <td style={{ display: "none", margin: "0px" }}></td>
        </tr>
        <tr>
          <td>
            {" "}
            <img src={ColumnImg} alt="" style={{ width: "40vw" }} />
          </td>
          <td>
            {frontBackText.map((elem, index) => {
              return (
                <FlippingComponent
                  key={index}
                  frontText={elem.front}
                  backText={elem.back}
                />
              );
            })}
          </td>
        </tr>
        {/* Add more rows here if needed */}
      </tbody>
    </table>
  );
};

export default TwoColumnTable;
