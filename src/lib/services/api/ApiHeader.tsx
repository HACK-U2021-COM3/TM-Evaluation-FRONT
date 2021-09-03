export class ApiHeader {
    protected url: string
    protected config: any
    constructor() {
        this.url = process.env.REACT_APP_API_URL ?? ""
        this.config = {
            header: {
                Authorization: `Bearer ${localStorage.getItem("TOKEN")?? ""}`
            }
        }

    }
 }