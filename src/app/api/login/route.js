import { connection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request, {params}){
    try {
        const datos = await request.json();
        
        const result = await connection.query('select nombre from usuarios where email=? and contraceña=?',[datos.email,datos.password]);
        return NextResponse.json(result[0]);
    } catch (error) {
       console.log(""+error) 
       return NextResponse.json({msj:"error"})
    }
    
}