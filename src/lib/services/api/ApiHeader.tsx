import axios from "axios";
export const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")?? ""}`
    }
}
const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    timeout: 5000,
})

instance.interceptors.response.use((response) => {
    return response
}, (error) => {
    switch (error.response.status) {
        case 401:
            window.alert("再度ログインしてください")
            localStorage.clear()
            // eslint-disable-next-line no-restricted-globals
            location.reload()
            break
        case 404:
            break
        default:
            window.alert("問題が発生しました")
            return Promise.reject(error)
    }
})

export default instance



