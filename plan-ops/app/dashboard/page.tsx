'use client'

import { useEffect, useState } from "react"
import { useTask } from "../hooks"
import userStore from "../store"

export default function Dashboard() {
        const [task, setTask] = useState('')
        const user = userStore()
        const { debouncedTask } = useTask(task)
                useEffect(() => {
                        console.log(debouncedTask)
                }, [debouncedTask])
    return (
        <div>

            <h1>Dashboard</h1>
            <input type="text" placeholder="Task" value={task} onChange={(e) => setTask(e.target.value)} />
            <br /><br />
            {user.name}
        </div>
    )
}