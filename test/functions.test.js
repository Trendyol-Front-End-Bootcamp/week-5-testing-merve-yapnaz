const functions = require("../src/functions");

describe("bootcamp()", () => {  
  describe("devide function", () => {
    it("should return devide numbers", () => {
        expect(functions.devide(4, 2)).toBe(2);
      });

    it("should throw error when devide by zero", () => {
        expect(() => {
            functions.devide(4, 0)
        }).toThrow("Devide By Zero!");
      });

    it("should throw error when dividend is not a number", () => {
        expect(() => {
            functions.devide("NaN", 2)
        }).toThrow("Invalid Numbers!");
      });

      it("should throw error when divisor is not a number", () => {
        expect(() => {
            functions.devide(2,"NaN")
        }).toThrow("Invalid Numbers!");
      });
  });

  describe("toPascalCase function", () => {
    it("should return title with capitalize the first letter of each word", () => {
        expect(functions.toPascalCase("test")).toBe("Test");
      });   

      it("should return empty string ", () => {
        expect(functions.toPascalCase("")).toBe("");
      });   
  });
});

