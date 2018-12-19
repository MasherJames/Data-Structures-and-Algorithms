topic = {};

const namespace = (root, path, value) => {
  const trace = root || {};
  trace.path = value;
  return value;
};
console.log(
  namespace(topic, topic.blowingKk, "This is Test Driven Development")
);
