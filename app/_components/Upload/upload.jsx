"use client";
import React, {useState} from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import styles from "./upload.module.css";

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    
    return (
        <div className="fixed bottom-8">
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