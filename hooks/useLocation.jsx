import { useState, useEffect } from "react"
import * as Location from 'expo-location'

export default useLocation = () => {
    const [location, setLocation] = useState()

    useEffect(()=> {
        const requestLocationPermission = async() => {
            try{
                const {status} = await Location.requestForegroundPermissionsAsync()
                
                if(status!=='granted' )
                    return;
                const {coords: {latitude, longitude}} = await Location.getLastKnownPositionAsync();
                setLocation({latitude, longitude})
                

            }catch(err){
                console.log("Error in fetching Location", err)
            }
        }

        requestLocationPermission()
    }, [])

    return location
}