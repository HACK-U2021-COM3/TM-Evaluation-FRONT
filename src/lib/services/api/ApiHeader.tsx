export class ApiHeader {
    protected url: string
    protected config: any
    constructor() {
        this.url = process.env.REACT_APP_API_URL ?? ""
        this.config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")?? ""}`
            }
        }

    }
 }