import { connection } from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET(){
    try {
        
        const result = await connection.query('select * from usuarios;')
        return NextResponse.json(result[0]);
    } catch (error) {
        console.log("error es:"+error);
        return NextResponse(error);
    }
}
export async function POST(request, {params}){
    try {
        const data = await request.json();
        const result = await connection.query('insert into usuarios values(null,?,?,?)',[data.name,data.password,data.email]);
        
        return NextResponse.json(result[0]);
    } catch (error) {
       console.log(""+error) 
    }
    return NextResponse.json('creado')
}