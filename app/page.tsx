'use client';

import React, { useState } from 'react';
import { Sparkles, Copy, RefreshCw, Download, Video, Target, Zap, Book, TrendingUp, Shield, AlertTriangle, User } from 'lucide-react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [history, setHistory] = useState<any[]>([]);
  const [copied, setCopied] = useState(false);
  const [showCompliance, setShowCompliance] = useState(false);

  // Rufat Abilov detailed information
  const rufatInfo = {
    name: "Rufat Abilov",
    age: "24-25 years",
    background: "Born in Azerbaijan, lived in Kemerovo (Russia), moved to Spain at 12-13",
    expertise: "Crypto trading, swing trading, investments",
    achievements: [
      "Top-14 in Bybit WSOT (60-90k participants)",
      "$1.7M earned in 2 years from crypto",
      "100+ successful students (5-10x returns)",
      "Created closed club of 200 investors",
      "Public portfolio growth: $500 to $5,000 in 2 weeks"
    ],
    philosophy: [
      "Everything is cyclical and fractal",
      "Go against the crowd",
      "Psychology doesn't change for 200 years",
      "Money for patience and courage",
      "Failures are part of the game"
    ],
    stories: [
      "Electric shock 400V at 7-8 years old - survived",
      "Rejected by football coach, later got contract in Gibraltar",
      "Lost $100k in 3 days on StepN",
      "All-in on BTC at $15k → $1M portfolio",
      "Bought Aston Martin Superleggera"
    ],
    targetAudience: "People in Spain with stable income, 25-45 years, interested in smart capital management",
    tone: "Direct, contrarian, practical, no-BS approach",
    language: "Spanish (for Spanish-speaking audience)"
  };

  const projects = [
    { id: 1, name: 'tradingcentral.fx', instagram: '@tradingcentral.fx', niche: 'Forex Trading Signals' },
    { id: 2, name: 'tfxcreels', instagram: '@tfxcreels', niche: 'Trading Education Reels' },
    { id: 3, name: 'fxtradingvision', instagram: '@fxtradingvision', niche: 'FX Trading Vision' },
    { id: 4, name: 'billionairegroup29', instagram: '@billionairegroup29', niche: 'Elite Trading Group' },
    { id: 5, name: 'fredtrading', instagram: '@fredtrading', niche: 'Professional Trading' },
    { id: 6, name: 'mikefxcs', instagram: '@mikefxcs', niche: 'FX Trading Strategies' },
    { id: 7, name: 'ktradesx', instagram: '@ktradesx', niche: 'Trading Signals' },
    { id: 8, name: 'Nate fx | FX Culture', instagram: '@natefx', niche: 'FX Culture & Lifestyle' },
    { id: 9, name: 'Dan David', instagram: '@dandavid', niche: 'Trading Mentor' },
    { id: 10, name: 'Jonny', instagram: '@jonnymitchell', niche: 'Day Trading' },
    { id: 11, name: 'Sivan', instagram: '@sivan', niche: 'Crypto & Forex' },
    { id: 12, name: 'James', instagram: '@james', niche: 'Trading Coach' },
    { id: 13, name: 'basilcrue | ERT trading', instagram: '@basilcrue', niche: 'ERT Trading System' },
    { id: 14, name: 'Rufat Abilov', instagram: '@rufat.abilov', niche: 'Crypto Trading Expert' }
  ];

  const creativeTypes = [
    { value: 'hook', label: '🎣 Hook', desc: 'Attention-grabbing first line' },
    { value: 'full_post', label: '📝 Full Post', desc: 'Complete FB/IG publication' },
    { value: 'video_script', label: '🎬 Video Script', desc: '30-60 sec video script' },
    { value: 'cta', label: '🎯 CTA', desc: 'Persuasive call to action' },
    { value: 'headline', label: '💫 Headline', desc: 'Impactful title' },
    { value: 'pain_points', label: '😫 Pain Points', desc: 'Customer problems' },
    { value: 'benefits', label: '✨ Benefits', desc: 'Benefits list' },
    { value: 'testimonial', label: '⭐ Testimonial', desc: 'Realistic testimonial' },
    { value: 'story', label: '📖 Story', desc: 'Engaging narrative' }
  ];

  const toneOptions = [
    { value: 'aggressive', label: '🔥 Aggressive', desc: 'Urgency, FOMO, direct' },
    { value: 'educational', label: '📚 Educational', desc: 'Informative, professional' },
    { value: 'motivational', label: '💪 Motivational', desc: 'Inspiring, empowering' },
    { value: 'luxurious', label: '💎 Luxurious', desc: 'Premium, exclusive' },
    { value: 'friendly', label: '😊 Friendly', desc: 'Conversational, approachable' },
    { value: 'contrarian', label: '🎯 Contrarian', desc: 'Against the crowd, bold' }
  ];

  const [formData, setFormData] = useState({
    project: projects[0].id,
    creativeType: 'hook',
    tone: 'aggressive',
    targetAudience: 'People aged 25-45 in Spain interested in trading and making money online',
    additionalContext: '',
    videoLength: '30-60',
    language: 'spanish',
    useRufatPersona: false
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateCreative = async () => {
    setLoading(true);
    setGeneratedContent('');

    const selectedProject = projects.find(p => p.id === parseInt(formData.project as any));
    const selectedType = creativeTypes.find(t => t.value === formData.creativeType);
    const selectedTone = toneOptions.find(t => t.value === formData.tone);

    // Build prompt (same as before)
    let prompt = `You are an expert in digital marketing and copywriting for Facebook Ads, specialized in trading and finance niche for Spanish-speaking audience.

${formData.useRufatPersona ? `
CRITICAL: This creative is about RUFAT ABILOV - a real crypto trading expert.

RUFAT ABILOV PROFILE:
- Name: ${rufatInfo.name}
- Age: ${rufatInfo.age}
- Background: ${rufatInfo.background}
- Expertise: ${rufatInfo.expertise}

KEY ACHIEVEMENTS:
${rufatInfo.achievements.map(a => `• ${a}`).join('\n')}

PHILOSOPHY & BELIEFS:
${rufatInfo.philosophy.map(p => `• ${p}`).join('\n')}

POWERFUL STORIES TO USE:
${rufatInfo.stories.map(s => `• ${s}`).join('\n')}

TONE & STYLE:
- ${rufatInfo.tone}
- Speak from HIS perspective (first person when appropriate)
- Reference HIS specific achievements and stories
- Use HIS philosophy about markets and cycles

` : `
PROJECT CONTEXT:
- Name: ${selectedProject?.name}
- Instagram: ${selectedProject?.instagram}
- Niche: ${selectedProject?.niche}
`}

TASK: Create "${selectedType?.label}" for Facebook Ads

SPECIFICATIONS:
- Content type: ${selectedType?.desc}
- Tone: ${selectedTone?.label} - ${selectedTone?.desc}
- Target audience: ${formData.targetAudience}
- Video length (if applicable): ${formData.videoLength} seconds
- Language: SPANISH (Spanish-speaking audience)
${formData.additionalContext ? `- Additional context: ${formData.additionalContext}` : ''}

⚠️ CRITICAL COMPLIANCE REQUIREMENTS (Spain & Facebook Ads):

1. LEGAL DISCLAIMERS (Spanish Financial Law - CNMV):
   - ALWAYS include: "Las inversiones conllevan riesgos. Los rendimientos pasados no garantizan resultados futuros."
   - For crypto specifically: "Las criptomonedas son activos volátiles y no regulados."
   - No guarantees of returns: Use "potencial de" instead of "garantizado"

2. FACEBOOK ADS POLICIES:
   - NO misleading claims about earnings
   - NO "Get rich quick" promises
   - NO before/after comparisons implying guaranteed results
   - NO fake scarcity (unless genuinely limited)
   - Must be clear this is educational/informational

3. ETHICAL REQUIREMENTS:
   - Focus on education, not speculation
   - Emphasize risk management
   - Realistic expectations
   - Target sophisticated investors, not gamblers

4. PROHIBITED PHRASES:
   ❌ "Gana $10,000 garantizado"
   ❌ "Sin riesgo"
   ❌ "100% seguro"
   ❌ "Hazte rico en 30 días"
   
   ✅ INSTEAD USE:
   ✅ "Potencial de crecimiento"
   ✅ "Con gestión de riesgo"
   ✅ "Resultados variables"
   ✅ "Para inversores informados"

IMPORTANT INSTRUCTIONS:
1. Write EVERYTHING in natural, persuasive Spanish
2. Use emojis sparingly but effectively (2-4 per paragraph)
3. Apply proven copywriting techniques (AIDA, PAS, Hook-Story-Offer)
4. Include specific numbers when possible ($10K, 85% win rate, 30 days)
5. Create urgency and FOMO when the tone requires it
6. Speak directly to customer pain (9-5 job, no financial freedom)
7. Use language that resonates with Spanish speakers (libertad financiera, independencia)
8. For videos: clear structure with hook, development, and CTA
9. Avoid unrealistic promises but be persuasive
10. Include clear and specific calls to action
11. ALWAYS add compliance disclaimer at the end

${formData.creativeType === 'hook' ? `
Create 5 DIFFERENT HOOKS, each on a separate line. Each hook should:
- Maximum 10-15 words
- Grab attention in first 3 seconds
- Ask provocative question or make impactful statement
- Connect with audience's pain or desire
- BE COMPLIANT (no guaranteed earnings claims)
` : ''}

${formData.creativeType === 'full_post' ? `
Post structure:
1. POWERFUL HOOK (1-2 lines)
2. AGITATE pain or show desired result (2-3 lines)
3. SOLUTION with specific benefits (3-4 bullets)
4. SOCIAL PROOF or credibility (1-2 lines)
5. CLEAR and actionable CTA
6. P.S. with urgency or bonus
7. COMPLIANCE DISCLAIMER

Format the disclaimer clearly:
"⚠️ Aviso legal: Las inversiones conllevan riesgos..."
` : ''}

${formData.creativeType === 'video_script' ? `
Script structure:
0-3 sec: Visual hook + catchy phrase
3-15 sec: Present problem/pain
15-35 sec: Solution + benefits
35-50 sec: Social proof/results
50-60 sec: Strong CTA

Include visual directions in [brackets] and spoken text.
END with compliance note for video description.
` : ''}

${formData.creativeType === 'story' && formData.useRufatPersona ? `
Tell one of Rufat's REAL stories:
- Choose from: Electric shock survival, football rejection to contract, losing $100k, all-in at BTC $15k
- Make it personal and emotional
- Show transformation: before → after
- Connect to trading/investment lesson
- End with compliance disclaimer
` : ''}

GENERATE THE CONTENT NOW IN SPANISH:`;

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt,
          maxTokens: 2500
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate content');
      }

      const data = await response.json();
      const content = data.content;
      setGeneratedContent(content);
      
      // Check compliance
      const hasDisclaimer = content.toLowerCase().includes('riesgo') || 
                           content.toLowerCase().includes('rendimientos pasados');
      setShowCompliance(!hasDisclaimer);
      
      // Add to history
      setHistory(prev => [{
        id: Date.now(),
        timestamp: new Date().toLocaleString('en-US'),
        project: selectedProject?.name,
        type: selectedType?.label,
        tone: selectedTone?.label,
        rufat: formData.useRufatPersona,
        content: content
      }, ...prev].slice(0, 10));

    } catch (error) {
      setGeneratedContent('❌ Error generating content. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadAsText = () => {
    const selectedProject = projects.find(p => p.id === parseInt(formData.project as any));
    const blob = new Blob([generatedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedProject?.name}_${formData.creativeType}_${Date.now()}.txt`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Video className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FB Ads Creative Generator
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            🎯 Generate persuasive Spanish texts for your Facebook ads
          </p>
          <p className="text-sm text-gray-500 mt-2">
            82 videos · 13 projects · Rufat Abilov mode · Powered by Claude AI
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-green-700 font-medium">Spain & Facebook Ads Compliant</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Configuration Panel */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-600" />
              Configuration
            </h2>

            <div className="space-y-5">
              {/* Rufat Abilov Mode */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border-2 border-purple-200">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.useRufatPersona}
                    onChange={(e) => handleInputChange('useRufatPersona', e.target.checked)}
                    className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-purple-600" />
                    <span className="font-bold text-gray-800">Creative about Rufat Abilov</span>
                  </div>
                </label>
                {formData.useRufatPersona && (
                  <div className="mt-3 text-sm text-gray-700 space-y-1">
                    <p className="font-semibold">✅ Expert Mode Activated:</p>
                    <p>• Top-14 Bybit WSOT trader</p>
                    <p>• $1.7M earned in 2 years</p>
                    <p>• Real stories & achievements</p>
                    <p>• Contrarian trading philosophy</p>
                  </div>
                )}
              </div>

              {/* Project */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  🎯 Project / Expert
                </label>
                <select
                  value={formData.project}
                  onChange={(e) => handleInputChange('project', e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  disabled={formData.useRufatPersona}
                >
                  {projects.map(project => (
                    <option key={project.id} value={project.id}>
                      {project.name} ({project.niche})
                    </option>
                  ))}
                </select>
                {formData.useRufatPersona && (
                  <p className="text-xs text-purple-600 mt-1">
                    Using Rufat Abilov as primary expert
                  </p>
                )}
              </div>

              {/* Creative Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  📝 Creative Type
                </label>
                <select
                  value={formData.creativeType}
                  onChange={(e) => handleInputChange('creativeType', e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                >
                  {creativeTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  {creativeTypes.find(t => t.value === formData.creativeType)?.desc}
                </p>
              </div>

              {/* Tone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  🎨 Message Tone
                </label>
                <select
                  value={formData.tone}
                  onChange={(e) => handleInputChange('tone', e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                >
                  {toneOptions.map(tone => (
                    <option key={tone.value} value={tone.value}>
                      {tone.label}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  {toneOptions.find(t => t.value === formData.tone)?.desc}
                </p>
              </div>

              {/* Target Audience */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  👥 Target Audience
                </label>
                <textarea
                  value={formData.targetAudience}
                  onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  rows={2}
                  placeholder="Describe your target audience..."
                />
              </div>

              {/* Additional Context */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  💡 Additional Context (Optional)
                </label>
                <textarea
                  value={formData.additionalContext}
                  onChange={(e) => handleInputChange('additionalContext', e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  rows={3}
                  placeholder="E.g.: Special promotion, limited offer, new course, specific testimonials..."
                />
              </div>

              {/* Compliance Warning */}
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-yellow-800">
                    <p className="font-semibold mb-1">Compliance Reminder:</p>
                    <p>Generated content includes Spanish financial law disclaimers and follows Facebook Ads policies. Always review before publishing.</p>
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={generateCreative}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate Creative
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Zap className="w-6 h-6 text-purple-600" />
                Result
              </h2>
              {generatedContent && (
                <div className="flex gap-2">
                  <button
                    onClick={copyToClipboard}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Copy"
                  >
                    <Copy className={`w-5 h-5 ${copied ? 'text-green-600' : 'text-gray-600'}`} />
                  </button>
                  <button
                    onClick={downloadAsText}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Download"
                  >
                    <Download className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              )}
            </div>

            {showCompliance && generatedContent && (
              <div className="mb-4 bg-red-50 border-2 border-red-200 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-red-800">
                    <p className="font-semibold mb-1">⚠️ Missing Disclaimer!</p>
                    <p>Add this to your creative:</p>
                    <p className="mt-2 font-mono text-xs bg-white p-2 rounded">
                      ⚠️ Las inversiones conllevan riesgos. Los rendimientos pasados no garantizan resultados futuros.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 min-h-[400px] max-h-[600px] overflow-y-auto">
              {generatedContent ? (
                <div className="prose max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
                    {generatedContent}
                  </pre>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-400">
                  <Sparkles className="w-16 h-16 mb-4 opacity-20" />
                  <p className="text-lg">Configure parameters and press</p>
                  <p className="text-lg font-semibold">"Generate Creative"</p>
                  <p className="text-sm mt-2">to create persuasive content</p>
                  {formData.useRufatPersona && (
                    <p className="text-sm mt-3 text-purple-600 font-medium">
                      ✨ Rufat Abilov mode is active
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* History */}
        {history.length > 0 && (
          <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Book className="w-6 h-6 text-blue-600" />
              History (Last 10)
            </h2>
            <div className="space-y-3">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="border-2 border-gray-100 rounded-xl p-4 hover:border-blue-200 transition-colors cursor-pointer"
                  onClick={() => setGeneratedContent(item.content)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-gray-800">{item.project}</span>
                      {item.rufat && (
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                          Rufat Mode
                        </span>
                      )}
                      <span className="text-gray-400">·</span>
                      <span className="text-sm text-gray-600">{item.type}</span>
                      <span className="text-gray-400">·</span>
                      <span className="text-sm text-gray-600">{item.tone}</span>
                    </div>
                    <span className="text-xs text-gray-400">{item.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.content.substring(0, 150)}...
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Compliance Guide */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            📋 Spain & Facebook Compliance Guide
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-semibold mb-2">✅ ALWAYS Include:</p>
              <ul className="space-y-1 ml-4">
                <li>• Risk disclaimers for investments</li>
                <li>• "Past performance ≠ future results"</li>
                <li>• Crypto volatility warnings</li>
                <li>• Realistic expectations</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">❌ NEVER Use:</p>
              <ul className="space-y-1 ml-4">
                <li>• Guaranteed earnings claims</li>
                <li>• "Get rich quick" promises</li>
                <li>• Misleading before/after</li>
                <li>• Fake urgency/scarcity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            💡 Tips for Best Results
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• <strong>Hooks:</strong> Generate 5-10 options and A/B test the best ones</li>
            <li>• <strong>Short videos:</strong> First 3 seconds are critical</li>
            <li>• <strong>Emojis:</strong> Use strategically to highlight benefits</li>
            <li>• <strong>Specific numbers:</strong> "$10K in 30 days" converts better than "lots of money"</li>
            <li>• <strong>Social proof:</strong> Mention testimonials, real results, student count</li>
            <li>• <strong>Clear CTA:</strong> Tell them exactly what to do: "Join now", "Download free"</li>
            <li>• <strong>Rufat Mode:</strong> Use for authentic expert positioning with real track record</li>
            <li>• <strong>Compliance:</strong> Always review generated disclaimers before publishing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
