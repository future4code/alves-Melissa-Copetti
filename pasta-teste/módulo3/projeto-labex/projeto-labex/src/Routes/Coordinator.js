export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToAdminHome = (navigate) => {
    navigate("/admin/trips/list")
}
export const goToApplicationFormPage = (navigate) => {
    navigate("/trips/list/application")
}

export const goToCriateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}


export const goToListTripPage = (navigate) => {
    navigate("/trips/list")
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToTripDetails = (navigate) => {
    navigate ("admin/trips/:id")
}
