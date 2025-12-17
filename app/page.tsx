import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Home from "@/components/pages/Home"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <Home />
      </main>
      <Footer />
    </div>
  )
}
