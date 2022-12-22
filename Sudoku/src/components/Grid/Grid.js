import React from "react";
import "./Grid.css";
import "animate.css";

import { Node } from "./../index.js";

const Grid = ({ grid, handleCellClick }) => {
  return (
    <table className="grid-table">
      <tbody>
        {grid &&
          grid.map((row, rowIndex) => {
            return (
              <tr className="row" key={rowIndex}>
                {row.map((cell, columnIndex) => {
                  return (
                    <Node
                      key={rowIndex + "-" + columnIndex}
                      cell={cell}
                      handleClickCallback={handleCellClick}
                    />
                  );
                })}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Grid;
