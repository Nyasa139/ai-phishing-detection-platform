import { useState, useEffect } from "react";
import { Link2, Search } from "lucide-react";
import toast from "react-hot-toast";
import API from "../services/api";
import ResultCard from "../components/ResultCard";

const loadingSteps = [
  "Analyzing threat...",
  "Checking suspicious patterns...",
  "Generating report...",
];

const URLScanner = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev + 1) % loadingSteps.length);
      }, 800);
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleScan = async (e) => {
    e.preventDefault();
    if (!url) return;
    
    setIsLoading(true);
    setResult(null);
    
    try {
      // Simulate slightly longer processing to show the cool loading steps
      await new Promise(r => setTimeout(r, 1500));
      
      const res = await API.post("/api/scan/url", { url });
      setResult(res.data);
      toast.success("Scan completed successfully");
    } catch (error) {
      toast.error("Failed to scan URL. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in max-w-3xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white flex items-center gap-3">
          <Link2 className="w-8 h-8 text-indigo-400" />
          URL Scanner
        </h1>
        <p className="text-slate-400 mt-2">
          Detect malicious links, phishing websites, and unsafe domains instantly.
        </p>
      </header>

      <form onSubmit={handleScan} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm mb-6 shadow-xl">
        <label className="block text-sm font-medium text-slate-300 mb-3">Enter URL to analyze</label>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input 
              type="url" 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example-suspicious-site.com"
              required
              className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white placeholder-slate-600 transition-all shadow-inner"
            />
          </div>
          <button 
            type="submit"
            disabled={isLoading || !url}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/25 transition-all disabled:opacity-70 flex justify-center items-center gap-2 whitespace-nowrap min-w-[160px]"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : "Scan URL"}
          </button>
        </div>
        
        {isLoading && (
          <div className="mt-6 flex items-center justify-center text-sm text-indigo-400 font-medium animate-pulse gap-2 bg-indigo-500/10 py-3 rounded-lg border border-indigo-500/20">
            <Search className="w-4 h-4" />
            {loadingSteps[loadingStep]}
          </div>
        )}
      </form>

      {result && <ResultCard result={result} />}
    </div>
  );
};

export default URLScanner;
