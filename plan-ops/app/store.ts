import {create } from 'zustand'

const userStore = create<userStoreState>((set)=>({
        name: "",
        setName:((name:string)=>{
                set({name: name})
        })
}))

interface userStoreState {
        name: string
        setName:(value:string)=>void
}
export default userStore
