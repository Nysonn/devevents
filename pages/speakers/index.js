import { useState, useEffect } from "react";
import Head from "next/head";

export default function Speakers() {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const res = await fetch("/api/speakers"); // Fetch speakers data
        if (!res.ok) throw new Error("Failed to fetch speakers");
        const data = await res.json();
        setSpeakers(data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, []);

  return (
    <>
      <Head>
        <title>Keynote Speakers</title>
        <meta name="description" content="Meet our keynote speakers for the event." />
      </Head>

      <section className="py-12 mt-12 rounded-2xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
            Keynote Speakers
          </h2>

          {/* Show Loading State */}
          {loading && (
            <p className="text-xl font-semibold text-center text-gray-700 dark:text-gray-300">
              Loading speakers...
            </p>
          )}

          {/* Show Error State */}
          {error && (
            <p className="text-xl text-center text-red-500 font-semibold">
              {error}
            </p>
          )}

          {/* Show Speakers Data */}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakers.map((speaker) => (
                <div
                  key={speaker.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-semibold mb-2">
                      {speaker.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {speaker.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
