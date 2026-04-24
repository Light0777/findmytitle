import Image from "next/image";
import Link from "next/link";
import { Sparkles, Search, TrendingUp, Zap, ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-xl bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              FindMyTitle
            </span>
          </div>
          <Link
            href="/dashboard"
            className="bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
            <Zap className="w-4 h-4" />
            AI-Powered Title Generator
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-6">
            Find the Perfect Title
            <br />
            for Your Content
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Discover high-performing keywords and generate engaging titles that capture attention, 
            boost SEO, and drive more traffic to your content.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-200 hover:scale-105 group"
          >
            Start Finding Titles
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-200 group">
            <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Keyword Discovery</h3>
            <p className="text-slate-600">
              Get relevant keyword suggestions with difficulty scores and search intent analysis to target the right audience.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-200 group">
            <div className="w-12 h-12 bg-linear-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">AI Title Generation</h3>
            <p className="text-slate-600">
              Generate dozens of engaging, click-worthy titles optimized for both search engines and human readers.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-200 group">
            <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">SEO Optimization</h3>
            <p className="text-slate-600">
              Improve your content&apos;s search ranking with data-driven title suggestions based on real SEO metrics.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12 mb-24">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
                1
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Enter Your Keyword</h3>
              <p className="text-slate-600 text-sm">
                Start with a main keyword or topic related to your content
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
                2
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Get Suggestions</h3>
              <p className="text-slate-600 text-sm">
                Receive keyword ideas with difficulty scores and search intent
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
                3
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Generate Titles</h3>
              <p className="text-slate-600 text-sm">
                Generate and copy optimized titles for your content
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Why Content Creators Love FindMyTitle
            </h2>
            <p className="text-slate-600 mb-6">
              Join thousands of bloggers, marketers, and content creators who use our tool to create 
              compelling titles that drive results.
            </p>
            <div className="space-y-3">
              {[
                "Save hours of brainstorming time",
                "Data-driven title optimization",
                "Improve click-through rates",
                "Better SEO performance",
                "User-friendly interface"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">Try it now</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Ready to Create Better Titles?
              </h3>
              <p className="text-slate-600 mb-6">
                Start generating engaging titles that your audience will love to click.
              </p>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-slate-700">FindMyTitle</span>
            </div>
            <div className="text-sm text-slate-500">
              © 2024 FindMyTitle. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link href="/dashboard" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                Tool
              </Link>
              <Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}