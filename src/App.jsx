
import AccessCamp from './components/AccessCamp'
import ButtonAcess from './components/ButtonAcess'
import OptionsPassword from './components/OptionsPassword'
import Register from './components/Register'
import TitleHeader from './components/TitleHeader'
import './index.css'
import { Icon } from './img/Icon'

function App() {

  return (

    <div className=' flex justify-center items-center'>
      <div className=' hidden lg:block w-2/4'>
        <Icon />
      </div>
      <div className=' mt-10 w-96'>
        <TitleHeader />
        <AccessCamp TitleComponent={"Login"} TypeInput={"text"} PlaceInput={"Entre com seu usuario"} />
        <AccessCamp TitleComponent={"Senha"} TypeInput={"password"} PlaceInput={"Entre com sua senha"} />
        <OptionsPassword />
        <ButtonAcess />
        <Register />
      </div>
    </div>
  )
}

export default App
