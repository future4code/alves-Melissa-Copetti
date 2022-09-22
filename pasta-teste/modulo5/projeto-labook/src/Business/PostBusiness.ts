import { PostDataBase } from "../DataBase/PostDataBase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";



export class PostBusiness {
    constructor(
        private postDatabase: PostDataBase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

}