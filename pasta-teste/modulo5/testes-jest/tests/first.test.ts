import { checkIfEven } from "./Exercicios/checkIfEnen";
import { changeToUpper } from "./Exercicios/changeToUpper";
import { separateToLetters } from "./Exercicios/separateToLetters";
import { stringToNumber } from "./Exercicios/stringToNumber";
import { numberOfCarateres } from "./Exercicios/numberOfCaracteres";
import { users } from "./Exercicios/constAstrodev";
describe("Exercício com Jest", () => {
  test("Numero retorna par", () => {
    const input = 20;
    const output = checkIfEven(input);

    expect(output).toBe(true);
  });

  test("Palavra em caixa alta", () => {
    const input = "bananinha";
    const output = changeToUpper(input);

    expect(output).toBe("BANANINHA");
  });

  test("Palavras separadas", () => {
    const input = "bananinha";
    const output = separateToLetters(input);

    expect(output).toEqual(["b", "a", "n", "a", "n", "i", "n", "h", "a"]);
  });

  test("Converter para número", () => {
    const input = "350";
    const output = stringToNumber(input);

    expect(output).toEqual(350);
  });
  test("Número de caracteres", () => {
    const input = "palavra";
    const output = numberOfCarateres(input);

    expect(output).toEqual(7);
  });

  test("Número aleatório entr 1 e 10", () => {
    const output = 5;
    expect(output).toBeGreaterThanOrEqual(1);
    expect(output).toBeLessThanOrEqual(10);
  });

 
});
