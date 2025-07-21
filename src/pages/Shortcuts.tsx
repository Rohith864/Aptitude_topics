import React, { useState } from 'react';
import { Zap, Clock, Calculator, Target, ChevronRight, ChevronDown, Copy, Check } from 'lucide-react';

const Shortcuts = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [copiedTricks, setCopiedTricks] = useState<{ [key: string]: boolean }>({});

  const shortcuts = {
    'Quick Calculations': {
      icon: <Zap className="w-6 h-6" />,
      tricks: [
        {
          title: "Squaring numbers ending in 5",
          method: "For numbers like 25², 35², 45²",
          formula: "(ab5)² = ab(ab+1)25",
          example: "25² = 2×3 = 6, so 625 | 35² = 3×4 = 12, so 1225",
          timesSaved: "70% faster"
        },
        {
          title: "Multiplication by 11",
          method: "For 2-digit numbers",
          formula: "Add digits, place between original digits",
          example: "23 × 11 = 2(2+3)3 = 253 | 47 × 11 = 4(4+7)7 = 4(11)7 = 517",
          timesSaved: "80% faster"
        },
        {
          title: "Divisibility by 9",
          method: "Sum of digits rule",
          formula: "If sum of digits is divisible by 9",
          example: "729: 7+2+9=18, 18÷9=2, so 729 is divisible by 9",
          timesSaved: "90% faster"
        }
      ]
    },
    'Percentage Shortcuts': {
      icon: <Target className="w-6 h-6" />,
      tricks: [
        {
          title: "Quick percentage calculations",
          method: "Breaking into simple fractions",
          formula: "25% = ¼, 20% = ⅕, 12.5% = ⅛, 33.33% = ⅓",
          example: "25% of 240 = 240÷4 = 60 | 20% of 150 = 150÷5 = 30",
          timesSaved: "60% faster"
        },
        {
          title: "Percentage increase/decrease",
          method: "When A is R% more than B",
          formula: "B is [R/(100+R)] × 100% less than A",
          example: "If A is 25% more than B, then B is (25/125)×100 = 20% less than A",
          timesSaved: "50% faster"
        },
        {
          title: "Successive percentage changes",
          method: "Two changes a% and b%",
          formula: "Net change = a + b + (ab/100)",
          example: "20% increase then 10% decrease: 20-10+(20×(-10)/100) = 8% increase",
          timesSaved: "70% faster"
        }
      ]
    },
    'Time & Speed': {
      icon: <Clock className="w-6 h-6" />,
      tricks: [
        {
          title: "Unit conversion trick",
          method: "km/hr to m/s and vice versa",
          formula: "km/hr to m/s: multiply by 5/18 | m/s to km/hr: multiply by 18/5",
          example: "72 km/hr = 72 × 5/18 = 20 m/s | 15 m/s = 15 × 18/5 = 54 km/hr",
          timesSaved: "85% faster"
        },
        {
          title: "Relative speed shortcut",
          method: "When objects meet",
          formula: "Same direction: |S₁-S₂| | Opposite: S₁+S₂",
          example: "Cars at 60, 40 km/hr: Same direction = 20 km/hr, Opposite = 100 km/hr",
          timesSaved: "60% faster"
        },
        {
          title: "Train crossing platform",
          method: "Time to cross platform/bridge",
          formula: "Time = (Train length + Platform length)/Speed",
          example: "200m train, 300m platform, 72 km/hr: Time = (200+300)/20 = 25 seconds",
          timesSaved: "40% faster"
        }
      ]
    },
    'Profit & Loss': {
      icon: <Calculator className="w-6 h-6" />,
      tricks: [
        {
          title: "Quick profit percentage",
          method: "When SP of x articles = CP of y articles",
          formula: "Profit% = [(y-x)/x] × 100",
          example: "SP of 5 articles = CP of 6 articles: Profit% = (6-5)/5 × 100 = 20%",
          timesSaved: "75% faster"
        },
        {
          title: "Marked Price shortcut",
          method: "Given discount and profit",
          formula: "MP = CP × (100+P%)/(100-D%)",
          example: "CP=100, Profit=20%, Discount=10%: MP = 100×120/90 = 133.33",
          timesSaved: "65% faster"
        },
        {
          title: "Successive discounts",
          method: "Two discounts a% and b%",
          formula: "Net discount = a + b - (ab/100)",
          example: "Discounts 20% and 15%: Net = 20+15-(20×15/100) = 32%",
          timesSaved: "80% faster"
        }
      ]
    }
  };

  const copyTrick = (trickKey: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTricks({ ...copiedTricks, [trickKey]: true });
    setTimeout(() => {
      setCopiedTricks({ ...copiedTricks, [trickKey]: false });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Quick Shortcuts & Tricks</h1>
          <p className="text-xl text-gray-600 mb-6">
            Master time-saving techniques and mental math shortcuts for competitive exams
          </p>
          <div className="inline-flex items-center bg-yellow-100 px-4 py-2 rounded-full">
            <Zap className="w-5 h-5 text-yellow-600 mr-2" />
            <span className="text-yellow-800 font-medium">Save 50-90% calculation time!</span>
          </div>
        </div>

        <div className="space-y-6">
          {Object.entries(shortcuts).map(([topicKey, topicData]) => (
            <div key={topicKey} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => setSelectedTopic(selectedTopic === topicKey ? null : topicKey)}
                className="w-full px-6 py-4 text-left bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 transition-colors flex justify-between items-center"
              >
                <div className="flex items-center">
                  <div className="text-orange-600 mr-3">
                    {topicData.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{topicKey}</h2>
                  <span className="ml-3 bg-orange-200 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                    {topicData.tricks.length} tricks
                  </span>
                </div>
                {selectedTopic === topicKey ? (
                  <ChevronDown className="w-5 h-5 text-orange-600" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-orange-600" />
                )}
              </button>

              {selectedTopic === topicKey && (
                <div className="p-6 space-y-6">
                  {topicData.tricks.map((trick, index) => {
                    const trickKey = `${topicKey}-${index}`;
                    const isCopied = copiedTricks[trickKey];
                    const trickText = `${trick.title}\nMethod: ${trick.method}\nFormula: ${trick.formula}\nExample: ${trick.example}`;

                    return (
                      <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{trick.title}</h3>
                            <div className="flex items-center gap-4">
                              <span className="inline-flex items-center bg-green-100 px-3 py-1 rounded-full text-sm font-medium text-green-800">
                                <Clock className="w-4 h-4 mr-1" />
                                {trick.timesSaved}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => copyTrick(trickKey, trickText)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                            title="Copy trick"
                          >
                            {isCopied ? (
                              <Check className="w-5 h-5 text-green-600" />
                            ) : (
                              <Copy className="w-5 h-5" />
                            )}
                          </button>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-medium text-blue-900 mb-2">Method:</h4>
                            <p className="text-blue-800 text-sm">{trick.method}</p>
                          </div>

                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-medium text-purple-900 mb-2">Formula/Rule:</h4>
                            <code className="text-purple-800 text-sm font-mono bg-white px-2 py-1 rounded">
                              {trick.formula}
                            </code>
                          </div>

                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-medium text-green-900 mb-2">Example:</h4>
                            <p className="text-green-800 text-sm font-mono">{trick.example}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Tips Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Pro Tips for Using Shortcuts</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Practice Regularly</h3>
                <p className="text-gray-100 text-sm">Master one shortcut at a time through daily practice</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Time Yourself</h3>
                <p className="text-gray-100 text-sm">Compare solving time with and without shortcuts</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">Apply in Exams</h3>
                <p className="text-gray-100 text-sm">Use shortcuts strategically during competitive exams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shortcuts;