export type planResponseType = {
    "id": number
    "title": string,
    "sum_time": number
    "updated_at": string
}

export type savePlanRequestType = {
   title: string,
  sum_time: number,
  details: [
    {
      place_location: {
        lat: number,
        lng: number
      },
      stay_time: number,
      order_number: number
    }
  ]
}

export const mockPlans: planResponseType[] = [
    {
        "id": 1,
        "title": "string",
        "sum_time": 0,
        "updated_at": "string"
    },
    {
        "id": 2,
        "title": "string",
        "sum_time": 10,
        "updated_at": "string"
    }
]

export type planDetailResponseType = {
    "place_location": {
        "lat": number,
        "lng": number
      },
      "stay_time": number,
      "order_number": number
}


export const mockPlansDetail: planDetailResponseType[] = []