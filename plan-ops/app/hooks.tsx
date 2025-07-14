import { useEffect, useState } from "react"
import userStore from "./store"

export function useTask(task: string) {
    const [debouncedTask, setDebouncedTask] = useState(task)
    const user = userStore()
        useEffect(() => {
            const timeout = setTimeout(() => {
                setDebouncedTask(task)
                user.setName(task)
            }, 1000)
            return () => clearTimeout(timeout)
        }, [task])
    return { debouncedTask }
}


