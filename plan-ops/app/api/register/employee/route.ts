
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import prisma from "@/lib/prisma";


export  async function POST(req:NextRequest){
        const body = await req.json()
        const username  =  body.username 
        const password = body.password
        const email =  body.email
        const name = body.name
        const hash  = await bcrypt.hash(password ,  5)

        try{
                const user = await prisma.user.create({
                        data:{
                                email:body.email,
                                name:name,
                                password:hash,   
                                
                        }
                }) 
                console.log(body)
                return NextResponse.json({
                        msg:"User created successfully",
                        user:{
                                id:user?.id,
                                name:user?.name,
                                email:user?.email,
                                role:user?.role,
                                createdAt:user?.createdAt,
                                updatedAt:user?.updatedAt,
                               
                        }
                })
        }catch(e){
                console.error(e)
                return NextResponse.json({
                        msg:"User creation failed",
                        error:e
                })
        }

}