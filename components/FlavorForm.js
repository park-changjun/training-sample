import React from "react";

const FlavorForm = (props) => {
  const [state, setState] = React.useState({ value: "coconut" });
  return (
    <>
      <label>
        <select
          value={state.value}
          onChange={(event) => {
            setState({ value: event.target.value });
          }}
        >
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
    </>
  );
};

export default FlavorForm;
