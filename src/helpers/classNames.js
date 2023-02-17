function convertString(val) {
  if (typeof val === "string") return val;
  if (typeof val === "object") {
    if (Array.isArray(val)) return val.join(" ");
    return Object.keys(val).reduce((acc, key) => {
      return !!val[key] ? acc + " " + key : acc;
    });
  }
  return "";
}

/// mergeString

function mergeString() {
  let str = "";
  for (let i = 0; i < arguments.length; i++) {
    if (i === arguments.length - 1) str += convertString(arguments[i]);
    else str += convertString(arguments[i]) + " ";
  }
  return str;
}

export default mergeString;
