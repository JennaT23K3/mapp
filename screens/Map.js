import { useState, useEffect  } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

export default function Map(props){
    const [marker,setMarker] = useState(null);
    const [marker2,setMarker2] = useState(null);
    const [marker3,setMarker3] = useState(null);

    /*
    useEffect(()=>{
        (async() =>{
            getUserPosition()
        })()
    },[])
    */

/*
    useEffect(()=>{
        (async() =>{
            showMarker()
        })()
    },[])
*/


        const showMarker = (e) =>{
        const coords = e.nativeEvent.coordinate
        setMarker(coords)
        }
        
        const showMarker2 = (e) =>{
        const coords = e.nativeEvent.coordinate
        setMarker2(coords)
        }

        const showMarker3 = (e) =>{
        const coords = e.nativeEvent.coordinate
        setMarker3(coords)
        }


    return(
        <MapView
        style={styles.map}
        region={props.location}
        onLongPress={showMarker}
        >
            {marker &&
            <Marker
            coordinate={{latitude: marker.latitude,longitude: marker.longitude}}
            />
            }
            {marker2 &&
            <Marker
            coordinate={{latitude: marker2.latitude,longitude: marker2.longitude}}
            />
            }
            {marker3 &&
            <Marker
            coordinate={{latitude: marker3.latitude,longitude: marker3.longitude}}
            />
            }
        </MapView>
    );
}



const styles = StyleSheet.create({
    map:{
        height: '100%',
        width: '100%'
    }
});