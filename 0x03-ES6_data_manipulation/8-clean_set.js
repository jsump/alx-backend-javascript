export default function cleanSet(set, startString) {
  const valuesAfterFilter = [...set].filter((value) => value.startsWith(startString));
  return valuesAfterFilter.join('-');
}
