import { userProfile,UserProfile } from "@/services/user.service"


export const profileAction = ():UserProfile=>{
    const data:UserProfile= userProfile()
    // some logic 
    return data
}