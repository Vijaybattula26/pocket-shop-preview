import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Simple Shop — Browse Products" },
      {
        name: "description",
        content:
          "A simple one-page shop preview. See every section of the site and browse the product placeholders.",
      },
      { property: "og:title", content: "Simple Shop — Browse Products" },
      {
        property: "og:description",
        content:
          "A simple one-page shop preview. See every section of the site and browse the product placeholders.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  const scrollToProducts = () => {
    document
      .getElementById("products")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 px-4 py-4 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Simple Shop
          </span>
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            [Shop name placeholder]
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 pb-16">
        {/* Hero */}
        <section className="pt-12 pb-10 text-center sm:pt-16">
          <p className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
            One-page preview
          </p>
          <h1 className="text-3xl leading-tight font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need, on one simple page
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
            Welcome! This is a preview of our shop. Scroll down to see every
            section — the products, the details and how to get in touch — all
            in one place.
          </p>
          <button
            onClick={scrollToProducts}
            className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:w-auto"
          >
            See the products ↓
          </button>
        </section>

        {/* Example section: products */}
        <section id="products" className="scroll-mt-20">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Example products
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              These are sample placeholders — names, prices and photos will be
              filled in with real products.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <article
                key={n}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="flex aspect-4/3 items-center justify-center border-b border-border bg-muted">
                  <span className="text-xs font-medium text-muted-foreground">
                    [Product photo {n} placeholder]
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">
                    Product {n}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    [Short product description]
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">
                      [Price]
                    </span>
                    <span className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
                      [Buy button]
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact / next steps */}
        <section className="mt-12 rounded-2xl border border-border bg-card p-6 text-center sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            Questions before buying?
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
            Reach out and we'll help. Contact details are placeholders for now.
          </p>
          <p className="mt-4 text-sm font-medium text-primary">
            [Email address placeholder]
          </p>
        </section>
      </main>

      <footer className="border-t border-border bg-card/50 px-4 py-6 text-center text-xs text-muted-foreground">
        Simple Shop — preview only. Nothing is for sale yet.
      </footer>
    </div>
  );
}
