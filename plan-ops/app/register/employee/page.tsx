"use client"
import axios from "axios"
import { useState } from "react"

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
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<input
					type="text"
					placeholder="Name"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="email"
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">Register</button>
			</form>
		</div>
	)
}
