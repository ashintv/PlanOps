"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { useState } from "react"


//TODO: replace with zod and use react-hook-form
export default function RegisterEmployeePage() {
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const response = await axios.post("/api/register/employee", {
			username,
			email,
			password,
		})
		alert(response.data.msg)
	}

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1>Register Employee</h1>
			<form onSubmit={handleSubmit}>
				<Input
					type="text"
					placeholder="Name"
					onChange={(e) => setUsername(e.target.value)}
				/>

				<Input
					type="email"
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
				/>

				<Input
					type="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>

				<Button type="submit">Register</Button>
			</form>
		</div>
	)
}
