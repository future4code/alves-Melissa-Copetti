export const goToLogin = (navigate) => {
    navigate("login")
}

export const goToAddRecipesPage = (navigate) => {
    navigate("/addrecipes")
}

export const goToRecipesList = (navigate) => {
    navigate("/")
}

export const goToSingUpPage= (navigate) => {
    navigate("/singup")
}

export const goToRecipesDetail = (navigate) => {
    navigate("/details/id")
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToError = (navigate) => {
    navigate("")
}