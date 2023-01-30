Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

convertHTML("Dolce & Gabbana");
