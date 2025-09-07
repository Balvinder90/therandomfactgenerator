function generateRandomData(arr) {
  const randomFact = arr[1][Math.floor(Math.random() * arr[1].length)];
  const factsArr = arr[1].filter((fact) => fact.id !== randomFact.id);
  const newFacts = [randomFact, factsArr];
  return newFacts;
}

export { generateRandomData };
