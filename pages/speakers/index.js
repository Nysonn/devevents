import Head from "next/head";

// Dummy data for keynote speakers
const speakers = [
  {
    id: 1,
    name: "Dr. Jane Doe",
    title: "AI Researcher",
    bio: "Leading expert in artificial intelligence and machine learning with over 15 years of experience.",
    image: "https://imageio.forbes.com/specials-images/imageserve/652b3bb6fb538e8baa51266d/Conference-speaker/960x0.jpg?format=jpg&width=960",
  },
  {
    id: 2,
    name: "John Smith",
    title: "Cloud Architect",
    bio: "Specializes in cloud infrastructure and serverless computing, working with Fortune 500 companies.",
    image: "https://www.leadingauthorities.com/sites/default/files/images/torricke-barton-dex-speaker-2.original.jpg", 
  },
  {
    id: 3,
    name: "Emily Johnson",
    title: "Web Development Guru",
    bio: "Passionate about modern web development tools and frameworks, with a focus on React and Node.js.",
    image: "https://londonspeakerbureau.com/wp-content/uploads/2023/05/April-Rinne-Keynote-speaker-scaled.jpg", 
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    title: "Cybersecurity Expert",
    bio: "Renowned cybersecurity professional with a focus on threat detection and digital asset protection.",
    image: "https://www.davidparrish.com/wp-content/uploads/2014/05/David-Parrish-EVCOM.jpg", 
  },
  {
    id: 5,
    name: "Sarah Lee",
    title: "Data Scientist",
    bio: "Expert in data science, big data, and analytics, with a track record of solving complex business problems.",
    image: "https://images.squarespace-cdn.com/content/v1/5ca4c742e5f7d11942841f3c/1554757956699-RQE049KXKQ4QAOFEZRJQ/4.jpg", 
  },
  {
    id: 6,
    name: "David Wilson",
    title: "Blockchain Innovator",
    bio: "Pioneer in blockchain technology and cryptocurrency, with a focus on decentralized finance (DeFi).",
    image: "https://images.squarespace-cdn.com/content/v1/5f75de7ee1f48a3251a4b3f9/1603983114205-YNFCCBILM59HRH0ZOAJP/the-next-web-ndsm-professional-conference-corporate-event-photographer-video-production-company-amsterdam-videoproductiebedrijf-09.jpg", 
  },
];

export default function Speakers() {
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
        </div>
      </section>
    </>
  );
}