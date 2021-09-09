const dayjs = require("dayjs")

export const dateConvert = {
    convertToDatetime(date) {
        return dayjs(date).format("YYYY/MM/DD")
    }
}