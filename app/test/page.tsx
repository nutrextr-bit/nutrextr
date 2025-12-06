"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { CheckCircle2, AlertCircle, Heart, Sparkles, ArrowRight, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

interface Question {
  id: number
  question: string
  options: {
    text: string
    value: "A" | "B" | "C"
  }[]
}

const questions: Question[] = [
  {
    id: 1,
    question: "How often do you feel tired, even after a good night's sleep?",
    options: [
      { text: "Almost every day, I wake up tired.", value: "A" },
      { text: "Sometimes, but I manage through the day.", value: "B" },
      { text: "Rarely, I usually feel energetic.", value: "C" },
    ],
  },
  {
    id: 2,
    question: "When you climb stairs or walk briskly, how does your body respond?",
    options: [
      { text: "I get breathless halfway through.", value: "A" },
      { text: "Slightly winded, but manageable.", value: "B" },
      { text: "No issue, I can keep going easily.", value: "C" },
    ],
  },
  {
    id: 3,
    question: "How would you describe your skin tone lately?",
    options: [
      { text: "A bit pale or dull, people even ask if I'm unwell.", value: "A" },
      { text: "Looks normal, nothing unusual.", value: "B" },
      { text: "Healthy and bright as usual.", value: "C" },
    ],
  },
  {
    id: 4,
    question: "Do you feel dizzy or lightheaded when you stand up suddenly?",
    options: [
      { text: "Yes, often.", value: "A" },
      { text: "Occasionally.", value: "B" },
      { text: "Never.", value: "C" },
    ],
  },
  {
    id: 5,
    question: "What does your everyday diet look like?",
    options: [
      { text: "I skip meals or rely mostly on processed food.", value: "A" },
      { text: "Fairly balanced, though I may miss leafy greens or iron-rich food.", value: "B" },
      { text: "I eat a variety of foods and include enough iron sources.", value: "C" },
    ],
  },
  {
    id: 6,
    question: "How would you describe your menstrual cycle (if applicable)?",
    options: [
      { text: "Heavy bleeding or longer than usual periods.", value: "A" },
      { text: "Normal and consistent.", value: "B" },
      { text: "Not applicable.", value: "C" },
    ],
  },
  {
    id: 7,
    question: "Have you noticed brittle nails or unusual hair fall recently?",
    options: [
      { text: "Yes, both.", value: "A" },
      { text: "A little, but not too worrying.", value: "B" },
      { text: "No, nothing out of the ordinary.", value: "C" },
    ],
  },
  {
    id: 8,
    question: "How's your focus or mood lately?",
    options: [
      { text: "Low focus, easily fatigued, sometimes irritable.", value: "A" },
      { text: "I have some off days, but mostly fine.", value: "B" },
      { text: "Sharp, focused, and steady most of the time.", value: "C" },
    ],
  },
  {
    id: 9,
    question: "Have you ever been told you have low iron or hemoglobin?",
    options: [
      { text: "Yes, in previous tests.", value: "A" },
      { text: "Not sure.", value: "B" },
      { text: "No, never.", value: "C" },
    ],
  },
  {
    id: 10,
    question: "Do you crave things like ice, chalk, or clay? (It's a real symptom!)",
    options: [
      { text: "Yes, quite often.", value: "A" },
      { text: "Occasionally.", value: "B" },
      { text: "Never.", value: "C" },
    ],
  },
]

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, "A" | "B" | "C">>({})
  const [showResults, setShowResults] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<"A" | "B" | "C" | null>(null)

  const handleAnswer = (value: "A" | "B" | "C") => {
    setSelectedAnswer(value)
  }

  const handleNext = () => {
    if (selectedAnswer) {
      setAnswers({ ...answers, [questions[currentQuestion].id]: selectedAnswer })
      setSelectedAnswer(null)

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setShowResults(true)
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(answers[questions[currentQuestion - 1].id] || null)
    }
  }

  const calculateResults = () => {
    const counts = { A: 0, B: 0, C: 0 }
    Object.values(answers).forEach((answer) => {
      counts[answer]++
    })

    if (counts.A >= counts.B && counts.A >= counts.C) {
      return {
        type: "A",
        title: "Your body is asking for iron.",
        description:
          "You're showing several common signs of iron deficiency. Don't worry, it's quite common, especially among women. Try to include iron-rich foods like spinach, lentils, jaggery, dates, red meat, and pumpkin seeds. It's a good idea to get a CBC and ferritin test to confirm what's happening.",
        icon: AlertCircle,
        color: "text-[#e60000]",
        bgColor: "bg-red-50",
        borderColor: "border-[#e60000]",
      }
    } else if (counts.B >= counts.C) {
      return {
        type: "B",
        title: "You're slightly running low on fuel.",
        description:
          "You're doing fairly well, but your body may need more iron or better absorption. Include vitamin C-rich foods like citrus fruits to help your body absorb iron efficiently. Keep an eye on your energy levels and fatigue — you're close to balance.",
        icon: Heart,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-600",
      }
    } else {
      return {
        type: "C",
        title: "You're well-charged and balanced.",
        description:
          "You seem to be in good shape with no major warning signs. Still, it's smart to check your iron levels occasionally, especially if you have a busy schedule or heavy physical activity. Maintain your diet and hydration — prevention is always better than cure.",
        icon: CheckCircle2,
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-600",
      }
    }
  }

  const results = showResults ? calculateResults() : null
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-white to-red-50">
        {!showResults ? (
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-3xl">
              {/* Header */}
              <div className="text-center space-y-4 mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full">
                  <Sparkles className="w-4 h-4 text-[#e60000]" />
                  <span className="text-sm font-medium text-[#e60000]">Free Self-Assessment</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
                  How Tired Are You, <span className="text-[#e60000]">Really?</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  A quick 2-minute quiz to understand if your body might be running low on iron.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  (This is not a diagnosis. Only a blood test can confirm it. This is simply a friendly check to help
                  you notice patterns.)
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-medium text-[#e60000]">{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-[#e60000] h-full rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <Card className="border-2 border-[#e60000] shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="space-y-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                      {questions[currentQuestion].question}
                    </h2>

                    <RadioGroup value={selectedAnswer || ""} onValueChange={(value) => handleAnswer(value as any)}>
                      <div className="space-y-4">
                        {questions[currentQuestion].options.map((option, idx) => (
                          <div key={idx} className="relative">
                            <RadioGroupItem value={option.value} id={`option-${idx}`} className="peer sr-only" />
                            <Label
                              htmlFor={`option-${idx}`}
                              className={cn(
                                "flex items-center p-5 rounded-xl border-2 cursor-pointer transition-all duration-200",
                                "hover:border-[#e60000] hover:bg-red-50",
                                "peer-data-[state=checked]:border-[#e60000] peer-data-[state=checked]:bg-red-50 peer-data-[state=checked]:shadow-md",
                              )}
                            >
                              <div className="flex items-center gap-4 w-full">
                                <div
                                  className={cn(
                                    "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                                    selectedAnswer === option.value
                                      ? "border-[#e60000] bg-[#e60000]"
                                      : "border-gray-300",
                                  )}
                                >
                                  {selectedAnswer === option.value && <div className="w-3 h-3 rounded-full bg-white" />}
                                </div>
                                <span className="text-base leading-relaxed">{option.text}</span>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                {currentQuestion > 0 && (
                  <Button
                    onClick={handlePrevious}
                    variant="outline"
                    size="lg"
                    className="border-[#e60000] text-[#e60000] hover:bg-red-50 bg-transparent"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                )}
                <Button
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                  size="lg"
                  className="ml-auto bg-[#e60000] hover:bg-[#cc0000] text-white disabled:opacity-50"
                >
                  {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
              {/* Results Header */}
              <div className="text-center space-y-4 mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e60000] rounded-full">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">Your Results</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Assessment <span className="text-[#e60000]">Complete</span>
                </h1>
              </div>

              {/* Results Card */}
              {results && (
                <Card className={cn("border-4 shadow-2xl mb-8", results.borderColor)}>
                  <CardContent className={cn("p-8 md:p-12", results.bgColor)}>
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div className={cn("w-20 h-20 rounded-full flex items-center justify-center", results.bgColor)}>
                        <results.icon className={cn("w-12 h-12", results.color)} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{results.title}</h2>
                      <p className="text-base md:text-lg text-foreground leading-relaxed max-w-2xl">
                        {results.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Disclaimer */}
              <Card className="border-2 mb-8">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-[#e60000]" />
                    Disclaimer
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This quiz is only a general wellness check, not a medical assessment. For an accurate diagnosis,
                    consult a healthcare professional and request a pathological test such as a hemoglobin or ferritin
                    check.
                  </p>
                </CardContent>
              </Card>

              {/* CTA Sections */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-[#e60000] hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto">
                      <Heart className="w-8 h-8 text-[#e60000]" />
                    </div>
                    <h3 className="text-xl font-bold">Try Nutrextr Jellies</h3>
                    <p className="text-sm text-muted-foreground">Natural iron supplementation made delicious</p>
                    <Button className="w-full bg-[#e60000] hover:bg-[#cc0000] text-white">Join the Waitlist</Button>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8 text-[#e60000]" />
                    </div>
                    <h3 className="text-xl font-bold">Retake the Test</h3>
                    <p className="text-sm text-muted-foreground">Want to check again? Take the test anytime</p>
                    <Button
                      onClick={() => {
                        setCurrentQuestion(0)
                        setAnswers({})
                        setShowResults(false)
                        setSelectedAnswer(null)
                      }}
                      variant="outline"
                      className="w-full border-[#e60000] text-[#e60000] hover:bg-red-50"
                    >
                      Start Over
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
