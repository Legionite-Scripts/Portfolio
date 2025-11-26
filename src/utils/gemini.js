export async function callGemini(prompt) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey) {
    console.error("No Gemini API key found");
    return "API key not configured. Please add VITE_GEMINI_API_KEY to your .env file.";
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`;
  const payload = { contents: [{ parts: [{ text: prompt }] }] };
  
  const delays = [1000, 2000, 4000, 8000, 16000];
  
  for (let i = 0; i <= delays.length; i++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
    } catch (error) {
      if (i === delays.length) {
        console.error("Gemini API failed after retries:", error);
        return "Sorry, the AI service is busy. Please try again later.";
      }
      await new Promise(resolve => setTimeout(resolve, delays[i]));
    }
  }
}