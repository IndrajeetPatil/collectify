function extractCommaSeparatedItems(str) {
  const items = str.split(",").map((item) => item.trim());
  return items;
}

export default extractCommaSeparatedItems;
