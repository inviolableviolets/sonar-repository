import isPalindrome from "./isPalindrome";

describe("Given an isPalindrome function", () => {
  describe("When it creives 'nItïn '", () => {
    test("Then it should return true", () => {
      const text = "nItïn";

      const isMirrored = isPalindrome(text);

      expect(isMirrored).toBe(true);
    });
  });
});
