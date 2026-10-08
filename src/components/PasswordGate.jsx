import { useState } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const SITE_PASSWORD = "acadpress"; 

export default function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(() => {
    try { return sessionStorage.getItem("site_unlocked") === "true"; }
    catch { return false; }
  });
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (input === SITE_PASSWORD) {
      try { sessionStorage.setItem("site_unlocked", "true"); }
      catch { /* Preview still opens when browser storage is unavailable. */ }
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (unlocked) return children;

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-black px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl p-10 max-w-sm w-full text-center shadow-2xl"
      >
        <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-6">
          <Lock size={24} className="text-brand" />
        </div>
        <h1 className="font-display font-bold text-2xl text-brand-black mb-2">
          Private Preview
        </h1>
        <p className="text-brand-black/60 text-sm mb-8">
          This site is currently in preview. Enter the access code to continue.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            aria-label="Preview access code"
            aria-invalid={error}
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="Access code"
            autoFocus
            className={`w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 transition-all text-center ${
              error
                ? "border-red-400 focus:ring-red-200"
                : "border-black/20 focus:ring-brand/30"
            }`}
          />
          {error && (
            <p className="text-red-500 text-sm">Incorrect code — try again.</p>
          )}
          <button
            type="submit"
            className="w-full bg-brand text-white font-medium py-3 rounded-xl hover:scale-[1.02] transition-transform"
          >
            Enter Site
          </button>
        </form>
      </motion.div>
    </div>
  );
}
