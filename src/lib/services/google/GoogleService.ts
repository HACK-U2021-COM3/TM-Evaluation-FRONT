export class GoogleService {
    async loginWithGoogle(res: any): Promise<any> {
        try {
            const {tokenId, profileObj} =  res
            const user = {
                name: profileObj.name,
                imageUrl: profileObj.imageUrl
            }
            localStorage.setItem("token", tokenId)
            localStorage.setItem("current_user", JSON.stringify(user))      
            return {tokenId, profileObj}    
        } catch(e) {
            console.error(e)
            localStorage.clear()
        }
    }

    async logoutWithGoogle(): Promise<void> {
        localStorage.clear()
    }
}