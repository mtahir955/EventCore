import { Header } from "../events/components/header"
import { EventsSection } from "../events/components/events-section"
import { Footer } from "../events/components/footer" 

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <EventsSection />
      <Footer />
    </div>
  )
}
