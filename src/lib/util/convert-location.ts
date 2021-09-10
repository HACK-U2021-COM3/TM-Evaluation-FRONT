export const convertLocationObjectToString = (location: {lat: number, lng: number} | undefined): string => {
    if(!location) return ""
    return `${location.lat},${location.lng}`
}
