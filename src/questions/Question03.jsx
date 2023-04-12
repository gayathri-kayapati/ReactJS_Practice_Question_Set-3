/*Use the cartoons data from above question (2) and build a React component to display only the names of characters whose magnitude is an even number. Use h1 tag to display names. Pass the entire data as props.
 */
export function EvenMagnitudeCartoonCharacter({ cartoonCharacterDetails }) {
  return (
    <div>
      <div>
        <ul>
          {cartoonCharacterDetails
            .filter(({ magnitude }) => magnitude % 2 === 0)
            .map(({ id, name }) => (
              <li key={id}>
                <h1>Name:{name}</h1>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
