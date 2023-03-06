// this is not a domain-general utility; it's specific to the current project
function pluralToSingular(str) {
  return str.endsWith("s") ? str.slice(0, -1) : str;
}

export default pluralToSingular;
