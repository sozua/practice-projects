import React from "react";
import { useSelector } from "react-redux";

const filterColors = (colors) => ({ color }) =>
  !colors.length || colors.includes(color);

// const filterPrice = ({ min, max }) => ({ price }) => {
//   if ((min && max) || (!min && max)) {
//     return price >= min && price <= max;
//   }
//   if (min && !max) {
//     return price >= min;
//   }
//   return true;
// };

const filterPrice = ({ min, max }) => ({ price }) =>
  (!max || price <= max) && (!min || price >= min);

const filterProducts = ({ products }) => {
  const { data, filters } = products;
  return data
    .filter(filterColors(filters.colors))
    .filter(filterPrice(filters.prices));
};

const Products = () => {
  const data = useSelector(filterProducts);
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Cor</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, name, color, price }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{color}</td>
            <td>{price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Products;
