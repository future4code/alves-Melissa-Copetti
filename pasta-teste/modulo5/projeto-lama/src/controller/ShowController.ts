import { ShowBusiness } from "../business/ShowBusiness"


export class ShowController {
    constructor(
        private ShowBusiness: ShowBusiness
    ) {}

//     public signup = async (req: Request, res: Response) => {
//         try {
//             const input: ISignupInputDTO = {
//                 name: req.body.name,
//                 email: req.body.email,
//                 password: req.body.password
//             }

//             const response = await this.userBusiness.signup(input)
//             res.status(201).send(response)
//         } catch (error) {
//             console.log(error)
//             if (error instanceof BaseError) {
//                 return res.status(error.statusCode).send({ message: error.message })
//             }
//             res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" })
//         }
//     }

//     public login = async (req: Request, res: Response) => {
//         try {
//             const input: ILoginInputDTO = {
//                 email: req.body.email,
//                 password: req.body.password
//             }

//             const response = await this.userBusiness.login(input)
//             res.status(200).send(response)
//         } catch (error) {
//             console.log(error)
//             if (error instanceof BaseError) {
//                 return res.status(error.statusCode).send({ message: error.message })
//             }
//             res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" })
//         }
//     }
}