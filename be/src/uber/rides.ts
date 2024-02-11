import { generateRandomRides } from "../utils/randomData";

export default [
  ...generateRandomRides(10, 'uber')
];
