import "./styles.css";
// import { ImageCard } from "./questions/Question01";
// import { HigherMagnitudeCartoonCharacter } from "./questions/Question02";
// import { EvenMagnitudeCartoonCharacter } from "./questions/Question03";
// import { IntelligentCartoonCharacters } from "./questions/Question04";
// import { FreshVegetables } from "./questions/Question05";
// import { PriceOfBouquetWithRoses } from "./questions/Question06";
// import { ExpensiveFlowers } from "./questions/Question07";
// import { TotalDonatedAmount } from "./questions/Question08";
// import { TotalNoOfCarsInEachCategory } from "./questions/Question09";
import { CriteriaOfStudentCertification } from "./questions/Question10";

// Question-2 & 3 & 4 data
/*const cartoons = [
  {
    id: 1,
    name: "Mickey Mouse",
    superpower: "Invisibility",
    magnitude: 1
  },
  {
    id: 2,
    name: "Spongebob Squarepants",
    superpower: "Super Strength",
    magnitude: 3
  },
  {
    id: 3,
    name: "Bugs Bunny",
    superpower: "Teleportation",
    magnitude: 9
  },
  {
    id: 4,
    name: "Tom and Jerry",
    superpower: "Intelligence",
    magnitude: 8
  },
  {
    id: 5,
    name: "The Powerpuff Girls",
    superpower: "Flight",
    magnitude: 10
  }
];*/

// Question-5 data
/*const vegetables = [
  {
    id: 1,
    name: "Carrots",
    pickDate: "2023-03-25"
  },
  {
    id: 2,
    name: "Broccoli",
    pickDate: "2023-03-30"
  },
  {
    id: 3,
    name: "Peppers",
    pickDate: "2023-03-25"
  },
  {
    id: 4,
    name: "Tomatoes",
    pickDate: "2023-03-27"
  },
  {
    id: 5,
    name: "Ladies Finger",
    pickDate: "2023-03-30"
  }
];*/

// Question-6 & 7 data
/*const bouquet = [
  {
    id: 1,
    flowers: ["rose", "lily", "marigold"],
    totalFlowers: 9,
    price: 1400
  },
  {
    id: 2,
    flowers: ["snapdragon", "sunflower"],
    totalFlowers: 10,
    price: 3400
  }
];*/

// Question-8 data
/*const donationData = [
  {
    id: 1,
    name: "Nitin",
    Donation: 7800
  },
  {
    id: 2,
    name: "Mehak",
    Donation: 9500
  },
  {
    id: 3,
    name: "Mehul",
    Donation: 65000
  },
  {
    id: 4,
    name: "Nina",
    Donation: 560
  }
];*/

// Question-9 data
/*const cars = [
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

// Question-10 data
const studentData = [
  {
    id: 1,
    name: "Nitin",
    marks: 78
  },
  {
    id: 2,
    name: "Mehak",
    marks: 95
  },
  {
    id: 3,
    name: "Mehul",
    marks: 65
  },
  {
    id: 4,
    name: "Nina",
    marks: 56
  }
];
export default function App() {
  return (
    <div className="App">
      {/* <ImageCard image="https://picsum.photos/200" height={300} width={300} /> */}
      {/* <HigherMagnitudeCartoonCharacter cartoonCharacterDetails={cartoons} /> */}
      {/* <EvenMagnitudeCartoonCharacter cartoonCharacterDetails={cartoons} /> */}
      {/* <IntelligentCartoonCharacters
        cartoonCharacterDetails={cartoons}
        superPower="Intelligence"
      /> */}
      {/* <FreshVegetables vegetables={vegetables} /> */}
      {/* <PriceOfBouquetWithRoses bouquet={bouquet} /> */}
      {/* <ExpensiveFlowers bouquet={bouquet} /> */}
      {/* <TotalDonatedAmount donationData={donationData} /> */}
      {/* <TotalNoOfCarsInEachCategory cars={cars} /> */}
      <CriteriaOfStudentCertification studentData={studentData} />
    </div>
  );
}
