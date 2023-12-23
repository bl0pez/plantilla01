interface Position {
    lat: number;
    lng: number;
}

interface marker {
    position: Position;
    title: string;
    subtitle: string;
    image: string;
}

export const markers: marker[] = [
    {
      position: { lat: -18.478031, lng: -70.312380 },
        title: "Marker 1",
        subtitle: "      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, possimus.",
        image: '/map/1.png'  
    },
    {
        position: { lat: -18.470255, lng: -70.307166 },
        title: "Marker 2",
        subtitle: "      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, possimus.",
        image: '/map/2.png'
    },
    {
        position: { lat: -18.477479, lng: -70.318436 },
        title: "Marker 3",
        subtitle: "      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, possimus.",
        image: '/map/3.png'
    }
]