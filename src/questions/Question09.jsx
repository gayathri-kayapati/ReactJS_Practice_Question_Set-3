/*Given an array of objects representing a list of cars. Each object consists of: id, name, price, category. Build a React component that shows on the DOM the total number of cars present in each category. For Example: if there are categories, luxury and sports, where there are 5 luxury cars and 2 sports car then the data should be represented as:
luxury: 5

sports: 2
const cars = [
  {
    id: 1,
    name: "supra",
    price: 500000,
    category: "sports"
  },
  {
    id: 2,
    name: "A5",
    price: 700000,
    category: "luxury"
  },
  {
    id: 3,
    name: "huyara",
    price: 1500000,
    category: "sports"
  },
  {
    id: 4,
    name: "agera R",
    price: 3500000,
    category: "sports"
  }
];*/
export function TotalNoOfCarsInEachCategory({ cars }) {
  // const arrayOfCategories = cars.map(({ category }) => category);
  const categories = cars.reduce((acc, { category }) => {
    if (acc[category]) {
      acc[category] = acc[category] + 1;
    } else {
      acc[category] = 1;
    }
    return acc;
  }, {});

  return (
    <>
      {Object.keys(categories).map((category) => (
        <div>
          {category}:{categories[category]}
        </div>
      ))}
    </>
  );
}
