import React from "react";
import { hex2rgb } from "./convertHextorgb";
import { hexToHSL } from "./hexTohsl";

const DisplayColor = ({ data }) => {
  return (
    <div className="container mt-4">
      <h3 className="text-primary mb-3">All Colors</h3>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Pallete</th>
              <th scope="col">Colors</th>
              <th scope="col">Hex</th>
              <th scope="col">RGB</th>
              <th scope="col">HSL</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data?.map((item) => (
                <tr key={item.hex}>
                  <td>
                    <div
                      className="color-box"
                      style={{ backgroundColor: `${item.hex}` }}
                    ></div>
                  </td>
                  <td>{item.color}</td>
                  <td>{item.hex}</td>
                  <td>{hex2rgb(item.hex)}</td>
                  <td>{hexToHSL(item.hex)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayColor;
