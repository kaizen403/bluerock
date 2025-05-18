"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, FileText, CheckCircle, AlertTriangle } from "lucide-react";

export default function StatementsPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    simulateUpload();
  };

  const simulateUpload = () => {
    setUploadStatus("uploading");
    setTimeout(() => {
      setUploadStatus("success");
      setTimeout(() => {
        setUploadStatus("idle");
        setSelectedFile(null);
      }, 2000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--chart-4)/0.2),transparent_50%),radial-gradient(ellipse_at_bottom,hsl(var(--chart-5)/0.2),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Upload Bank Statements
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Securely upload your bank statements for processing and analysis
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Statement Upload</CardTitle>
                <CardDescription>
                  Supported formats: PDF, CSV (Max size: 10MB)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    isDragging
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {uploadStatus === "idle" && (
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <Upload className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-lg font-medium">
                          Drag and drop your statement here
                        </p>
                        <p className="text-sm text-muted-foreground">
                          or click to browse files
                        </p>
                      </div>
                      <Input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            handleFileSelect(e.target.files[0]);
                          }
                        }}
                        accept=".pdf,.csv"
                        id="file-upload"
                      />
                      <Button
                        variant="outline"
                        onClick={() => {
                          document.getElementById("file-upload")?.click();
                        }}
                      >
                        Browse Files
                      </Button>
                    </div>
                  )}

                  {uploadStatus === "uploading" && (
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <FileText className="h-12 w-12 text-primary animate-pulse" />
                      </div>
                      <p className="text-lg font-medium">
                        Uploading {selectedFile?.name}...
                      </p>
                      <div className="w-64 h-2 bg-muted rounded-full mx-auto overflow-hidden">
                        <div className="h-full bg-primary animate-[progress_2s_ease-in-out_infinite]"></div>
                      </div>
                    </div>
                  )}

                  {uploadStatus === "success" && (
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <CheckCircle className="h-12 w-12 text-green-500" />
                      </div>
                      <p className="text-lg font-medium text-green-500">
                        Upload Complete!
                      </p>
                    </div>
                  )}

                  {uploadStatus === "error" && (
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <AlertTriangle className="h-12 w-12 text-destructive" />
                      </div>
                      <p className="text-lg font-medium text-destructive">
                        Upload Failed
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setUploadStatus("idle")}
                      >
                        Try Again
                      </Button>
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <Label className="text-base">Important Notes:</Label>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Files are processed securely and encrypted
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Automatic data extraction and categorization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Statement analysis and insights generation
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}