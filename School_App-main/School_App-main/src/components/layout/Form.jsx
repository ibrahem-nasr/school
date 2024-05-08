import React from "react";
const Form = ({children , onSubmit}) => {
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

export default Form;
