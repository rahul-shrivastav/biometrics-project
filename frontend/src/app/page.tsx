export default function Home() {
    return (
        <>
            <div className="w-screen h-screen bg-white flex ">
                <div className="h-screen flex-1 bg-amber-300 hover:flex-2 transition-all duration-[1s] flex items-center justify-center">
                    <span className="text-2xl font-bold">
                        Encrypt using facial embeddings
                    </span>
                </div>
                <div className="h-screen flex-1 bg-amber-100 hover:flex-2 transition-all duration-[1s] flex items-center justify-center">
                    <span className="text-2xl font-bold">
                        Decrypt a file using key{" "}
                    </span>
                </div>
            </div>
        </>
    );
}
