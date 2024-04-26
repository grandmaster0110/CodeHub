import useAppContext from "@/hooks/useAppContext"
import useSocket from "@/hooks/useSocket"
import ACTIONS from "@/utils/actions"
import UserStatus from "@/utils/status"
import { useEffect, useRef } from "react"
import { toast } from "react-hot-toast"
import { useLocation, useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

function FormComponent() {
    const location = useLocation()
    const { currentUser, setCurrentUser, status, setStatus } = useAppContext()
    const { socket } = useSocket()
    const usernameRef = useRef(null)
    const navigate = useNavigate()

    const createNewRoomId = () => {
        setCurrentUser({ ...currentUser, roomId: uuidv4() })
        toast.success("Created a new Room Id")
        usernameRef.current.focus()
    }

    const CreateProject = () => {
        navigate('/create'); 
    };

    const handleInputChanges = (e) => {
        const name = e.target.name
        const value = e.target.value
        setCurrentUser({ ...currentUser, [name]: value })
    }

    const validateForm = () => {
        if (currentUser.username.length === 0) {
            toast.error("Enter your Details")
            return false
        } else if (currentUser.roomId.length === 0) {
            toast.error("Enter a Project id")
            return false
        } else if (currentUser.roomId.length < 5) {
            toast.error("Project Id must be present.")
            return false
        } else if (currentUser.username.length < 3) {
            toast.error("Username must be at least 3 characters long")
            return false
        }
        return true
    }

    const joinRoom = (e) => {
        e.preventDefault()
        if (status === UserStatus.ATTEMPTING_JOIN) return
        if (!validateForm()) return
        toast.loading("Joining room...")
        setStatus(UserStatus.ATTEMPTING_JOIN)
        socket.emit(ACTIONS.JOIN_REQUEST, currentUser)
    }

    useEffect(() => {
        if (currentUser.roomId.length > 0) return
        if (location.state?.roomId) {
            setCurrentUser({ ...currentUser, roomId: location.state.roomId })
            if (currentUser.username.length === 0) {
                toast.success("Enter your username")
            }
        }
    }, [currentUser, location.state?.roomId, setCurrentUser])

    useEffect(() => {
        if (status === UserStatus.DISCONNECTED && !socket.connected) {
            socket.connect()
            return
        }
        if (status === UserStatus.JOINED) {
            const username = currentUser.username
            navigate(`/editor/${currentUser.roomId}`, {
                state: { username },
            })
        }
    }, [currentUser, navigate, socket, status])

    return (
        <div className="flex w-full max-w-[500px] flex-col items-center justify-center gap-4 p-4 sm:w-[500px] sm:p-8">
            <h1 className="text-4xl sm:text-5xl">CodeHub</h1>
            <p className="mb-4 text-center md:mb-8">
                {"Code, Chat, Collaborate!"}
            </p>
            <form onSubmit={joinRoom} className="flex w-full flex-col gap-4">
                <input
                    type="text"
                    name="projectname"
                    placeholder="Project Name"
                    className="w-full rounded-md border border-gray-500 bg-darkHover px-3 py-3 focus:outline-none"
                />
                <input
                    type="text"
                    name="roomId"
                    placeholder="Project Id"
                    className="w-full rounded-md border border-gray-500 bg-darkHover px-3 py-3 focus:outline-none"
                    onChange={handleInputChanges}
                    value={currentUser.roomId}
                />
                <input
                    type="password"
                    name="username"
                    placeholder="Password"
                    className="w-full rounded-md border border-gray-500 bg-darkHover px-3 py-3 focus:outline-none"
                    onChange={handleInputChanges}
                    value={currentUser.username}
                    ref={usernameRef}
                />
                <input
                    type="text"
                    name="projectrights"
                    placeholder="Add Developers (Optional)"
                    className="w-full rounded-md border border-gray-500 bg-darkHover px-3 py-3 focus:outline-none"
                />
                <button
                    type="submit"
                    className="mt-2 w-full rounded-md bg-primary px-8 py-3 text-lg font-semibold text-black"
                >
                    Create
                </button>
            </form>
        </div>
    )
}

export default FormComponent
