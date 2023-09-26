
import LogoDarkComp from '../../components/Airports/LogoDarkComp'
import BurgerMenu from '../../components/Airports/BurgerMenu'
import AirportsComp from '../../components/Airports/AirportsComp'
import DriverOne from '../../components/Airports/DriverOne'

export default function Airports() {
  return (
    <> 
      <div className="flex flex-row">
        <LogoDarkComp/>
        <BurgerMenu/>
      </div>
      <AirportsComp/>
      <DriverOne/>
    </>
  )
}
