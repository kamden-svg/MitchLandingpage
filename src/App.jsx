export default function MitchInsuranceLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.12),_transparent_20%),linear-gradient(180deg,_#020617_0%,_#0f172a_45%,_#111827_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-8 lg:pb-28 lg:pt-8">
          <nav className="mb-14 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-emerald-300 uppercase">Mitch Insurance</p>
            </div>
            <a
              href="#quote-form"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-100"
            >
              Get a Quote
            </a>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200 backdrop-blur">
                Simple help. Better coverage. Real support.
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                Insurance shopping that actually feels easy.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                Mitch helps families, drivers, renters, homeowners, and small businesses compare options and find coverage that makes sense without the stress.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#quote-form"
                  className="rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-[0_12px_40px_rgba(16,185,129,0.35)] transition hover:scale-[1.02] hover:bg-emerald-400"
                >
                  Start My Quote
                </a>
                <a
                  href="#why-mitch"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Why Mitch?
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <p className="text-2xl font-bold text-white">Fast</p>
                  <p className="mt-1 text-sm text-slate-300">Quick quote reviews and easy follow-up</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <p className="text-2xl font-bold text-white">Clear</p>
                  <p className="mt-1 text-sm text-slate-300">Straight answers without the insurance jargon</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                  <p className="text-2xl font-bold text-white">Personal</p>
                  <p className="mt-1 text-sm text-slate-300">One-on-one help tailored to your needs</p>
                </div>
              </div>
            </div>

            <div id="quote-form" className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-emerald-400/20 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/95 p-6 text-slate-900 shadow-2xl shadow-black/40 sm:p-8">
                <div className="mb-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Free quote review</p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight">See what better coverage could look like</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Fill this out and Mitch will reach out to go over options, pricing, and any gaps in your current protection.
                  </p>
                </div>

                <form className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">First name</label>
                    <input type="text" placeholder="First name" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Last name</label>
                    <input type="text" placeholder="Last name" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
                    <input type="tel" placeholder="(555) 555-5555" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                    <input type="email" placeholder="you@example.com" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">ZIP code</label>
                    <input type="text" placeholder="ZIP code" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Coverage type</label>
                    <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100">
                      <option>Auto</option>
                      <option>Home</option>
                      <option>Renters</option>
                      <option>Life</option>
                      <option>Business</option>
                      <option>Bundle</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Current insurance company</label>
                    <input type="text" placeholder="Current carrier" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Renewal date</label>
                    <input type="date" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">What do you want help with?</label>
                    <textarea rows={4} placeholder="Tell Mitch what you want to insure or what you want reviewed" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" />
                  </div>
                  <div className="sm:col-span-2 rounded-2xl bg-slate-100 p-4">
                    <label className="flex items-start gap-3 text-sm text-slate-600">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" />
                      <span>I agree to be contacted by Mitch about quotes, coverage options, and follow-up questions.</span>
                    </label>
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

      <section className="relative z-10 -mt-8 px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Coverage</p>
            <h3 className="mt-3 text-2xl font-bold">Home, auto, renters, life, and business</h3>
            <p className="mt-3 text-slate-300">Flexible options built around what matters most to you.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Review</p>
            <h3 className="mt-3 text-2xl font-bold">Spot gaps and overpaying fast</h3>
            <p className="mt-3 text-slate-300">Get a second look at your current policy and see if it still fits.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Support</p>
            <h3 className="mt-3 text-2xl font-bold">Real help from a real person</h3>
            <p className="mt-3 text-slate-300">No weird funnels. No pressure. Just solid guidance from Mitch.</p>
          </div>
        </div>
      </section>

      <section id="why-mitch" className="bg-white px-6 py-20 text-slate-900 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Why Mitch</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">A better insurance experience from start to finish</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Mitch keeps the process simple, explains things clearly, and helps clients feel confident about what they are actually buying.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-xl font-bold">Clear communication</h3>
              <p className="mt-2 text-slate-600">You get real answers, practical guidance, and a clean breakdown of your options.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-xl font-bold">Built around your needs</h3>
              <p className="mt-2 text-slate-600">Whether you want lower cost, stronger coverage, or a better bundle, the quote review is shaped around your goals.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-xl font-bold">Easy next steps</h3>
              <p className="mt-2 text-slate-600">Fill out the form, connect with Mitch, review your options, and move forward when it makes sense.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(16,185,129,0.16),_rgba(255,255,255,0.04))] p-8 text-center backdrop-blur-xl sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Ready to start?</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Let Mitch help you build a smarter plan.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Get a quote review that feels personal, simple, and actually useful.
          </p>
          <a
            href="#quote-form"
            className="mt-8 inline-block rounded-full bg-white px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-emerald-100"
          >
            Start My Quote Review
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Mitch Insurance. All rights reserved.</p>
          <p>Simple coverage help for real life.</p>
        </div>
      </footer>
    </div>
  );
}
