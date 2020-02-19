import React, { useState } from "react";

import { RadioItemWrapper, RadioBall } from "./styles";

const RadioButton = ({ name, options, value = null, inline = false }) => {
  const [currentValue, setCurrentValue] = useState(value);
  return options.map(({ value, label }) => {
    const idOption = `${name}-${value}`;
    const active = currentValue === value;
    const activateOption = () => setCurrentValue(value);
    return (
      <RadioItemWrapper inline={inline} key={idOption} onClick={activateOption}>
        <RadioBall active={active} />
        <input
          type="radio"
          name={name}
          style={{ display: "none" }}
          value={value}
        />
        <label
          style={{ cursor: "pointer", width: "calc(100% - 40px)" }}
          for={idOption}
        >
          {label}
        </label>
      </RadioItemWrapper>
    );
  });
};

export default RadioButton;
