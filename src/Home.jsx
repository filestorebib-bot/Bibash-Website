import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 py-20 text-white sm:py-24 lg:py-32">

        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

          {/* HERO CONTENT */}
          <div>

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-green-400"></span>
              Veterinary Student • Agriculture • Animal Welfare
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Exploring knowledge,
              <span className="block text-indigo-300">
                creating impact.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-indigo-100">
              I'm <strong>Bibash Lamichhane</strong>, a veterinary student
              with an interest in agriculture, animal welfare, education,
              technology and creative digital work.
            </p>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/library"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-50"
              >
                Explore Library
                <span>→</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                Get in Touch
              </Link>

            </div>

            {/* HERO META */}
            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-7">

              <div>
                <strong className="block text-base">
                  Veterinary
                </strong>
                <span className="text-sm text-indigo-200">
                  Science
                </span>
              </div>

              <div className="hidden h-10 w-px bg-white/20 sm:block"></div>

              <div>
                <strong className="block text-base">
                  Agriculture
                </strong>
                <span className="text-sm text-indigo-200">
                  & Plant Science
                </span>
              </div>

              <div className="hidden h-10 w-px bg-white/20 sm:block"></div>

              <div>
                <strong className="block text-base">
                  Animal
                </strong>
                <span className="text-sm text-indigo-200">
                  Welfare
                </span>
              </div>

            </div>

          </div>

          {/* HERO IMAGE */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">

            <div className="absolute inset-0 scale-90 rounded-[3rem] bg-indigo-500/30 blur-3xl"></div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">

              <div className="overflow-hidden rounded-[1.5rem] bg-slate-200">

                <img
                  src="/images/bibash.jpg"
                  alt="Bibash Lamichhane"
                  className="aspect-[4/5] w-full object-cover"
                />

              </div>

              {/* PROFILE INFO */}
              <div className="flex items-center justify-between gap-4 px-4 py-5">

                <div>
                  <span className="text-xs font-semibold tracking-widest text-indigo-200">
                    HELLO, I'M
                  </span>

                  <h3 className="mt-1 text-xl font-bold">
                    Bibash Lamichhane
                  </h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl">
                  ↗
                </div>

              </div>

            </div>

            {/* FLOATING CARD */}
            <div className="absolute -left-6 top-16 hidden items-center gap-3 rounded-2xl border border-white/20 bg-white p-4 text-slate-900 shadow-xl sm:flex">

              <span className="text-2xl">
                🐾
              </span>

              <div>
                <strong className="block text-sm">
                  Animal Welfare
                </strong>

                <small className="text-xs text-slate-500">
                  Passion & Purpose
                </small>
              </div>

            </div>

            {/* FLOATING CARD */}
            <div className="absolute -right-6 bottom-20 hidden items-center gap-3 rounded-2xl border border-white/20 bg-white p-4 text-slate-900 shadow-xl sm:flex">

              <span className="text-2xl">
                📚
              </span>

              <div>
                <strong className="block text-sm">
                  Knowledge
                </strong>

                <small className="text-xs text-slate-500">
                  Learn • Share • Grow
                </small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT SECTION */}
      <section className="py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-8 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-indigo-600">

            <span className="h-1 w-8 rounded-full bg-indigo-600"></span>

            About

          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">

            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">

              From agriculture to

              <span className="block text-indigo-600">
                veterinary science.
              </span>

            </h2>

            <div>

              <p className="text-lg leading-8 text-slate-600">
                My academic journey began with an interest in agriculture
                and plant science and continued toward veterinary science.
                Along the way, I developed an interest in education,
                animal welfare, technology and digital content creation.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 font-bold text-indigo-600 transition hover:text-indigo-800"
              >
                Connect with me
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* INTERESTS SECTION */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-12">

            <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-indigo-600">

              <span className="h-1 w-8 rounded-full bg-indigo-600"></span>

              Areas of Interest

            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">

              Things that

              <span className="text-indigo-600">
                {' '}matter to me.
              </span>

            </h2>

          </div>


          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* VETERINARY */}
            <article className="group relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <span className="absolute right-6 top-6 text-sm font-bold text-slate-300">
                01
              </span>

              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-3xl transition group-hover:bg-indigo-600">
                🐄
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Veterinary Science
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Learning and exploring animal health, veterinary medicine
                and practical veterinary science.
              </p>

            </article>


            {/* AGRICULTURE */}
            <article className="group relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <span className="absolute right-6 top-6 text-sm font-bold text-slate-300">
                02
              </span>

              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-3xl transition group-hover:bg-green-600">
                🌱
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Agriculture
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Exploring agriculture, livestock production, plant science
                and sustainable farming systems.
              </p>

            </article>


            {/* ANIMAL WELFARE */}
            <article className="group relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <span className="absolute right-6 top-6 text-sm font-bold text-slate-300">
                03
              </span>

              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl transition group-hover:bg-blue-600">
                🐾
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Animal Welfare
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Promoting responsible care, welfare awareness and better
                relationships between humans and animals.
              </p>

            </article>


            {/* TECHNOLOGY */}
            <article className="group relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <span className="absolute right-6 top-6 text-sm font-bold text-slate-300">
                04
              </span>

              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-3xl transition group-hover:bg-purple-600">
                💻
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Technology & Design
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Creating websites, educational resources, presentations
                and digital experiences.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* LIBRARY PREVIEW */}
      <section className="py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 p-8 text-white shadow-2xl sm:p-12 lg:p-16">

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>

            <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">

              <div className="max-w-2xl">

                <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-indigo-300">

                  <span className="h-1 w-8 rounded-full bg-indigo-400"></span>

                  Digital Library

                </div>

                <h2 className="text-3xl font-black sm:text-4xl">

                  Knowledge should be

                  <span className="block text-indigo-300">
                    easy to access.
                  </span>

                </h2>

                <p className="mt-5 text-lg leading-8 text-indigo-100">
                  Explore articles, notes, PDFs, presentations and
                  educational resources in one place.
                </p>

              </div>

              <Link
                to="/library"
                className="relative inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-50"
              >
                Visit Library
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* QUOTE SECTION */}
      <section className="border-t border-slate-100 bg-white py-20 text-center sm:py-24">

        <div className="mx-auto max-w-4xl px-6">

          <div className="text-7xl font-black leading-none text-indigo-100">
            “
          </div>

          <blockquote className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">

            Learning becomes more meaningful

            <span className="text-indigo-600">
              {' '}when knowledge is shared.
            </span>

          </blockquote>

          <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-indigo-600"></div>

          <p className="mt-5 font-semibold text-slate-500">
            Bibash Lamichhane
          </p>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-slate-950 text-white">

        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

          <div className="grid gap-12 md:grid-cols-3">

            {/* BRAND */}
            <div>

              <Link
                to="/"
                className="inline-flex items-center gap-3"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-lg font-black">
                  B
                </div>

                <span className="text-xl font-black">

                  Bibash

                  <span className="text-indigo-400">
                    .
                  </span>

                </span>

              </Link>

              <p className="mt-5 max-w-sm leading-7 text-slate-400">
                Veterinary science, agriculture, animal welfare and
                knowledge sharing.
              </p>

            </div>


            {/* NAVIGATION */}
            <div>

              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-300">
                Navigation
              </h3>

              <div className="flex flex-col gap-3">

                <Link
                  to="/"
                  className="text-slate-400 transition hover:text-white"
                >
                  Home
                </Link>

                <Link
                  to="/library"
                  className="text-slate-400 transition hover:text-white"
                >
                  Library
                </Link>

                <Link
                  to="/contact"
                  className="text-slate-400 transition hover:text-white"
                >
                  Contact
                </Link>

              </div>

            </div>


            {/* EXPLORE */}
            <div>

              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-300">
                Explore
              </h3>

              <div className="flex flex-col gap-3">

                <Link
                  to="/library?category=articles"
                  className="text-slate-400 transition hover:text-white"
                >
                  Articles
                </Link>

                <Link
                  to="/library?category=notes"
                  className="text-slate-400 transition hover:text-white"
                >
                  Notes
                </Link>

                <Link
                  to="/library?category=ppt"
                  className="text-slate-400 transition hover:text-white"
                >
                  Presentations
                </Link>

              </div>

            </div>

          </div>

        </div>


        {/* FOOTER BOTTOM */}
        <div className="border-t border-white/10">

          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">

            <span>
              © {new Date().getFullYear()} Bibash Lamichhane.
              All rights reserved.
            </span>

            <span>
              Built with curiosity & purpose.
            </span>

          </div>

        </div>

      </footer>

    </div>
  );
};

export default Home;
