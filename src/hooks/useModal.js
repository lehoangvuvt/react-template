import { useState } from "react"

const useModal = () => {
    const [isOpen, setOpen] = useState(true)

    const open = () => setOpen(true)

    const close = () => setOpen(false)

    return {
        open,
        close,
        isOpen
    }
}

export default useModal