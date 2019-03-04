// Using btoa for the browser
const hexToBase64 = hex => {
  return btoa(
    hex
      .match(/\w{2}/g)
      .map(e => String.fromCharCode(parseInt(e, 16)))
      .join("")
  );
};
console.log(
  hexToBase64(
    "49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d"
  )
);

// Using Buffer
const a = Buffer.from("E6FF00F0", "hex");
console.log(a.toString("base64"));
