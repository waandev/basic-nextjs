import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Custom404(){
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        },2000)
    },[])
    return(
        <div>
            <h1 className="title-not-found">Ooops...</h1>
            <h1 className="title-not-found">Halaman yang Anda cari tidak ditemukan</h1>
        </div>
    )
}