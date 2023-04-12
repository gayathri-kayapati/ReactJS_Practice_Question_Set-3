/*Build a React component which takes an array of objects as props. The object represents a bouquet of mixed flowers and consists of: id, flowers, totalFlowers, and price. Display the price of that bouquet on the DOM that has rose in it, in the format, “Price of bouquet with roses : {price}”
const bouquet = [
  {
    id: 1,
    flowers: ['rose', 'lily', 'marigold'],
    totalFlowers: 9,
    price: 1400,
  },
  {
    id: 2,
    flowers: ['snapdragon', 'sunflower'],
    totalFlowers: 10,
    price: 3400,
  },
] */

export function PriceOfBouquetWithRoses({ bouquet }) {
  const arr = bouquet.filter(({ flowers }) =>
    flowers.find((element) => element === "rose")
  );
  return (
    <div>
      {arr.map(({ price }) => (
        <h1>Price of bouquet with roses : {price}</h1>
      ))}
    </div>
  );
}
