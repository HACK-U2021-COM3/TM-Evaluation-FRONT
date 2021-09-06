export type searchResponseType = {
    "location": {
        lat: number,
        lng: number
    }
    "address": string,
    "name": string
}

export const mockSearchResult: searchResponseType[] = [
    {
        "location": {
            "lat": 35.18145060000001,
            "lng": 136.9065571
        },
        "address": "日本、愛知県名古屋市",
        "name": "名古屋市"
    }
]
