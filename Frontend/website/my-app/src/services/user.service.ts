export interface UserProfile{
    photo:string,
    name:string
}

export const userProfile = ():UserProfile=>{
    return {
        photo:"/assets/jpegs/pfp.jpg",
        name:"Rayn"
    }
}