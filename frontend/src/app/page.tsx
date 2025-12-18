"use client";
import { LuFingerprint } from "react-icons/lu";
import { IoMdUnlock } from "react-icons/io";
import { useState, useRef } from "react";
export default function Home() {
    const fileInputRef = useRef(null);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            alert("Please select an image");
            return;
        }

        const formData = new FormData();
        formData.append("image", image);

        setLoading(true);

        try {
            await fetch("https://your-api.com/upload", {
                method: "POST",
                body: formData,
            });

            alert("Image uploaded successfully");
        } catch (err) {
            alert("Upload failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="w-screen h-screen flex transition-all duration-[0.5s]">
                {/* left */}
                <div className="relative group hover:font-semibold font-mono text-xl hover:text-3xl   font-extralight border-r border-slate-500 h-screen flex-1 bg-black hover:flex-2 transition-all duration-[0.5s] flex items-center justify-center">
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-20   flex flex-col items-center justify-center gap-10">
                        <div className="text-center group-hover:hidden transition-all duration-[0.5s]">
                            Ecrypt using fingerprint image
                        </div>
                        <div className="text-8xl group-hover:text-9xl transition-all duration-[0.5s]">
                            <LuFingerprint />
                        </div>
                    </span>
                    <div className="hidden group-hover:block border border-slate-400 w-full">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col items-center justify-center w-full"
                        >
                            {/* Button to open file picker */}
                            <button
                                type="button"
                                onClick={() => fileInputRef.current.click()}
                                className="p-5 border border-dashed hover:cursor-pointer w-1/2"
                            >
                                {image ? image.name : "Select Image"}
                            </button>

                            {/* Hidden file input */}
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                hidden
                                onChange={(e) => setImage(e.target.files[0])}
                            />

                            <br />
                            <br />

                            {/* Submit */}
                            <button
                                className="p-5 border hover:cursor-pointer rounded-2xl hover:bg-slate-400 hover:border-none"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Uploading..." : "Send to API"}
                            </button>
                        </form>
                    </div>
                </div>
                {/* right */}
                <div className="relative group hover:font-semibold font-mono text-xl hover:text-3xl   font-extralight h-screen flex-1 bg-black hover:flex-2 transition-all duration-[0.5s] flex items-center justify-center">
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-20   flex flex-col items-center justify-center gap-10">
                        <div className="text-center group-hover:hidden transition-all duration-[0.5s]">
                            Decrypt using key generated
                        </div>
                        <div className="text-8xl group-hover:text-9xl transition-all duration-[0.5s]">
                            <IoMdUnlock />
                        </div>
                    </span>
                    <div className="hidden group-hover:block border border-slate-400">
                        {/* <form action="">dsf</form> */}
                    </div>
                </div>
            </div>
        </>
    );
}
