import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  return (
    <div className="pt-24">
      <section className="container-custom py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Flexible Pricing Plans</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your music production needs. All plans include high-quality African beats with
            no hidden fees.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-card-bg rounded-full p-1 inline-flex">
            <button className="px-6 py-2 rounded-full bg-accent text-white">Monthly</button>
            <button className="px-6 py-2 rounded-full text-foreground">Yearly (Save 20%)</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card p-8 border ${plan.popular ? "border-2 border-primary relative" : "border-gray-200 dark:border-gray-800"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                <p className="text-gray-600 h-12">{plan.description}</p>
              </div>

              <div className="flex justify-center items-end gap-1 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 mb-1">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.limitations && (
                <div className="mb-8">
                  <p className="text-sm text-gray-500 mb-2">Limitations:</p>
                  <ul className="space-y-2">
                    {plan.limitations.map((limitation, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-500">
                        <X className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Button className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}>
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-card-bg rounded-xl shadow-md p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-6 last:border-0">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Data
const plans = [
  {
    name: "Basic",
    description: "Perfect for beginners and hobbyists",
    price: "₦1,500",
    features: ["Access to 100+ Starter Beats", "MP3 Downloads", "Basic License", "Ad-Free Listening", "Email Support"],
    limitations: ["No WAV File Access", "No Track Stems", "Limited Downloads (10/month)"],
    popular: false,
  },
  {
    name: "Premium",
    description: "Ideal for serious artists and producers",
    price: "₦6,500",
    features: [
      "Access to All Beats",
      "MP3 & WAV Downloads",
      "Premium License",
      "Unlimited Downloads",
      "Priority Support",
      "Beat Customization (3/month)",
    ],
    popular: true,
  },
  {
    name: "Professional",
    description: "For full-time musicians and studios",
    price: "₦12,000",
    features: [
      "All Premium Features",
      "Full Track Stems",
      "Exclusive Licensing Options",
      "One-on-One Producer Sessions",
      "Commercial Usage Rights",
      "Unlimited Beat Customization",
      "24/7 VIP Support",
    ],
    popular: false,
  },
]

const faqs = [
  {
    question: "What types of licenses do you offer?",
    answer:
      "We offer Basic, Premium, and Exclusive licenses. Basic licenses allow for non-commercial use, Premium licenses include commercial rights with certain limitations, and Exclusive licenses transfer full ownership rights to you.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes, you can upgrade your plan at any time. When you upgrade, you'll only pay the prorated difference for the remainder of your billing cycle.",
  },
  {
    question: "How do I download my purchased beats?",
    answer:
      "After purchasing, you can download your beats from your account dashboard. Premium and Professional plan users can also access different file formats and stems.",
  },
  {
    question: "Can I request custom beats?",
    answer:
      "Yes, Premium and Professional plan subscribers can request custom beat modifications. Professional plan users get unlimited customization requests.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, PayPal, mobile money transfers, and local bank transfers within Nigeria and select African countries.",
  },
]

