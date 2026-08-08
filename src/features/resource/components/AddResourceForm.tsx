"use client";

import { Button } from "@/components/ui/button";
import { UploadCloud, X } from "lucide-react";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

const AddResourceForm = () => {
    const [resourceName, setResourceName] = useState("");
    const [resourceDescription, setResourceDescription] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
        const maximumSize = 10 * 1024 * 1024;

        if (!allowedTypes.includes(file.type)) {
            window.alert("Only PNG, JPG, and JPEG files are allowed.");
            event.target.value = "";
            return;
        }

        if (file.size > maximumSize) {
            window.alert("The selected file must be 10MB or smaller.");
            event.target.value = "";
            return;
        }

        setSelectedFile(file);
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = {
            resourceName,
            resourceDescription,
            resourceIcon: selectedFile,
        };

        console.log("Resource:", formData);

        // API call here
    };

    return (
        <form onSubmit={handleSubmit} className="w-full rounded-md border border-border bg-card p-5 shadow-sm sm:p-6">
            {/* Resource Name */}
            <div>
                <label htmlFor="resource-name" className="mb-2 block text-sm font-medium tracking-wide text-foreground">
                    Resource Name
                </label>

                <input id="resource-name" type="text" value={resourceName} onChange={(event) => setResourceName(event.target.value)} placeholder="e.g. somethings.." required className="h-11 w-full rounded-xl border border-transparent bg-muted/60 px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground hover:bg-muted focus:border-amber-400/50 focus:bg-background focus:ring-2 focus:ring-amber-400/10" />
            </div>

            {/* Resource Description */}
            <div className="mt-5">
                <label htmlFor="resource-description" className="mb-2 block text-sm font-medium tracking-wide text-foreground">
                    Resource Description
                </label>

                <textarea id="resource-description" value={resourceDescription} onChange={(event) => setResourceDescription(event.target.value)} placeholder="e.g. somethings.." required rows={5} className="min-h-[122px] w-full resize-none rounded-xl border border-transparent bg-muted/60 px-4 py-3 text-sm leading-6 text-foreground outline-none transition placeholder:text-muted-foreground hover:bg-muted focus:border-amber-400/50 focus:bg-background focus:ring-2 focus:ring-amber-400/10" />
            </div>

            {/* Resource Icon */}
            <div className="mt-5">
                <label className="mb-3 block text-sm font-medium tracking-wide text-foreground">
                    Resource Icon Or Logo
                </label>

                <input ref={fileInputRef} type="file" accept="image/png,image/jpeg,image/jpg" onChange={handleFileChange} className="hidden" />

                <div className="relative w-full max-w-[190px]">
                    <button type="button" onClick={() => fileInputRef.current?.click()} className="flex min-h-[118px] w-full flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/60 px-4 py-5 text-center transition-colors hover:border-amber-400/70 hover:bg-amber-400/[0.03]">
                        {selectedFile ? (
                            <>
                                <UploadCloud className="h-7 w-7 text-amber-400" />

                                <span className="mt-2 max-w-[150px] truncate text-xs font-medium text-foreground">
                                    {selectedFile.name}
                                </span>

                                <span className="mt-1 text-[11px] text-muted-foreground">
                                    Click to replace
                                </span>
                            </>
                        ) : (
                            <>
                                <UploadCloud className="h-7 w-7 text-amber-400" />

                                <span className="mt-2 text-sm text-muted-foreground">
                                    Drop or click to upload
                                </span>

                                <span className="mt-1 text-xs font-medium text-amber-400">
                                    PNG, JPG up to 10MB
                                </span>
                            </>
                        )}
                    </button>

                    {selectedFile && (
                        <button type="button" onClick={handleRemoveFile} title="Remove image" className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm transition hover:bg-red-500 hover:text-white">
                            <X className="h-3.5 w-3.5" />
                        </button>
                    )}
                </div>
            </div>

            {/* Submit */}
            <div className="mt-5 flex justify-end">
                <Button type="submit" disabled={!resourceName.trim() || !resourceDescription.trim() || !selectedFile} className="h-10 rounded-lg bg-[#FFD43B] px-6 font-semibold text-zinc-950 shadow-sm hover:bg-[#FFD43B]/90 disabled:cursor-not-allowed disabled:opacity-50">
                    Add Resource
                </Button>
            </div>
        </form>
    );
};

export default AddResourceForm;