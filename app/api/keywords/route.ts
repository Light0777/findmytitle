import { NextResponse } from "next/server";

function getDifficulty(keyword: string) {
  const words = keyword.trim().split(" ").length;

  if (words >= 5) return "Easy";
  if (words >= 3) return "Medium";
  return "Hard";
}

function getIntent(keyword: string) {
  const lower = keyword.toLowerCase();

  if (
    lower.includes("buy") ||
    lower.includes("best") ||
    lower.includes("price") ||
    lower.includes("tool")
  ) {
    return "Commercial";
  }

  if (
    lower.includes("how") ||
    lower.includes("guide") ||
    lower.includes("tips") ||
    lower.includes("what")
  ) {
    return "Informational";
  }

  if (
    lower.includes("login") ||
    lower.includes("website") ||
    lower.includes("official")
  ) {
    return "Navigational";
  }

  return "Informational";
}

export async function POST(req: Request) {
  try {
    const { keyword } = await req.json();

    const res = await fetch(
      `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(
        keyword
      )}`
    );

    const data = await res.json();

    const rawSuggestions = data[1] || [];

    const suggestions = rawSuggestions.map((item: string) => ({
      keyword: item,
      difficulty: getDifficulty(item),
      intent: getIntent(item),
    }));

    return NextResponse.json({ suggestions });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch keywords" },
      { status: 500 }
    );
  }
}