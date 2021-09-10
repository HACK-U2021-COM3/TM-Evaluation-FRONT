const emojiList = [
    "1f400",
    "1f401",
    "1f402",
    "1f403",
    "1f404",
    "1f405",
    "1f406",
    "1f407",
    "1f408",
    "1f409",
    "1f40a",
    "1f40b",
    "1f40c",
    "1f40d",
    "1f40e",
    "1f40f",
    "1f410",
    "1f411",
    "1f412",
    "1f413",
    "1f414",
    "1f415",
    "1f416",
    "1f417",
    "1f418",
    "1f419",
    "1f41a",
    "1f41b",
    "1f41c",
    "1f41d",
    "1f41e",
    "1f41f",
    "1f420",
    "1f421",
    "1f422",
    "1f423",
    "1f424",
    "1f425",
    "1f426",
    "1f427",
    "1f428",
    "1f429",
    "1f42a",
    "1f42b",
    "1f42c",
    "1f42d",
    "1f42e",
    "1f42f",
    "1f430",
    "1f431",
    "1f432",
    "1f433",
    "1f434",
    "1f435",
    "1f436",
    "1f437",
    "1f438",
    "1f439",
    "1f43a",
    "1f43b",
    "1f43c",
]

const shuffle = ([...array]) => {
    for (let index = array.length - 1; index >= 0; index--) {
        const randomNum = Math.floor(Math.random() * (index + 1))
        const num = array[index]
        array[index] = array[randomNum]
        array[randomNum] = num
    }
    return array
}

export const randomPick = (list: string[] = emojiList): string => {
    return shuffle(list).find(_=>_)
}
