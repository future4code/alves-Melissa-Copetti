import { AuthenticationError } from './../Error/AuthenticationError';
import { ICreatePostInputDTO } from './../Models/Post';
import { PostDataBase } from "../DataBase/PostDataBase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { ParamsError } from '../Error/ParamsError';



export class PostBusiness {
    constructor(
        private postDatabase: PostDataBase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}
public createPost = async (input: ICreatePostInputDTO) => {
    const{token, content} = input

    const payload = this.authenticator.getTokenPayload(token)

    if (!payload) {
        throw new AuthenticationError;
        
    }
    if(content.length < 1) {
        throw new ParamsError;
        
    }

    const id = this.idGenerator.generate()
}
}