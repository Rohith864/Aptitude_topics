import React, { useState } from 'react';
import { Book, ChevronRight, ChevronDown, Lightbulb, Calculator, Target } from 'lucide-react';

const Notes = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const notes = {
    'Number System': {
      icon: <Calculator className="w-6 h-6" />,
      content: {
        basics: "Numbers are mathematical objects used to count, measure, and label. The number system includes natural numbers, whole numbers, integers, rational numbers, and irrational numbers.",
        keyFormulas: [
          "Sum of first n natural numbers: n(n+1)/2",
          "Sum of first n squares: n(n+1)(2n+1)/6",
          "Sum of first n cubes: [n(n+1)/2]²"
        ],
        importantConcepts: [
          "Prime Numbers: Numbers divisible only by 1 and themselves",
          "Composite Numbers: Numbers having more than two factors",
          "Perfect Numbers: Numbers equal to sum of their proper divisors",
          "Co-prime Numbers: Two numbers whose GCD is 1"
        ],
        tips: [
          "To check divisibility by 9, sum of digits should be divisible by 9",
          "A number is divisible by 11 if alternating sum of digits is divisible by 11",
          "For finding HCF and LCM quickly, use prime factorization"
        ]
      }
    },
    'Percentages': {
      icon: <Target className="w-6 h-6" />,
      content: {
        basics: "Percentage means 'per hundred'. It's a way to express a fraction with denominator 100. Percentages are widely used in profit/loss, discounts, and statistical comparisons.",
        keyFormulas: [
          "Percentage = (Part/Whole) × 100",
          "If value increases by R%, new value = Original × (1 + R/100)",
          "If value decreases by R%, new value = Original × (1 - R/100)",
          "Successive percentage changes: Final = Initial × (1±a/100) × (1±b/100)"
        ],
        importantConcepts: [
          "Population Growth/Decay: P = P₀(1±r/100)ⁿ",
          "Simple Interest: SI = (P×R×T)/100",
          "Compound Interest: CI = P(1+R/100)ⁿ - P",
          "Percentage Error = (|Observed - Actual|/Actual) × 100"
        ],
        tips: [
          "To find what percent A is of B: (A/B) × 100",
          "If A is R% more than B, then B is [R/(100+R)] × 100% less than A",
          "For quick calculations: 10% = 1/10, 20% = 1/5, 25% = 1/4, 33.33% = 1/3"
        ]
      }
    },
    'Time & Work': {
      icon: <Lightbulb className="w-6 h-6" />,
      content: {
        basics: "Time and Work problems deal with the rate of work done by individuals or groups. The key concept is that rate of work is inversely proportional to time taken.",
        keyFormulas: [
          "Work Rate = 1/Time taken to complete work",
          "Combined rate = Sum of individual rates",
          "Time = Work/Rate",
          "If A can do work in 'a' days and B in 'b' days, together they complete in ab/(a+b) days"
        ],
        importantConcepts: [
          "Man-hours concept: Total work = Number of people × Time",
          "Efficiency: If A is twice as efficient as B, A takes half the time",
          "Pipes and Cisterns: Same as work problems with filling/emptying rates",
          "Work and Wages: Payment is proportional to work done"
        ],
        tips: [
          "Always assume total work = LCM of given times for easy calculation",
          "In pipe problems: Inlet pipes add, outlet pipes subtract",
          "If work is increased/decreased, time changes inversely"
        ]
      }
    },
    'Profit & Loss': {
      icon: <Book className="w-6 h-6" />,
      content: {
        basics: "Profit & Loss deals with buying and selling of goods. Profit occurs when selling price > cost price, loss when selling price < cost price.",
        keyFormulas: [
          "Profit = Selling Price - Cost Price",
          "Loss = Cost Price - Selling Price",
          "Profit% = (Profit/Cost Price) × 100",
          "Loss% = (Loss/Cost Price) × 100",
          "SP = CP × (1 + Profit%/100)",
          "CP = SP × 100/(100 + Profit%)"
        ],
        importantConcepts: [
          "Marked Price: Price marked on the article",
          "Discount: Reduction from marked price",
          "Trade Discount: Discount given to retailers",
          "Cash Discount: Discount for immediate payment"
        ],
        tips: [
          "If SP of x articles = CP of y articles, then Profit% = [(y-x)/x] × 100",
          "For successive discounts of a% and b%: Net discount = a + b - ab/100",
          "Cost price can never be negative"
        ]
      }
    },
    'Time, Speed & Distance': {
      icon: <Target className="w-6 h-6" />,
      content: {
        basics: "These problems involve the relationship between distance covered, time taken, and speed of movement. Speed is distance per unit time.",
        keyFormulas: [
          "Speed = Distance/Time",
          "Distance = Speed × Time",
          "Time = Distance/Speed",
          "Average Speed = Total Distance/Total Time",
          "Relative Speed: Same direction = |S₁ - S₂|, Opposite = S₁ + S₂"
        ],
        importantConcepts: [
          "Unit Conversion: 1 m/s = 18/5 km/hr",
          "Trains: Time to cross = (Length of train + Platform)/Speed",
          "Boats: Upstream speed = u - v, Downstream = u + v (u=boat speed, v=stream speed)",
          "Circular Motion: Time for one round = Circumference/Speed"
        ],
        tips: [
          "When two objects move towards each other, they meet at time = distance/(sum of speeds)",
          "In still water problems, boat speed = (upstream + downstream)/2",
          "Stream speed = (downstream - upstream)/2"
        ]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Study Notes</h1>
          <p className="text-xl text-gray-600">
            Comprehensive notes covering all important aptitude topics
          </p>
        </div>

        <div className="space-y-6">
          {Object.entries(notes).map(([topicKey, topicData]) => (
            <div key={topicKey} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => setSelectedTopic(selectedTopic === topicKey ? null : topicKey)}
                className="w-full px-6 py-4 text-left bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-colors flex justify-between items-center"
              >
                <div className="flex items-center">
                  <div className="text-blue-600 mr-3">
                    {topicData.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{topicKey}</h2>
                </div>
                {selectedTopic === topicKey ? (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                )}
              </button>

              {selectedTopic === topicKey && (
                <div className="p-6 space-y-8">
                  {/* Basics */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Book className="w-5 h-5 text-blue-600 mr-2" />
                      Fundamentals
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{topicData.content.basics}</p>
                  </div>

                  {/* Key Formulas */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Calculator className="w-5 h-5 text-green-600 mr-2" />
                      Key Formulas
                    </h3>
                    <div className="space-y-2">
                      {topicData.content.keyFormulas.map((formula, index) => (
                        <div key={index} className="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
                          <code className="text-green-800 font-mono text-sm">{formula}</code>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Important Concepts */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Target className="w-5 h-5 text-purple-600 mr-2" />
                      Important Concepts
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {topicData.content.importantConcepts.map((concept, index) => (
                        <div key={index} className="bg-purple-50 p-4 rounded-lg">
                          <p className="text-purple-800 text-sm font-medium">{concept}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tips */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Lightbulb className="w-5 h-5 text-yellow-600 mr-2" />
                      Quick Tips
                    </h3>
                    <div className="space-y-2">
                      {topicData.content.tips.map((tip, index) => (
                        <div key={index} className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                          <p className="text-yellow-800 text-sm">💡 {tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;