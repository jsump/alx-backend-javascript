export default function cleanSet(set, startString) {
  const valuesAfterFilter = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length));

  return valuesAfterFilter.join('-');
}
