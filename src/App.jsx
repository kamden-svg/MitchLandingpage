export default function MitchInsuranceLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-300 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              Local insurance help from Mitch
            </div>

            <h1 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Coverage made simple for your home, auto, renters, and business.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Let Mitch help you compare options, review your current coverage, and find protection that fits your life and budget.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200">
              <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
                Fast quote reviews
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
                Friendly one-on-one help
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
                Personal and business options
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl sm:p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold">Get your free quote review</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Fill out the form below and Mitch will reach out to go over your options.
                </p>
              </div>

              <form className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium">First name</label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-emerald-600"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium">Last name</label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-emerald-600"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium">Phone</label>
                  <input
                    type="tel"
                    placeholder="(555) 555-5555"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-emerald-600"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-emerald-600"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium">ZIP code</label>
                  <input
                    type="text"
                    placeholder="ZIP code"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-emerald-600"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium">Coverage type</label>
                  <select className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600">
                    <option>Auto</option>
                    <option>Home</option>
                    <option>Renters</option>
                    <option>Life</option>
                    <option>Business</option>
                    <option>Bundle</option>
                  </select>
                </div>

                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium">Current insurance company</label>
                  <input
                    type="text"
                    placeholder="Current carrier"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-emerald-600"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium">Renewal date</label>
                  <input
                    type="date"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-emerald-600"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium">What would you like help with?</label>
                  <textarea
                    rows={4}
                    placeholder="Tell Mitch a little about what you need"
                    className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-emerald-600"
                  />
                </div>

                <div className="sm:col-span-2 flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" />
                  <p className="text-sm text-slate-600">
                    I agree to be contacted by Mitch about insurance quotes and coverage options.
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-emerald-700 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-800"
                  >
                    Get My Quote Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold">Simple process</h3>
            <p className="mt-3 text-slate-600">
              Send over a few details and Mitch will help you understand your options without making it complicated.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold">Personal support</h3>
            <p className="mt-3 text-slate-600">
              Whether you need a new policy, better pricing, or a second opinion, you will get real help from a real person.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold">Coverage that fits</h3>
            <p className="mt-3 text-slate-600">
              Home, auto, renters, life, and business insurance options tailored to what matters most to you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why work with Mitch?</h2>
              <p className="mt-4 text-lg text-slate-600">
                Mitch focuses on helping people protect what they have worked hard for while keeping the process clear, personal, and easy to understand.
              </p>
              <ul className="mt-6 space-y-4 text-slate-700">
                <li>Clear answers without the runaround</li>
                <li>Help reviewing current policies and possible gaps</li>
                <li>Options for families, individuals, and small businesses</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="rounded-3xl bg-emerald-700 p-8 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-100">Ready to start?</p>
                <h3 className="mt-3 text-3xl font-bold">Let Mitch build you a better insurance plan.</h3>
                <p className="mt-4 text-emerald-50">
                  Fill out the form above and get a quote review tailored to your needs.
                </p>
                <a
                  href="#"
                  className="mt-6 inline-block rounded-2xl bg-white px-5 py-3 font-semibold text-emerald-800 transition hover:bg-emerald-50"
                >
                  Talk to Mitch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-500 lg:px-8">
          © 2026 Mitch Insurance. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
