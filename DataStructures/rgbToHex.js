const toHex = c => {
    if (c > 255) c = 255
    if (c < 0) c = 0
    let charHex = c.toString(16).toUpperCase();
    return charHex.length === 1 ? "0" + charHex : charHex;
}

const rgb = (r, g, b) => {
    return toHex(r) + toHex(g) + toHex(b);
}