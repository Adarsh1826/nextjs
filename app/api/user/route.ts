import { use } from "react";

// for get handler
interface test{
    username:string,
    email:string
}
export function GET(){
    //console.log(typeof data);
    return Response.json({
       username:"test", 
       email:"test"
    }satisfies test)
}

