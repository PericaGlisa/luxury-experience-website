import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactContent } from "@/components/contact-content"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactContent />
      <Footer />
    </main>
  )
}
