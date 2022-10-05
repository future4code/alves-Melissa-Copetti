

export class PizzaBusiness {
    constructor(
        private pizzaDatabase: PizzaDataBase,
        private idGenerator: IdGenerator,
   
    ) {}

    public getPizzas = async () => {
       

 

        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)

        

        await this.userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response: ISignupOutputDTO = {
            message: "Cadastro realizado com sucesso",
            token
        }

        return response
    }

    public login = async (input: ILoginInputDTO) => {
        const { email, password } = input

        if (typeof email !== "string") {
            throw new ParamsError("Parâmetro 'email' inválido")
        }

        if (typeof password !== "string") {
            throw new ParamsError("Parâmetro 'password' inválido")
        }

        if (password.length < 6) {
            throw new ParamsError("Parâmetro 'password' inválido: mínimo de 6 caracteres")
        }

        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new ParamsError("Parâmetro 'email' inválido")
        }

        const userDB = await this.userDatabase.findByEmail(email)
        
        if (!userDB) {
            throw new NotFoundError("Email não cadastrado")
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const isPasswordCorrect = await this.hashManager.compare(
            password,
            user.getPassword()
        )

        if (!isPasswordCorrect) {
            throw new AuthenticationError("Password incorreto")
        }

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response: ILoginOutputDTO = {
            message: "Login realizado com sucesso",
            token
        }

        return response
    }
}