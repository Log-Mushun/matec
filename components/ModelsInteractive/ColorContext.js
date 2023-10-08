import { useState } from "react";
import { createContext } from "react";
import { useGLTF } from '@react-three/drei';



export const ColorContext = createContext({});


export const ColorContextProvider = ({children}) => {
    const { materials } = useGLTF("/scene.gltf");
    const [currentColor, serCurrentColor] = useState({
        color:"#e0eef7",
        text:"Feature 1",
        rgbColor:"224, 238, 247",
    })

    let changeColorContext = (colorObj) => {

        materials.Body.color.set(colorObj.color);
        serCurrentColor(colorObj)
      }

    return(
        <ColorContext.Provider value={{currentColor, changeColorContext}}>
            {children}
        </ColorContext.Provider>
    )

}