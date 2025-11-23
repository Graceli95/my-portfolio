export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
          Grace Li
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Software Engineer | Full-Stack Developer & AI Solutions Builder
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
            View Projects
          </button>
          <button className="px-6 py-3 border-2 border-secondary-500 text-secondary-600 rounded-lg hover:bg-secondary-50 transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </main>
  );
}

