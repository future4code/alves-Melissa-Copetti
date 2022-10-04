import { ShowDatabase } from "../dataBase/ShowDatabase";
import { ConflictError } from "../errors/ConflictError";
import { ParamsError } from "../errors/ParamsError";
import { ISubsbandInputDTO, Show } from "../models/Show";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export class ShowBusiness {
  constructor(
    private showDatabase: ShowDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  private subsband = async (input: ISubsbandInputDTO): Promise<void> => {
    const { band, startsAt } = input;

    if (typeof band !== "string") {
      throw new ParamsError("Parâmetro 'name' inválido: deve ser uma string");
    }


 

    const isBandAlreadyExists = await this.showDatabase.findByBand(band);

    if (isBandAlreadyExists) {
      throw new ConflictError("Banda já cadastrada");
    }

    const id = this.idGenerator.generate();
 

    const show = new Show();

    await this.showDatabase.createShow(show);

    const payload: ITokenPayload = {
      id: show.getId(),
      
    };

    const token = this.authenticator.generateToken(payload);

    const response: IsubsBandOutputDto = {
      message: "Cadastro realizado com sucesso",
      token,
    };

    return response;
  };

  }
