import { HomePage } from '../Components/pages/HomePage/HomePage';
import { AdminHomePage } from '../Components/pages/AdminHomePage/AdminHomePage'
import { ApplicationFormPage } from '../Components/pages/ApplicationFormPage/ApplicationFormPage'
import { ListTripsPage } from '../Components/pages/ListtTripsPage/ListTripsPage';
import { LoginPage } from '../Components/pages/LoginPage/LoginPage'
import { TripDetailsPage } from '../Components/pages/TripDetailsPage/TripDetailsPage'
import { CriateTripPage } from '../Components/pages/CreateTripPage/CriateTripPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  GlobalStyle  from './GlobalStyle';

export const Router = () => {
  return (
        <BrowserRouter>
          <GlobalStyle/> 
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="admin/trips/list" element={<AdminHomePage/>} />
          <Route path="trips/list/application" element={<ApplicationFormPage/>} />
          <Route path="admin/trips/create" element={<CriateTripPage />} />
          <Route path="trips/list" element={ <ListTripsPage />} />
          <Route path="admin/trips/:id" element={<TripDetailsPage />} /> 
          
        </Routes>
      </BrowserRouter>
    
  )
}
