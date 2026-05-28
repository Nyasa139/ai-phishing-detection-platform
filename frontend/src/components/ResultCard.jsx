import { AlertTriangle, CheckCircle, ShieldAlert } from "lucide-react";

const ResultCard = ({ result }) => {
  const isHighRisk = result.status === "HIGH RISK";
  const isSuspicious = result.status === "SUSPICIOUS";
  const isSafe = result.status === "SAFE";

  let styles = {
    bg: "bg-slate-800",
    border: "border-slate-700",
    text: "text-slate-300",
    icon: null,
    recommendation: "Review the content carefully.",
  };

  if (isHighRisk) {
    styles = {
      bg: "bg-rose-500/10",
      border: "border-rose-500/30",
      text: "text-rose-400",
      icon: <AlertTriangle className="w-8 h-8 text-rose-500" />,
      recommendation: "Avoid interacting with this content immediately.",
    };
  } else if (isSuspicious) {
    styles = {
      bg: "bg-amber-500/10",
      border: "border-amber-500/30",
      text: "text-amber-400",
      icon: <ShieldAlert className="w-8 h-8 text-amber-500" />,
      recommendation: "Proceed with caution. Do not enter personal details.",
    };
  } else if (isSafe) {
    styles = {
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      text: "text-emerald-400",
      icon: <CheckCircle className="w-8 h-8 text-emerald-500" />,
      recommendation: "Content appears to be safe.",
    };
  }

  return (
    <div className={`mt-6 rounded-2xl border ${styles.border} ${styles.bg} p-6 animate-in fade-in slide-in-from-bottom-4`}>
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl bg-slate-900/50 border ${styles.border}`}>
          {styles.icon}
        </div>
        <div className="flex-1">
          <h3 className={`text-xl font-bold ${styles.text}`}>
            Status: {result.status}
          </h3>
          <div className="mt-2 space-y-1">
            <p className="text-slate-300">
              <span className="font-semibold text-slate-400">Risk Score:</span> {result.riskScore}%
            </p>
            <p className="text-slate-300">
              <span className="font-semibold text-slate-400">Recommendation:</span> {styles.recommendation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
