const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  if (typeof endpoint !== 'object' || endpoint === null) {
    throw new Error('Cannot process');
  }
  const { protocol, name } = endpoint;
  const key = `${protocol}-${name}`;

  if (!weakMap.has(key)) {
    weakMap.set(key, 0);
  }

  const count = weakMap.get(key) + 1;
  weakMap.set(key, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
