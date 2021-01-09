import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilters, selectUniqueColors } from "../store/products";

const Filter = () => {
  // const colors = ["azul", "preto", "rosa"];
  const { data } = useSelector((state) => state.products);
  const colors = selectUniqueColors(data);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilters({ name: "colors", value: selectedColors }));
  }, [dispatch, selectedColors]);

  useEffect(() => {
    dispatch(
      changeFilters({
        name: "prices",
        value: {
          min: Number(minPrice),
          max: Number(maxPrice),
        },
      })
    );
  }, [dispatch, minPrice, maxPrice]);

  function handleChange({ target }) {
    if (target.checked) {
      setSelectedColors((oldColors) => [...oldColors, target.value]);
    } else {
      setSelectedColors((oldColors) =>
        oldColors.filter((color) => color !== target.value)
      );
    }
  }

  function checkedInput(value) {
    return selectedColors.includes(value);
  }

  return (
    <div style={{ marginBottom: "1rem" }}>
      <div>
        <label htmlFor="min-price">Preço Mínimo</label>
        <input
          type="number"
          name="min-price"
          id="min-price"
          value={minPrice}
          onChange={({ target }) => setMinPrice(target.value)}
        />
      </div>
      <div>
        <label htmlFor="min-price">Preço Máximo</label>
        <input
          type="number"
          name="max-price"
          id="max-price"
          value={maxPrice}
          onChange={({ target }) => setMaxPrice(target.value)}
        />
      </div>
      <div className="checkbox-wrapper">
        <b>Cores:</b>
        {colors.map((color) => (
          <label key={color}>
            <input
              type="checkbox"
              value={color}
              checked={checkedInput(color)}
              onChange={handleChange}
            />
            {color}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
