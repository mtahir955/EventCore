import { Header } from "../privacy-policy/components/header"
import { Footer } from "../privacy-policy/components/footer"
import { PrivacyPolicyContent } from "../privacy-policy/components/privacy-policy-content"
import { ThemeProvider } from "next-themes";

export default function PrivacyPolicyPage() {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1440px] mx-auto">
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </div>
    </ThemeProvider>
  )
}
