import { useState } from "react";

export default function Dashboard() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const generatePrompt = async () => {
        if (!input) return;

        console.log("Generating...");
        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: input })  // use input
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setResult(data.choices[0]?.message?.content || "No response");
        } catch (err: any) {
            console.error(err);
            setResult(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    const copyResult = () => {
        if (!result) return;
        navigator.clipboard.writeText(result);
        alert("Copied to clipboard!");
    };

    return (
        <div className="w-full p-6">

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Center Section */}
                <div className="lg:col-span-8 space-y-6">

                    {/* Generator Card */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h2 className="text-xl font-semibold mb-2">AI Prompt Generator</h2>
                        <p className="text-sm text-zinc-500 mb-4">
                            Generate creative ideas instantly
                        </p>

                        <textarea
                            placeholder="Write a social media post about blockchain gaming..."
                            className="w-full border border-zinc-300 rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-violet-600"
                            rows={4}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />

                        <div className="flex flex-wrap gap-3 mt-4">
                            {["Friendly", "Professional", "Witty"].map((tone) => (
                                <button
                                    key={tone}
                                    className="px-4 py-2 bg-zinc-100 rounded-full text-sm hover:bg-zinc-200 transition"
                                >
                                    {tone}
                                </button>
                            ))}
                        </div>

                        <div className="flex gap-3 mt-4">
                            <button
                                type="button"
                                onClick={generatePrompt}
                                disabled={loading}
                                className={`px-6 py-3 rounded-lg text-white ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
                            >
                                {loading ? "Generating..." : "Generate"}
                            </button>

                            {result && (
                                <button
                                    type="button"
                                    onClick={copyResult}
                                    className="px-4 py-3 rounded-lg bg-zinc-800 text-white hover:bg-zinc-900"
                                >
                                    Copy
                                </button>
                            )}
                        </div>

                        {result && (
                            <div className="p-4 bg-gray-100 rounded-lg max-h-64 overflow-y-auto mt-4 whitespace-pre-wrap">
                                {result}
                            </div>
                        )}
                    </div>

                    {/* Recent Suggestion */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="font-semibold mb-3">Recent Suggestion</h3>
                        <p className="text-zinc-600 text-sm">
                            Level up your gaming experience with blockchain-powered tournaments
                            and truly own your in-game assets.
                        </p>
                        <button className="mt-4 bg-zinc-950 text-white px-4 py-2 rounded-lg text-sm">
                            Copy
                        </button>
                    </div>

                </div>

                {/* Right Panel */}
                <div className="lg:col-span-4 space-y-6">

                    {/* History */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="font-semibold mb-4">Prompt History</h3>
                        <ul className="space-y-2 text-sm text-zinc-600">
                            <li className="p-2 rounded hover:bg-zinc-100 cursor-pointer">
                                Blog post on DeFi trends
                            </li>
                            <li className="p-2 rounded hover:bg-zinc-100 cursor-pointer">
                                Catchy tagline for mobile app
                            </li>
                            <li className="p-2 rounded hover:bg-zinc-100 cursor-pointer">
                                Fitness coaching bio
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="font-semibold mb-4">Top Categories</h3>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            {["Marketing", "Gaming", "Business", "Fitness"].map((cat) => (
                                <div
                                    key={cat}
                                    className="bg-zinc-100 p-3 rounded-lg text-center hover:bg-zinc-200 cursor-pointer transition"
                                >
                                    {cat}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}