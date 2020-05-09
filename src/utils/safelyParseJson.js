const safelyParseJson = (parseString) => {
  try {
    return JSON.parse(parseString);
  } catch (e) {
    return null;
  }
};

export default safelyParseJson;
