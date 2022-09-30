import { UserBusiness } from "../../../business/UserBusiness";
import { ISignupInputDTO } from "../../../models/User";
import { AuthenticatorMock } from "../AuthenticatorMock";
import { HashManagerMock } from "../HashManagerMock";
import { IdGeneratorMock } from "../idGeneratorMock";
import { UserDatabaseMock } from "../UserDatabaseMock";

describe("Testando o método signup da UserBusiness", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
    new IdGeneratorMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  );

  test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
    const input: ISignupInputDTO = {
      email: "teste@gmail.com",
      name: "Teste",
      password: "teste123",
    };

    const response = await userBusiness.signup(input);
    expect(response.message).toBe("Cadastro realizado com sucesso");
    expect(response.token).toBe("token-mock-normal");
  });
});
