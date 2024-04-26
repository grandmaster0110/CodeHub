import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Toast from "./components/toast/Toast"
import HomePage from "./pages/HomePage"
import EditorPage from "./pages/EditorPage"
import CreateProject from "./pages/CreateProject"
import WebPage from "./pages/WebPage"

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<WebPage />} />
                    <Route path="/join" element={<HomePage />} />
                    <Route path="/create" element={<CreateProject />} />
                    <Route path="/editor/:roomId" element={<EditorPage />} />
                </Routes>
            </Router>
            <Toast /> {/* Toast component from react-hot-toast */}
        </>
    )
}

export default App
