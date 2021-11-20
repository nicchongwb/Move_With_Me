import React, { useState } from "react";

const SelectChallenge = () => {
  return (
    <div class="text-center">
      <h2 class="text-4xl  font-semibold  pt-24">Select Your Challenge</h2>
      {/* <NumberList challenges={data}/> */}
      <div class="space-x-32 pt-12">
        {numbers.map((numbers) => (
          <Button
            type="primary"
            style={{ fontSize: "25px", width: "3em", height: "3em" }}
          >
            {numbers}
          </Button>
        ))}
      </div>
    </div>
  );
};
export default SelectChallenge;
