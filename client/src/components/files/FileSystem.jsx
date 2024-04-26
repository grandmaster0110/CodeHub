import useFileSystem from "@/hooks/useFileSystem"
import useTab from "@/hooks/useTabs"
import useWindowDimensions from "@/hooks/useWindowDimensions"
import { getIconClassName } from "@/utils/getIconClassName"
import { Icon } from "@iconify/react"
import { PencilSimple, Trash } from "@phosphor-icons/react"
import { useRef, useState } from "react"
import FileEditor from "./FileEditor"

function FileSystem() {
    const filesContentRef = useRef(null)
    const { files, currentFile, openFile, deleteFile, createFile } =
        useFileSystem()
    const [editingFileId, setEditingFileId] = useState(null)
    const { setIsSidebarOpen } = useTab()
    const { isMobile } = useWindowDimensions()
    const [isIssuesOpen, setIssuesOpen] = useState(false);

    const handleRenameFile = (e, id) => {
        e.stopPropagation()
        setEditingFileId(id)
    }

    const handleCreateNewFile = () => {
        const id = createFile("Untitled")
        setEditingFileId(id)
    }

    const handleDeleteFile = (e, id, name) => {
        e.stopPropagation()
        const isConfirmed = confirm(
            `Are you sure you want to delete ${name} file?`,
        )
        if (isConfirmed) {
            deleteFile(id)
        }
    }

    const handleFileClick = (id) => {
        setEditingFileId(null)
        openFile(id)
        if (isMobile) {
            setIsSidebarOpen(false)
        }
    }

    const fileSelectedClass = (id) => {
        if (currentFile !== null && currentFile.id === id) {
            return "bg-darkHover"
        }
        return ""
    }

    const toggleIssues = () => {
        setIssuesOpen((prev) => !prev);
      };

    return (
        <>
            <div className="pb-2">
                <h1 className="text-lg">Files ({files.length})</h1>
            </div>
            <div
                className="max-h-[70%] min-h-[200px] flex-grow overflow-auto pl-4 pr-2 sm:min-h-0"
                onClick={(e) => e.stopPropagation()}
                ref={filesContentRef}
            >
                {files.map((file) => {
                    return editingFileId !== file.id ? (
                        <div
                            className={
                                "mb-2 flex rounded-md p-2 hover:bg-darkHover " +
                                fileSelectedClass(file.id)
                            }
                            key={file.id}
                            onClick={() => handleFileClick(file.id)}
                        >
                            <Icon
                                icon={getIconClassName(file.name)}
                                fontSize={24}
                                className="mr-2"
                            />
                            <p
                                className="line-clamp-1 flex-grow cursor-pointer"
                                title={file.name}
                            >
                                {file.name}
                            </p>
                            <span className="flex gap-4">
                                <button
                                    onClick={(e) =>
                                        handleRenameFile(e, file.id)
                                    }
                                >
                                    <PencilSimple size={18} weight="fill" />
                                </button>
                                <button
                                    onClick={(e) =>
                                        handleDeleteFile(e, file.id, file.name)
                                    }
                                    className="text-danger"
                                >
                                    <Trash size={18} weight="fill" />
                                </button>
                            </span>
                        </div>
                    ) : (
                        <FileEditor
                            key={file.id}
                            editingFileId={editingFileId}
                            setEditingFileId={setEditingFileId}
                            name={file.name}
                        />
                    )
                })}
            </div>
            <button className="my-2 w-full bg-primary p-2 font-bold text-black" onClick={toggleIssues}>
                Issues
            </button>

            {isIssuesOpen && (
                <div className="issues-list" style={{ maxHeight: "150px", overflowY: "auto" }}>
                <h2 className="text-lg mb-4 text-red-500">Add More!</h2>
                <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="border-b pb-2">Sno.</th>
                        <th className="border-b pb-2">Priority</th>
                        <th className="border-b pb-2">Type</th>
                        <th className="border-b pb-2">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { sno: 1, priority: "High", type: "Bug", description: "Issue 1" },
                        { sno: 2, priority: "Low", type: "Feature", description: "Issue 2" },
                    ].map((issue, index) => (
                        <tr key={index}>
                            <td className="border-b py-2">{issue.sno}</td>
                            <td className="border-b py-2">{issue.priority}</td>
                            <td className="border-b py-2">{issue.type}</td>
                            <td className="border-b py-2">{issue.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
                </div>
            )}
            <button
                className="my-2 flex w-full justify-center rounded-md bg-primary p-2 font-bold text-black transition-all"
                onClick={handleCreateNewFile}
            >
                New File
            </button>
        </>
    )
}

export default FileSystem
