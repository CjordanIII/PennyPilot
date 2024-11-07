"use server"
import {aiQuery} from "@/services/ai.service"
// TODO change types
export const sendAiInputQuery = async (query:FormData):Promise<void> =>{
    // TODO add async opp
    
    if(query !== null ){
        const aiquery:FormDataEntryValue |null = query.get("aiquery")
        aiQuery(aiquery)
    }else if(query === null){
        // TODO handle logic may
        console.log("api query is null")
       
    }
 
    
}