import prisma from "@/lib/prisma"
import { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export async function POST(req: NextRequest) {
	const body = await req.json()
	try {
		const tasks = await prisma.task.create({
			data: {
				title: body.title,
				description: body.description,
				userId: body.userId,
			},
		})
		return NextResponse.json({ msg: "Task created successfully" })
	} catch (error) {
		return NextResponse.json({ msg: "Task creation failed" }, { status: 500 })
	}
	
	
}
