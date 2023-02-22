import React, { useState } from "react";
import {AddCategory, GifGrid} from './components'

export const GifExpert = () => {
  const [categorias, setCategorias] = useState(["One Punch"]);

  const onAddnewCategory = (value) => {
    if (!categorias.includes(value)) {
      setCategorias([value, ...categorias]);
    }
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewValue={onAddnewCategory} />

      {categorias.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
