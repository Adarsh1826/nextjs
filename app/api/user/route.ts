import { log } from "console";
import { NextResponse } from "next/server";
import { use } from "react";

// for get handler
const obj = [{}]
interface test{
    username:string,
    email:string
}
export function GET(req:NextResponse){
    //console.log(typeof data);
    return Response.json({
       username:"test", 
       email:"test"
    }satisfies test)
}
export async  function POST(req:NextResponse){
    const body = await req.json()
    const {name,pass} = body;
    obj.push({
        name,
        pass
    })
    console.log(obj)
    return Response.json({
        "msg":"Done"
    })

}
