import type {IncomingMessage,ServerResponse} from "http"

export default async (req:IncomingMessage,res:ServerResponse)=>{
    return {
        data:"a",
        b:"u"
    }
}