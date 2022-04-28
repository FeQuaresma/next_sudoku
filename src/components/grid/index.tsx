import React, { FC, Children } from "react";
import { deflate } from "zlib";

const Grid: FC = () => {
  // Outras coisas

  return (
    <div data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <div data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <div data-cy="block"></div>
              ))
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Grid;
