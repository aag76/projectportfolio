import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <main className="max-w-4xl w-full space-y-16 py-20">
        <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="/profilepic.jpg"
                alt="Profile Picture"
                className="rounded-full w-48 h-48 object-cover mx-auto"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 space-y-6">
            <h1 className="text-gradient-brand text-5xl font-extrabold">About Me</h1>
            <p className="text-lg text-medium-contrast leading-relaxed">
              Welcome to my professional portfolio! I am dedicated to crafting innovative and inclusive technology solutions. This portfolio highlights my journey, expertise, and projects that showcase my commitment to making technology accessible and impactful.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-primary">My Mission</h2>
          <p className="text-medium-contrast leading-relaxed">
            My mission is to bridge the gap between technology and people by delivering practical, honest, and inclusive solutions. I strive to empower individuals and organizations to solve real-world challenges with confidence and clarity.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-primary">Core Values</h2>
          <ul className="list-disc list-inside text-medium-contrast space-y-4">
            <li><strong>Community:</strong> Building connections and fostering a sense of belonging.</li>
            <li><strong>Practicality:</strong> Delivering solutions that are effective, efficient, and user-friendly.</li>
            <li><strong>Empathy:</strong> Understanding and addressing the diverse needs of users.</li>
            <li><strong>Clarity:</strong> Communicating ideas and solutions in a straightforward and jargon-free manner.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-primary">Professional Highlights</h2>
          <p className="text-medium-contrast leading-relaxed">
            Over the past few years, I have worked on a variety of projects that span multiple domains, including web development, AI solutions, and user experience design. My work is driven by a passion for innovation and a commitment to excellence. I have worked with Javascript, Python, Html, CSS, React, Java, Next.js, PHP, and SQL in order to create solutions that are not only functional but also engaging and user-friendly.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-primary">Experience</h2>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <p className="text-medium-contrast">
              Highlight your professional journey and key roles here. For example:
            </p>
            <ul className="list-disc list-inside text-medium-contrast space-y-2">
              <li><strong>Information Technology Bachelor of Science Degree:</strong> Current student at NJIT.</li>
              <li><strong>Computer Science Associate Degree:</strong> Former student at Middlesex Community College.</li>
              <li><strong>Student Database Designer:</strong> Worked and contributed on constructing a database using SQL and MySQL for a airport student project.</li>
              <li><strong>Internet Application Developer:</strong> Constructed a digital store application with frontend and backend using HTML, CSS, JavaScript, and PHP for a student project.</li>
            </ul>
          </div>
        </section>

        <section className="text-center">
          <Link href="/" className="text-primary underline hover:text-primary-700">Back to Home</Link>
        </section>
      </main>
    </div>
  );
}
