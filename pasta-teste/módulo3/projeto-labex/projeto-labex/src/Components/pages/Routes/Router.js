import { HomePage } from '../HomePage';
import { AdminHomePage } from '../AdminHomePage'
import { ApplicationFormPage } from '../ApplicationFormPage'
import { ListTripsPage } from '../ListTripsPage';
import { LoginPage } from '../LoginPage'
import { TripDetailsPage } from '../TripDetailsPage'
import { CriateTripPage } from '../CriateTripPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export const Router = () => {
  return (
        <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="admitrips/list" element={<AdminHomePage/>} />
          <Route path="trips/list/application" element={<ApplicationFormPage/>} />
          <Route path="admin/trips/create" element={<CriateTripPage />} />
          <Route path="trips/list" element={ <ListTripsPage />} />
          <Route path="admin/trips/:id" element={<TripDetailsPage />} /> 
        </Routes>
      </BrowserRouter>
    
  )
}
