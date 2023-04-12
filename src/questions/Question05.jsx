import { useState } from "react";

/*Build a React component to display the list of all the vegetables and their pick date as ordered list. Create a button which says “Highlight Fresh Vegetables”. On click of the button change the color of the vegetable to green whose pick date is ‘2023-03-30’.

const vegetables = [
  {
    id: 1,
    name: 'Carrots',
    pickDate: '2023-03-25',
  },
  {
    id: 2,
    name: 'Broccoli',
    pickDate: '2023-03-30',
  },
  {
    id: 3,
    name: 'Peppers',
    pickDate: '2023-03-25',
  },
  {
    id: 4,
    name: 'Tomatoes',
    pickDate: '2023-03-27',
  },
  {
    id: 5,
    name: 'Ladies Finger',
    pickDate: '2023-03-30',
  },
] */
const isFresh = (pickDate, date) => (pickDate === date ? " green" : "");
export function FreshVegetables({ vegetables }) {
  const [date, setDate] = useState("");
  return (
    <div>
      <h1>Vegetables</h1>
      <div>
        <ol>
          {vegetables.map(({ id, name, pickDate }) => (
            <li key={id}>
              <p style={{ color: isFresh(pickDate, date) }}>Name: {name}</p>
              <p style={{ color: isFresh(pickDate, date) }}>
                Pick Date: {pickDate}
              </p>
            </li>
          ))}
        </ol>
        <button onClick={() => setDate("2023-03-30")}>
          Highlight Fresh Vegetables
        </button>
      </div>
    </div>
  );
}
