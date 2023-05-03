const isPalindrome = (text) => {
  const formattedText = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f.,:;()_?¿!¡-\s]/g, "");

  const reversedText = [];

  for (let i = formattedText.length; i >= 0; i--) {
    reversedText.push(formattedText[i]);
  }

  const textToCompare = reversedText.join("");

  return formattedText === textToCompare;
};

export default isPalindrome;
