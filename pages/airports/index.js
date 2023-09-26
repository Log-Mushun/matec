import WebGiViewer from '../../components/Airports/WebGiViewer'
import LogoDarkComp from '../../components/Airports/LogoDarkComp'
import BurgerMenu from '../../components/Airports/BurgerMenu'
import AirportsComp from '../../components/Airports/AirportsComp'
import DriverOne from '../../components/Airports/DriverOne'

export default function Airports() {
  return (
    <> 
      <WebGiViewer/>
      <div className="flex flex-row">
        <LogoDarkComp/>
        <BurgerMenu/>
      </div>
      <Airports/>
      <DriverOne/>
    </>
  )
}
