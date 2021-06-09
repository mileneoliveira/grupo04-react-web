import React from "react";

import "./style.css";

export default function Input({
  title,
  id,
  register,

  required,
  ...rest
}) {
  return <input id={id} title={title} ref={register({ required })} {...rest} />;
}
