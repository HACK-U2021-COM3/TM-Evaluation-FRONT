import { decode } from "@googlemaps/polyline-codec";

export const decordMap = (paths: string[], num: number): {lat: number, lng: number}[] => {
    const res = []
    for (let path of paths) {
        const decodedList = decode(path, num)
        const latLng = decodedList.map(item => {
            return {
                lat: item[0],
                lng: item[1]
            }
        })
        res.push(...latLng)
    }
    return res
}
