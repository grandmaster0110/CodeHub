import React, { useEffect } from "react";

function Modal({ isOpen, onClose, children }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose(); // Close the modal when 'Escape' key is pressed
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null; // Return null if the modal is not open
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative bg-white p-6 rounded-lg shadow-lg w-1/2 max-w-3xl">
                <button
                    className="absolute top-2 right-2 text-gray-500"
                    onClick={onClose}
                >
                    X
                </button>
                {children} {/* Render modal content here */}
            </div>
        </div>
    );
}

export default Modal;
