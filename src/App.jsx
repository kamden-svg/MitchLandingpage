export default function MitchInsuranceLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.22),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_24%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <nav className="flex items-center justify-between py-4">
            <div>
              <p className="text-xl font-semibold tracking-tight">Mitch Insurance</p>
              <p className="text-sm text-slate-300">Auto • Home • Renters • Life • Business</p>
            </div>
            <a
              href="#quote-form"
              className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Get a Quote
            </a>
          </nav>

          <div className="grid gap-12 py-12 lg:grid-cols-2 lg:items-center lg:py-20">
            <div className="max-w-xl">
              <div className="mb-5 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                Personal insurance help from Mitch
              </div>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Protect what matters without overpaying.
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Get help reviewing your current coverage, comparing options, and building a plan that actually fits your life.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#quote-form"
                  className="rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Start My Quote
                </a>
                <a
                  href="#benefits"
                  className="rounded-full border border-white/15 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  See How It Works
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-2xl font-semibold">Fast</p>
                  <p className="mt-1 text-sm text-slate-400">Quick quote review</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">Clear</p>
                  <p className="mt-1 text-sm text-slate-400">Simple explanations</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">Personal</p>
                  <p className="mt-1 text-sm text-slate-400">One-on-one support</p>
                </div>
              </div>
            </div>

            <div id="quote-form" className="lg:pl-10">
              <div className="rounded-[28px] bg-white p-6 text-slate-900 shadow-[0_30px_80px_rgba(15,23,42,0.35)] ring-1 ring-slate-200 sm:p-8">
                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Free quote review</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight">Get started in under a minute</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Fill this out and Mitch will reach out to review your options and help you see if there is a better fit.
                  </p>
                </div>

                <form className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">First name</label>
                    <input type="text" placeholder="First name" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Last name</label>
                    <input type="text" placeholder="Last name" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
                    <input type="tel" placeholder="(555) 555-5555" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                    <input type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">ZIP code</label>
                    <input type="text" placeholder="ZIP code" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Coverage type</label>
                    <select className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-500">
                      <option>Auto</option>
                      <option>Home</option>
                      <option>Renters</option>
                      <option>Life</option>
                      <option>Business</option>
                      <option>Bundle</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">What do you want help with?</label>
                    <textarea rows={4} placeholder="Tell Mitch what you want reviewed" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500" />
                  </div>
                  <div className="sm:col-span-2 flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" />
                    <p className="text-sm text-slate-600">I agree to be contacted by Mitch about quotes and coverage options.</p>
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" className="w-full rounded-2xl bg-slate-950 px-6 py-4 text-base font-semibold text-white transition hover:bg-emerald-600">
                      Get My Free Quote Review
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Why people work with Mitch</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              A cleaner, easier way to shop for insurance
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-7">
              <h3 className="text-xl font-semibold">Simple process</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Fill out the form, talk with Mitch, and get a clear look at what your options actually are.
              </p>
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-7">
              <h3 className="text-xl font-semibold">Coverage that fits</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Auto, home, renters, life, and business coverage tailored to your real needs and budget.
              </p>
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-7">
              <h3 className="text-xl font-semibold">Real support</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Honest help, clear communication, and a second opinion you can actually trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">How it works</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Better coverage starts with a better conversation
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Mitch helps break down your current policy, spot possible gaps, and compare options in a way that feels straightforward.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-emerald-700">01</p>
              <h3 className="mt-2 text-xl font-semibold">Send your info</h3>
              <p className="mt-2 text-slate-600">A few details is all it takes to get the process started.</p>
            </div>
            <div className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-emerald-700">02</p>
              <h3 className="mt-2 text-xl font-semibold">Review your options</h3>
              <p className="mt-2 text-slate-600">Go over pricing, coverage, and where your current plan may fall short.</p>
            </div>
            <div className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-emerald-700">03</p>
              <h3 className="mt-2 text-xl font-semibold">Choose what fits best</h3>
              <p className="mt-2 text-slate-600">Move forward only when it makes sense for you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[32px] bg-slate-950 px-8 py-14 text-center text-white sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Ready when you are</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let Mitch help you find a smarter insurance plan.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Get a quote review that feels simple, personal, and useful.
          </p>
          <a
            href="#quote-form"
            className="mt-8 inline-block rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Start My Quote Review
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Mitch Insurance. All rights reserved.</p>
          <p>Insurance help made simple.</p>
        </div>
      </footer>
    </div>
  );
}
