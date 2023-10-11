import AirportsFooter from "@/components/AirportsFooter";
import HeaderExperience from "@/components/Headers/HeaderExperience";
import { MyContextProvider } from "@/MyContextProvider";
import WebGiViewer from "./WebGiViewer";
import Plexus from "@/components/Plexus";

const ExperienceLayout = ({ children }) => {
    return (
        <MyContextProvider>
            <div
                className={'text-white relative'}
            >
                <HeaderExperience/>
                {children}
                <AirportsFooter />
            </div>
        </MyContextProvider>
    );
};

export default ExperienceLayout;