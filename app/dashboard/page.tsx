"use client";

import { useState } from "react";
import { Search, Sparkles, Copy, TrendingUp, BarChart3, Target, Loader2, Zap } from "lucide-react";

type KeywordData = {
  keyword: string;
  difficulty: string;
  intent: string;
};

export default function DashboardPage() {
  const [keyword, setKeyword] = useState("");
  const [keywords, setKeywords] = useState<KeywordData[]>([]);
  const [titles, setTitles] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  async function getKeywords() {
    if (!keyword.trim()) return;

    setLoading(true);

    const res = await fetch("/api/keywords", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ keyword }),
    });

    const data = await res.json();

    setKeywords(data.suggestions || []);
    setLoading(false);
  }

  async function generateTitles(selectedKeyword: string) {
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ keyword: selectedKeyword }),
    });

    const data = await res.json();

    setTitles(data.titles || []);
    setLoading(false);
  }

  const handleCopy = async (title: string, index: number) => {
    await navigator.clipboard.writeText(title);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const getDifficultyColor = (difficulty: string) => {
    const diff = difficulty.toLowerCase();
    if (diff.includes('easy') || diff.includes('low')) return 'bg-green-100 text-green-700';
    if (diff.includes('medium') || diff.includes('moderate')) return 'bg-yellow-100 text-yellow-700';
    if (diff.includes('hard') || diff.includes('high')) return 'bg-red-100 text-red-700';
    return 'bg-gray-100 text-gray-700';
  };

  const getIntentIcon = (intent: string) => {
    switch (intent.toLowerCase()) {
      case 'informational':
        return <BarChart3 className="w-3 h-3" />;
      case 'commercial':
        return <TrendingUp className="w-3 h-3" />;
      case 'transactional':
        return <Target className="w-3 h-3" />;
      default:
        return <Sparkles className="w-3 h-3" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              <Zap className="w-4 h-4" />
              AI-Powered Title Generator
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-4">
              FindMyTitle
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover high-performing keywords and generate engaging titles that capture attention and drive traffic
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 p-1">
                <div className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-slate-400 ml-3" />
                  <input
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && getKeywords()}
                    placeholder="Enter your main keyword or topic..."
                    className="flex-1 p-4 bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
                  />
                  <button
                    onClick={getKeywords}
                    disabled={loading}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Find Keywords
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        {keywords.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full" />
              <h2 className="text-2xl font-bold text-slate-800">Keyword Suggestions</h2>
              <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                {keywords.length} found
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {keywords.map((item, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {item.keyword}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                        <TrendingUp className="w-3 h-3" />
                        {item.difficulty}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                        {getIntentIcon(item.intent)}
                        {item.intent}
                      </span>
                    </div>

                    <button
                      onClick={() => generateTitles(item.keyword)}
                      className="w-full bg-gradient-to-r from-slate-100 to-slate-50 hover:from-blue-50 hover:to-indigo-50 text-slate-700 font-medium py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                    >
                      <Sparkles className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      Generate Titles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {titles.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full" />
              <h2 className="text-2xl font-bold text-slate-800">Generated Titles</h2>
              <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                {titles.length} titles
              </span>
            </div>

            <div className="space-y-3">
              {titles.map((title, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">
                          #{i + 1}
                        </span>
                      </div>
                      <p className="text-slate-700 group-hover:text-slate-900 transition-colors">
                        {title}
                      </p>
                    </div>
                    <button
                      onClick={() => handleCopy(title, i)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-slate-100 to-slate-50 hover:from-blue-50 hover:to-indigo-50 text-slate-600 hover:text-blue-600 transition-all duration-200"
                    >
                      <Copy className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {copiedIndex === i ? "Copied!" : "Copy"}
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!keywords.length && !titles.length && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full mb-6">
              <Sparkles className="w-10 h-10 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">Start Your Journey</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              Enter a keyword above to discover related keywords and generate compelling titles for your content
            </p>
          </div>
        )}
      </div>

      {/* Loading Overlay */}
      {loading && keywords.length === 0 && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-4">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            <p className="text-slate-600">Analyzing keywords...</p>
          </div>
        </div>
      )}
    </div>
  );
}