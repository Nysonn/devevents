import { useState, useEffect } from "react";
import Head from "next/head";
import AllEvents from "../components/Events/AllEvents";

export default function HomePage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events"); 
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Head>
        <title>Dev Events</title>
        <meta name="description" content="Find the latest developer events" />
      </Head>

      <main className="flex flex-col items-center justify-center">
        {loading ? (
          <p className="text-xl font-bold text-gray-700 dark:text-gray-300">Loading events...</p>
        ) : error ? (
          <p className="text-xl text-red-500 font-semibold">{error}</p>
        ) : (
          <AllEvents events={events} />
        )}
      </main>
    </>
  );
}
