
import LogoDarkComp from '../../components/Airports/LogoDarkComp'
import BurgerMenu from '../../components/Airports/BurgerMenu'
import AirportsComp from '../../components/Airports/AirportsComp'
import DriverOne from '../../components/Airports/DriverOne'
import WebGiViewer from '../../components/Airports/WebGiViewer'

export default function Airports() {
  return (
    <> 
    <WebGiViewer/>
      <div className="flex flex-row">
        <LogoDarkComp/>
        <BurgerMenu/>
      </div>
      <AirportsComp/>
      <DriverOne/>
    </>
  )
}
