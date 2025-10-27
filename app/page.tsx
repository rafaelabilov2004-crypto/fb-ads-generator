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
    project: projects[13].id, // Default to Rufat Abilov
    creativeType: 'hook',
    tone: 'aggressive',
    targetAudience: 'People aged 25-45 in Spain interested in trading and making money online',
    additionalContext: '',
    videoLength: '30-60',
    language: 'spanish',
    useRufatPersona: true // Default to true
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

    // Build prompt with new logic
    let prompt = `You are an expert in digital marketing and copywriting for Facebook Ads, specialized in trading and finance niche for Spanish-speaking audience.

${formData.useRufatPersona ? `
CRITICAL: Write this creative in RUFAT ABILOV'S STYLE AND VOICE.

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

WRITING STYLE:
- ${rufatInfo.tone}
- Speak from first person when appropriate
- Reference specific achievements and stories
- Use contrarian philosophy about markets and cycles
- Bold, direct, no-nonsense approach

PROJECT CONTEXT (adapt Rufat's style for this project):
- Name: ${selectedProject?.name}
- Instagram: ${selectedProject?.instagram}
- Niche: ${selectedProject?.niche}
` : `
PROJECT CONTEXT:
- Name: ${selectedProject?.name}
- Instagram: ${selectedProject?.instagram}
- Niche: ${selectedProject?.niche}

Use a professional, credible tone appropriate for this project.
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
   ✅ "Inversión inteligente"

OUTPUT FORMAT:
${formData.creativeType === 'hook' ? `
- Provide 5-10 hook variations
- Each hook should be 1-2 sentences max
- Number them clearly
- Make each unique and attention-grabbing
` : formData.creativeType === 'video_script' ? `
- Clear structure: Hook (3 sec) → Problem → Solution → CTA
- Include visual suggestions in [brackets]
- Keep to ${formData.videoLength} seconds
- Add timing markers
` : `
- Well-structured, persuasive copy
- Include emojis strategically
- Clear CTA at the end
- Compliance disclaimer at the bottom
`}

COMPLIANCE CHECK:
At the end, add a section "⚠️ COMPLIANCE STATUS:" and confirm:
- ✅ Risk disclaimer included
- ✅ No guaranteed returns promised
- ✅ Crypto volatility warning (if applicable)
- ✅ Facebook Ads policy compliant

Now create the ${selectedType?.label} in perfect Spanish!`;

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Generation failed');
      }

      const data = await response.json();
      setGeneratedContent(data.content);
      
      // Check compliance
      const hasDisclaimer = data.content.toLowerCase().includes('inversiones conllevan riesgos') || 
                           data.content.toLowerCase().includes('rendimientos pasados');
      setShowCompliance(!hasDisclaimer);

      // Add to history
      const historyItem = {
        id: Date.now(),
        project: selectedProject?.name,
        type: selectedType?.label,
        tone: selectedTone?.label,
        content: data.content,
        timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
        rufat: formData.useRufatPersona
      };
      
      setHistory(prev => [historyItem, ...prev].slice(0, 10));
    } catch (error) {
      console.error('Error:', error);
      setGeneratedContent('Error generating content. Please try again.');
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
    const blob = new Blob([generatedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fb-ads-creative-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Video className="w-10 h-10 text-blue-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FB Ads Creative Generator
            </h1>
          </div>
          <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
            🎯 Generate persuasive Spanish texts for your Facebook ads
          </p>
          <div className="flex items-center justify-center gap-4 mt-3 text-sm text-gray-500">
            <span>82 videos</span>
            <span>•</span>
            <span>13 projects</span>
            <span>•</span>
            <span>Rufat Abilov mode</span>
            <span>•</span>
            <span>Powered by Claude AI</span>
          </div>
          <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200">
            <Shield className="w-4 h-4" />
            Spain & Facebook Ads Compliant
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Configuration</h2>
            </div>

            <div className="space-y-6">
              {/* Rufat Persona Toggle - ALWAYS VISIBLE */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border-2 border-purple-200">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.useRufatPersona}
                    onChange={(e) => handleInputChange('useRufatPersona', e.target.checked)}
                    className="w-5 h-5 rounded border-purple-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-purple-600" />
                      <span className="font-bold text-purple-900">Write in Rufat Abilov's Style</span>
                    </div>
                    <p className="text-sm text-purple-700 mt-1">
                      Use Rufat's voice, philosophy, and stories in the creative
                    </p>
                  </div>
                </label>
              </div>

              {/* Project Selection - ALWAYS ENABLED */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  🎯 Project / Expert
                </label>
                <select
                  value={formData.project}
                  onChange={(e) => handleInputChange('project', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-800 bg-white"
                >
                  {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.name} - {project.niche}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  {formData.useRufatPersona 
                    ? "Content will be written in Rufat's style for this project" 
                    : "Content will be written in standard professional style"}
                </p>
              </div>

              {/* Creative Type */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  📝 Creative Type
                </label>
                <select
                  value={formData.creativeType}
                  onChange={(e) => handleInputChange('creativeType', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-800 bg-white"
                >
                  {creativeTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label} - {type.desc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Tone */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  🎨 Message Tone
                </label>
                <select
                  value={formData.tone}
                  onChange={(e) => handleInputChange('tone', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-800 bg-white"
                >
                  {toneOptions.map((tone) => (
                    <option key={tone.value} value={tone.value}>
                      {tone.label} - {tone.desc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Target Audience */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  👥 Target Audience
                </label>
                <textarea
                  value={formData.targetAudience}
                  onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                  placeholder="Describe your target audience..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all min-h-[100px] text-gray-800 bg-white"
                />
              </div>

              {/* Additional Context */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  💡 Additional Context (Optional)
                </label>
                <textarea
                  value={formData.additionalContext}
                  onChange={(e) => handleInputChange('additionalContext', e.target.value)}
                  placeholder="Any specific details, offers, or context..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all min-h-[100px] text-gray-800 bg-white"
                />
              </div>

              {/* Compliance Reminder */}
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-yellow-800">
                    <p className="font-semibold mb-1">⚠️ Compliance Reminder:</p>
                    <p>
                      Generated content includes Spanish financial law disclaimers
                      and follows Facebook Ads policies. Always review before publishing.
                    </p>
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
                      ✨ Rufat Abilov style is active
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
                          Rufat Style
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
            <li>• <strong>Rufat Style:</strong> Enable for authentic expert positioning with real track record</li>
            <li>• <strong>Compliance:</strong> Always review generated disclaimers before publishing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}'use client';

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
    project: projects[13].id, // Default to Rufat Abilov
    creativeType: 'hook',
    tone: 'aggressive',
    targetAudience: 'People aged 25-45 in Spain interested in trading and making money online',
    additionalContext: '',
    videoLength: '30-60',
    language: 'spanish',
    useRufatPersona: true // Default to true
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

    // Build prompt with new logic
    let prompt = `You are an expert in digital marketing and copywriting for Facebook Ads, specialized in trading and finance niche for Spanish-speaking audience.

${formData.useRufatPersona ? `
CRITICAL: Write this creative in RUFAT ABILOV'S STYLE AND VOICE.

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

WRITING STYLE:
- ${rufatInfo.tone}
- Speak from first person when appropriate
- Reference specific achievements and stories
- Use contrarian philosophy about markets and cycles
- Bold, direct, no-nonsense approach

PROJECT CONTEXT (adapt Rufat's style for this project):
- Name: ${selectedProject?.name}
- Instagram: ${selectedProject?.instagram}
- Niche: ${selectedProject?.niche}
` : `
PROJECT CONTEXT:
- Name: ${selectedProject?.name}
- Instagram: ${selectedProject?.instagram}
- Niche: ${selectedProject?.niche}

Use a professional, credible tone appropriate for this project.
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
   ✅ "Inversión inteligente"

OUTPUT FORMAT:
${formData.creativeType === 'hook' ? `
- Provide 5-10 hook variations
- Each hook should be 1-2 sentences max
- Number them clearly
- Make each unique and attention-grabbing
` : formData.creativeType === 'video_script' ? `
- Clear structure: Hook (3 sec) → Problem → Solution → CTA
- Include visual suggestions in [brackets]
- Keep to ${formData.videoLength} seconds
- Add timing markers
` : `
- Well-structured, persuasive copy
- Include emojis strategically
- Clear CTA at the end
- Compliance disclaimer at the bottom
`}

COMPLIANCE CHECK:
At the end, add a section "⚠️ COMPLIANCE STATUS:" and confirm:
- ✅ Risk disclaimer included
- ✅ No guaranteed returns promised
- ✅ Crypto volatility warning (if applicable)
- ✅ Facebook Ads policy compliant

Now create the ${selectedType?.label} in perfect Spanish!`;

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Generation failed');
      }

      const data = await response.json();
      setGeneratedContent(data.content);
      
      // Check compliance
      const hasDisclaimer = data.content.toLowerCase().includes('inversiones conllevan riesgos') || 
                           data.content.toLowerCase().includes('rendimientos pasados');
      setShowCompliance(!hasDisclaimer);

      // Add to history
      const historyItem = {
        id: Date.now(),
        project: selectedProject?.name,
        type: selectedType?.label,
        tone: selectedTone?.label,
        content: data.content,
        timestamp: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
        rufat: formData.useRufatPersona
      };
      
      setHistory(prev => [historyItem, ...prev].slice(0, 10));
    } catch (error) {
      console.error('Error:', error);
      setGeneratedContent('Error generating content. Please try again.');
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
    const blob = new Blob([generatedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fb-ads-creative-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Video className="w-10 h-10 text-blue-600" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FB Ads Creative Generator
            </h1>
          </div>
          <p className="text-xl text-gray-600 flex items-center justify-center gap-2">
            🎯 Generate persuasive Spanish texts for your Facebook ads
          </p>
          <div className="flex items-center justify-center gap-4 mt-3 text-sm text-gray-500">
            <span>82 videos</span>
            <span>•</span>
            <span>13 projects</span>
            <span>•</span>
            <span>Rufat Abilov mode</span>
            <span>•</span>
            <span>Powered by Claude AI</span>
          </div>
          <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200">
            <Shield className="w-4 h-4" />
            Spain & Facebook Ads Compliant
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">Configuration</h2>
            </div>

            <div className="space-y-6">
              {/* Rufat Persona Toggle - ALWAYS VISIBLE */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border-2 border-purple-200">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.useRufatPersona}
                    onChange={(e) => handleInputChange('useRufatPersona', e.target.checked)}
                    className="w-5 h-5 rounded border-purple-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-purple-600" />
                      <span className="font-bold text-purple-900">Write in Rufat Abilov's Style</span>
                    </div>
                    <p className="text-sm text-purple-700 mt-1">
                      Use Rufat's voice, philosophy, and stories in the creative
                    </p>
                  </div>
                </label>
              </div>

              {/* Project Selection - ALWAYS ENABLED */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  🎯 Project / Expert
                </label>
                <select
                  value={formData.project}
                  onChange={(e) => handleInputChange('project', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-800 bg-white"
                >
                  {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.name} - {project.niche}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  {formData.useRufatPersona 
                    ? "Content will be written in Rufat's style for this project" 
                    : "Content will be written in standard professional style"}
                </p>
              </div>

              {/* Creative Type */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  📝 Creative Type
                </label>
                <select
                  value={formData.creativeType}
                  onChange={(e) => handleInputChange('creativeType', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-800 bg-white"
                >
                  {creativeTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label} - {type.desc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Tone */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  🎨 Message Tone
                </label>
                <select
                  value={formData.tone}
                  onChange={(e) => handleInputChange('tone', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-800 bg-white"
                >
                  {toneOptions.map((tone) => (
                    <option key={tone.value} value={tone.value}>
                      {tone.label} - {tone.desc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Target Audience */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  👥 Target Audience
                </label>
                <textarea
                  value={formData.targetAudience}
                  onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                  placeholder="Describe your target audience..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all min-h-[100px] text-gray-800 bg-white"
                />
              </div>

              {/* Additional Context */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  💡 Additional Context (Optional)
                </label>
                <textarea
                  value={formData.additionalContext}
                  onChange={(e) => handleInputChange('additionalContext', e.target.value)}
                  placeholder="Any specific details, offers, or context..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all min-h-[100px] text-gray-800 bg-white"
                />
              </div>

              {/* Compliance Reminder */}
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-yellow-800">
                    <p className="font-semibold mb-1">⚠️ Compliance Reminder:</p>
                    <p>
                      Generated content includes Spanish financial law disclaimers
                      and follows Facebook Ads policies. Always review before publishing.
                    </p>
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
                      ✨ Rufat Abilov style is active
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
                          Rufat Style
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
            <li>• <strong>Rufat Style:</strong> Enable for authentic expert positioning with real track record</li>
            <li>• <strong>Compliance:</strong> Always review generated disclaimers before publishing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
