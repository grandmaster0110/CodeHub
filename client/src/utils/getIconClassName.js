import { getIconForFile } from "vscode-icons-js"

export const getIconClassName = (name) => {
    const icon = getIconForFile(name).replace(/_/g, "-").split(".")[0]
    const iconClassName = `vscode-icons:${icon}`
    return iconClassName
}
