import { useEffect, useState} from "react"

const useUser = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const load = async () :Promise<void> => {
            try {
                setUser(null)
                setError(null)
    
            } catch(e) {
                setUser(null)
                setError(new Error("ログインしてください"))    
            }
        }
        void load()
    }, [])
    return { user, error }
}

export default useUser;