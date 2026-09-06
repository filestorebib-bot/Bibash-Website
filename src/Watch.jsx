import { useState } from 'react';

const Watch = () => {
  const [selectedSite, setSelectedSite] = useState(null);

  const watchSites = [
    {
      id: 1,
      name: 'CineJoy',
      description:
        'Explore movies and entertainment through CineJoy.',
      url: 'https://cinejoy.to/',
      icon: '🎬',
      category: 'Movies & Entertainment',
    },

    // ADD MORE WEBSITES HERE
    /*
    {
      id: 2,
      name: 'Website Name',
      description: 'Description of the website.',
      url: 'https://example.com',
      icon: '📺',
      category: 'Entertainment',
    },
    */
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 py-20 text-white">

        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
            <span>▶</span>
            Entertainment Hub
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Watch &{' '}
            <span className="text-indigo-300">
              Explore
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-indigo-100">
            Discover entertainment platforms and watch your favorite content
            from one convenient place.
          </p>

        </div>

      </section>


      {/* WEBSITE CARDS */}
      <section className="py-16 lg:py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 text-center">

            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Available Platforms
            </h2>

            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-indigo-600" />

          </div>


          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {watchSites.map((site) => (

              <div
                key={site.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* TOP DESIGN */}
                <div className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-800 p-8 text-white">

                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />

                  <div className="relative">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur">
                      {site.icon}
                    </div>

                    <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-indigo-200">
                      {site.category}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      {site.name}
                    </h3>

                  </div>

                </div>


                {/* CONTENT */}
                <div className="p-7">

                  <p className="leading-7 text-slate-600">
                    {site.description}
                  </p>


                  <button
                    onClick={() => setSelectedSite(site)}
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 font-bold text-white transition-all duration-300 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20"
                  >

                    <span>Watch Now</span>

                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* EMBEDDED WEBSITE MODAL */}
      {selectedSite && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-3 backdrop-blur-sm">

          <div className="flex h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">


            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl text-white">
                  {selectedSite.icon}
                </div>

                <div>

                  <h2 className="font-bold text-slate-900">
                    {selectedSite.name}
                  </h2>

                  <p className="text-xs text-slate-500">
                    Watching inside VFAW
                  </p>

                </div>

              </div>


              <div className="flex items-center gap-3">

                {/* OPEN EXTERNALLY */}
                <a
                  href={selectedSite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 sm:block"
                >
                  Open Website ↗
                </a>


                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setSelectedSite(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl font-bold text-slate-700 transition hover:bg-red-500 hover:text-white"
                  aria-label="Close"
                >
                  ×
                </button>

              </div>

            </div>


            {/* IFRAME */}
            <div className="flex-1 bg-slate-100">

              <iframe
                src={selectedSite.url}
                title={selectedSite.name}
                className="h-full w-full border-0"
                allowFullScreen
              />

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Watch;
