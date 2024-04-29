import "bootstrap/dist/css/bootstrap.min.css"
import Signup from './SignUp'
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import Login from './Login'
import Homepage from './homepage'
import DietInfo from "../components/DietInfo/DietInfo"
import Dashboard from "../components/Dashboard/Dashboard"
import MealPlan from "../components/MealPlan/MealPlan"
import BMI from "../components/BMI/BMI"
import Account from "../components/Account/Account"
import Notes from "../components/Notes/Notes"
import WaterConsumption from "../components/WaterConsumption/WaterConsumption"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Homepage/>}></Route>
        <Route path='/dietinfo' element={<DietInfo/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/mealplan' element={<MealPlan/>}></Route>
        <Route path='/bmi' element={<BMI/>}></Route>
        <Route path='/account' element={<Account/>}></Route>
        <Route path='/notes'element={<Notes/>}></Route>
        <Route path='/water'element={<WaterConsumption/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App
