/**
 * @param {string} vector - String representation of a vector in i,j,k format
 * @returns {number[]} - Coefficients of the passed vector
 */
const returnVectorCoefficients = (vector: string): number[] => {
  // Return empty array if no vector
  if (vector.length === 0) {
    return [];
  }

  const noSpaceVector: string = vector.replace(/ /g, "");
  const vectorArr: string[] = noSpaceVector.split(/[-/+]/);

  const coefficientArr: number[] = vectorArr
    .map((e) => (e.length === 1 ? "1" + e : e))
    .map((e) => parseInt(e));

  /**
    Add a zero to a missing i, j or k
  */
  if (noSpaceVector.indexOf("i") === -1) {
    coefficientArr.splice(0, 0, 0);
  }

  if (noSpaceVector.indexOf("j") === -1) {
    coefficientArr.splice(1, 0, 0);
  }

  if (noSpaceVector.indexOf("k") === -1) {
    coefficientArr.splice(2, 0, 0);
  }

  return coefficientArr;
};

const solveCrossVector = (vector1: string, vector2: string): number[] => {
  const coeffArr1: number[] = returnVectorCoefficients(vector1);
  const coeffArr2: number[] = returnVectorCoefficients(vector2);

  if (coeffArr1.length === 0 || coeffArr2.length === 0) {
    console.log("Empty vector was passed");
    return [];
  }

  return [
    coeffArr1[1] * coeffArr2[2] - coeffArr1[2] * coeffArr2[1],
    coeffArr1[2] * coeffArr2[0] - coeffArr1[0] * coeffArr2[2],
    coeffArr1[0] * coeffArr2[1] - coeffArr1[1] * coeffArr2[0],
  ];
};

const solveDotVector = (vector1: string, vector2: string): number => {
  const coeffArr1: number[] = returnVectorCoefficients(vector1);
  const coeffArr2: number[] = returnVectorCoefficients(vector2);

  if (coeffArr1.length === 0 || coeffArr2.length === 0) {
    console.log("Empty vector was passed");
    return 0;
  }

  return (
    coeffArr1[0] * coeffArr2[0] +
    coeffArr1[1] * coeffArr2[1] +
    coeffArr1[2] * coeffArr2[2]
  );
};

const vector1 = "i + 2k";
const vector2 = "2k";
const vector3 = "i - j + 2k";
const vector4 = "";

console.log(solveCrossVector(vector1, vector2));
console.log(solveCrossVector(vector3, vector4));

console.log(solveDotVector(vector1, vector2));
console.log(solveDotVector(vector3, vector4));
