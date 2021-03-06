import { useEffect, useMemo, useState } from "react"

const useScreenSize = () => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const resize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useMemo(() => {
        resize()
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [])

    return {
        width,
        height
    }
}

export default useScreenSize