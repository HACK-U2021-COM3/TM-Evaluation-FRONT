export type pointResponseType = {
    "location": {
        "lat": number,
        "lng": number
    }
    "address": string,
    "stay_time": number //追加点　出発前に居た時間 = 待機時間なのでこういう書き方なら...,
}

export type measureFixResponseType = {
    "distance": number,
    "duration": number,
    "routes_points": Array<string>
}

export const mockPointResult: pointResponseType[] = [
    {
        "location": {
            "lat": 35.18685809999999,
            "lng": 136.9480216
        },
        "address": "日本、〒461-0047 愛知県名古屋市東区大幸南１丁目１−１",
        "stay_time": 10 //追加点　出発前に居た時間 = 待機時間なのでこういう書き方なら...,
    },
    {
        "location": {
            "lat": 35.1697009,
            "lng": 136.9383837
        },
        "address": "日本、愛知県名古屋市千種区１０ 今池駅",
        "stay_time": 10 //追加点　出発前に居た時間 = 待機時間なのでこういう書き方なら...,
    }
]