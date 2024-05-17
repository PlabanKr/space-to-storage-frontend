"use client";
import React, {useState} from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    
    return (
        <div className="fixed top-1/4 right-1/2 translate-x-1/2 translate-y-1/2 bg-white py-10 px-36">
            <label htmlFor="file-input" className="file-input-label">
                <input
                id="file-input"
                type="file"
                accept=".jpg, .jpeg, .png, .tiff"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                />
                <div className="upload-icon">
                    <FaCloudUploadAlt />
                </div>
                <div className="upload-text">
                {selectedFile ? (
                    <span>Selected file: {selectedFile.name}</span>
                ) : (
                    <span>Click to upload file</span>
                )}
                </div>
            </label>
        </div>
    );
}

export default Upload;