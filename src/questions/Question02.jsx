/*Given an array of objects with cartoon character details as: id, name, superpower, magnitude. Build a React component and display all details of those characters whose magnitude is greater than 5. Data:
const cartoons = [
{
    id: 1,
    name: 'Mickey Mouse',
    superpower: 'Invisibility',
    magnitude: 1
  },
  {
    id: 2,
    name: 'Spongebob Squarepants',
    superpower: 'Super Strength',
    magnitude: 3
  },
  {
    id: 3,
    name: 'Bugs Bunny',
    superpower: 'Teleportation',
    magnitude: 9
  },
  {
    id: 4,
    name: 'Tom and Jerry',
    superpower: 'Intelligence',
    magnitude: 8
  },
  {
    id: 5,
    name: 'The Powerpuff Girls',
    superpower: 'Flight',
    magnitude: 10
  }
] */
export function HigherMagnitudeCartoonCharacter({ cartoonCharacterDetails }) {
  return (
    <div>
      <h1>Higher Magnitude Cartoon Character</h1>
      <div>
        <ul>
          {cartoonCharacterDetails
            .filter(({ magnitude }) => magnitude > 5)
            .map(({ id, name, superpower, magnitude }) => (
              <li key={id}>
                <p>Name: {name}</p>
                <p>Superpower: {superpower}</p>
                <p>Magnitude: {magnitude}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
