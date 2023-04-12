/*Build a React component to display the flowers of a bouquet in an ordered list on the DOM which has a price above 2000. Pass data as prop.
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
]

// Expected Output
// 1. snapdragon
// 2. sunflower */
export function ExpensiveFlowers({ bouquet }) {
  const expensiveFlowers = bouquet.filter(({ price }) => price > 2000);
  return (
    <div>
      <h1> Expensive Flowers</h1>
      <ol>
        {expensiveFlowers.map(({ flowers }) =>
          flowers.map((flower) => <li>{flower}</li>)
        )}
      </ol>
    </div>
  );
}
