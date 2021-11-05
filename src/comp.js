import React, { useState } from "react";
import "./styles.css";

export default function Comp({ tunel }) {
  const [QQRPORRA, VAISABER] = useState(0);
  const incrementar = () => {
    VAISABER((currentountt) => {
      return currentountt * 2;
    });
  };
  const discrementar = () => {
    VAISABER((currentCountt) => {
      return currentCountt - 1;
    });
  };
  return (
    <div className="Marcos">
      <h2>{tunel}</h2>
      <h2>{QQRPORRA}</h2>
      <button onClick={incrementar}>Incrementar </button>
      <button onClick={discrementar}>discrementar </button>
    </div>
  );
}
