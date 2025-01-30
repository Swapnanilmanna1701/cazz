"use client";
import React, { useState } from "react";
import { Button } from "@/components/pdf/ui/button";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/pdf/ui/input";
import { Label } from "@/components/pdf/ui/label";
import { Textarea } from "@/components/pdf/ui/textarea";
import { FileText, Upload, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/pdf/ui/alert";
import { Progress } from "@/components/pdf/ui/progress";

export default function PDFParser() {
    const [parsedData, setParsedData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [fileName, setFileName] = useState("");
    const [progress, setProgress] = useState(0);

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setError("");

        if (file && file.type === "application/pdf") {
            setLoading(true);
            setFileName(file.name);
            setProgress(0);

            const formData = new FormData();
            formData.append("file", file);

            try {
                const response = await fetch("/api/upload-pdf", {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    setParsedData(data.parsedText);
                    setProgress(100);
                } else {
                    throw new Error("Failed to parse PDF. Please check the file.");
                }
            } catch (err) {
                setError("An error occurred while parsing the PDF. Please try again.");
                setParsedData("");
            } finally {
                setLoading(false);
            }
        } else {
            setError("Please upload a valid PDF file.");
        }
    };

    return (
        <div className="min-h-screen bg-black overflow-hidden pt-20 w-full">
            <Navbar />
            <div className="flex flex-col min-h-screen bg-black">
            
           
            <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Parse Data from PDF</h1>
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-cyan-300 via-violet-500 to-pink-600 p-6 rounded-lg shadow-md">
                        <Label htmlFor="pdf-file" className="text-lg font-medium text-gray-700 mb-2 block">
                            Upload PDF
                        </Label>
                        <div className="flex items-center space-x-2 mt-1">
                            <Input
                                id="pdf-file"
                                type="file"
                                accept=".pdf"
                                onChange={handleFileUpload}
                                className="flex-1"
                            />
                            <Button type="button" size="icon" className="bg-blue-600 hover:bg-blue-700">
                                <Upload className="h-4 w-4" />
                                <span className="sr-only">Upload</span>
                            </Button>
                        </div>
                        {fileName && <p className="mt-2 text-sm text-gray-600">Selected file: {fileName}</p>}
                    </div>

                    {error && (
                        <Alert variant="destructive" className="bg-red-50 border-red-400">
                            <AlertCircle className="h-4 w-4 text-red-600" />
                            <AlertTitle className="text-red-600">Error</AlertTitle>
                            <AlertDescription className="text-red-600">{error}</AlertDescription>
                        </Alert>
                    )}

                    {loading && (
                        <div className="space-y-2">
                            <Progress value={progress} className="w-full" />
                            <p className="text-sm text-cyan-300 text-center">Parsing PDF... {progress}%</p>
                        </div>
                    )}

                    <div className="bg-gradient-to-r from-pink-600 via-violet-500 to-cyan-300 p-3 rounded-lg shadow-md">
                        <Label htmlFor="parsed-data" className="text-lg font-large text-white mb-2 block">
                            Parsed Data
                        </Label>
                        <Textarea
                            id="parsed-data"
                            placeholder="Parsed data will appear here..."
                            value={parsedData}
                            readOnly
                            className="mt-1 h-64 w-full border-2 border-white focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                </div>
            </main>
            
        </div>
        </div>
        
    );
}
