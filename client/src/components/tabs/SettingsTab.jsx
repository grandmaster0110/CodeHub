import Select from "@/components/common/Select"
import useSetting from "@/hooks/useSetting"
import useWindowDimensions from "@/hooks/useWindowDimensions"
import { editorFonts } from "@/resources/Fonts"
import { editorLanguages } from "@/resources/Languages"
import { editorThemes } from "@/resources/Themes"
import { useEffect } from "react"

function SettingsTab() {
    const {
        theme,
        setTheme,
        language,
        setLanguage,
        fontSize,
        setFontSize,
        fontFamily,
        setFontFamily,
        showGitHubCorner,
        setShowGitHubCorner,
        resetSettings,
    } = useSetting()
    const { tabHeight } = useWindowDimensions()

    const handleFontFamilyChange = (e) => setFontFamily(e.target.value)
    const handleThemeChange = (e) => setTheme(e.target.value)
    const handleLanguageChange = (e) => setLanguage(e.target.value)
    const handleFontSizeChange = (e) => setFontSize(e.target.value)
    const handleShowGitHubCornerChange = (e) =>
        setShowGitHubCorner(e.target.checked)

    useEffect(() => {
        // Set editor font family
        const editor = document.querySelector(".cm-editor > .cm-scroller")
        if (editor !== null) {
            editor.style.fontFamily = `${fontFamily}, monospace`
        }
    }, [fontFamily])

    return (
        <div
            className="flex flex-col items-center gap-2 p-4"
            style={{ height: tabHeight }}
        >
            <h1 className="tab-title">Settings</h1>
            {/* Choose Font Family option */}
            <div className="flex w-full items-end gap-2">
                <Select
                    onChange={handleFontFamilyChange}
                    value={fontFamily}
                    options={editorFonts}
                    title="Fonts"
                />
                {/* Choose font size option */}
                <select
                    value={fontSize}
                    onChange={handleFontSizeChange}
                    className="rounded-md border-none bg-darkHover px-4 py-2 text-white outline-none"
                    title="Font Size"
                >
                    {[...Array(13).keys()].map((size) => {
                        return (
                            <option key={size} value={size + 12}>
                                {size + 12}
                            </option>
                        )
                    })}
                </select>
            </div>
            {/* Choose theme option */}
            <Select
                onChange={handleThemeChange}
                value={theme}
                options={editorThemes}
                title="Themes"
            />
            {/* Choose language option */}
            <Select
                onChange={handleLanguageChange}
                value={language}
                options={editorLanguages}
                title="Languages"
            />
            <button
                className="mt-auto w-full rounded-md border-none bg-darkHover px-4 py-2 text-white outline-none"
                onClick={resetSettings}
            >
                Reset to default
            </button>
        </div>
    )
}

export default SettingsTab
