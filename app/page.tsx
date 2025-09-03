import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main>
      <section
        className="relative min-h-[70vh] w-full"
        style={{
          backgroundImage: "url('/indoor-houseplants-on-shelf-soft-light.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-5xl flex-col items-start justify-center px-4 text-white">
          <h1 className="text-balance text-3xl font-bold md:text-5xl">GreenNest Plants</h1>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed md:text-lg">
            We curate healthy, easy-care houseplants to bring calm and cleaner air into your home. Explore our
            collection and grow your indoor oasis.
          </p>
          <Link href="/products" className="mt-6">
            <Button variant="default" className="bg-green-600 hover:bg-green-700">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-balance text-2xl font-semibold">Why plants?</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground leading-relaxed">
          Houseplants can improve well-being, enhance focus, and purify the air. Start small and watch your space
          thrive.
        </p>
      </section>
    </main>
  )
}
