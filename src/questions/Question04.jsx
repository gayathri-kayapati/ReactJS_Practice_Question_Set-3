/*Use the cartoons data from above question (2) and build a React component that takes the superpower ”Intelligence”, as prop and display the details of the character having that super power. Show details on DOM in the format “name - superpower - magnitude”. */
export function IntelligentCartoonCharacters({
  cartoonCharacterDetails,
  superPower
}) {
  return (
    <div>
      {cartoonCharacterDetails
        .filter(({ superpower }) => superpower === superPower)
        .map(
          ({ name, superpower, magnitude }) =>
            `Name: ${name} Superpower: ${superpower} Magnitude: ${magnitude}`
        )}
    </div>
  );
}
