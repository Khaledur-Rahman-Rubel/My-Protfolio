import profileImg from "./assets/profileImg.jpg";

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-900 antialiased min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <header className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Left section with name */}
            <div className="flex items-center gap-6">
              {/* Profile photo */}
              <div className="p-2 bg-gray-100 rounded-full">
                <img
                  src={profileImg}
                  alt="Khaledur Rahman"
                  className="w-36 h-36 rounded-full object-cover  hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <h1 className="text-3xl font-extrabold tracking-tight">
                  Khaledur Rahman
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                  Bachelor of Science in Computer Science and Engineering
                </p>
              </div>
            </div>

            {/* Contact info */}
            <div className="text-sm space-y-1 text-gray-700">
              <div>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:khaledurrahmankr@gmail.com"
                  className="text-blue-600"
                >
                  khaledurrahmankr@gmail.com
                </a>
              </div>
              <div>
                <strong>Phone:</strong>{" "}
                <a href="tel:+8801815015060" className="text-blue-600">
                  +880 1815-015060
                </a>
              </div>
              <div>
                <strong>Address:</strong> House 26, Road 8, Block C, Pallabi,
                Mirpur 12, Dhaka
              </div>
              <div>
                <strong>Permanent:</strong> Nagmud Bepari Bari, Ramgonj,
                Lakshmipur, Bangladesh
              </div>
              <div>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/Khaledur-Rahman-Rubel?tab=repositories"
                  className="text-blue-600"
                >
                  Your Repositories
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Main Grid */}
        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column */}
          <section className="md:col-span-2 space-y-6">
            {/* Summary */}
            <article className="bg-white rounded-lg shadow p-5">
              <h2 className="text-xl font-semibold mb-2">
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A dedicated software engineer with expertise in web development,
                software engineering, and problem-solving. Proficient in React,
                JavaScript, PHP, and MySQL, with experience in building scalable
                applications. Passionate about leveraging technology for
                innovation and efficiency.
              </p>
            </article>

            {/* Experience */}
            <article className="bg-white rounded-lg shadow p-5">
              <h2 className="text-xl font-semibold mb-3">Experience</h2>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">
                        IT Specialist — Digital Bridge Infotech
                      </h3>
                      <p className="text-sm text-gray-600">
                        Since 01 September, 2023 - Present
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700">
                    Working as an IT Specialist, responsible for maintaining
                    systems and contributing to web/software projects.
                  </p>
                </div>
              </div>
            </article>

            {/* Certifications */}
            <article className="bg-white rounded-lg shadow p-5">
              <h2 className="text-xl font-semibold mb-3">
                Certifications & Courses
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Web Programming using PHP and MySQL</strong> — IIT,
                  University of Dhaka. Learned foundational web development and
                  built practical projects.
                </li>
                <li>
                  <strong>Reactive Accelerator</strong> — Learn With Sumit,
                  Dhaka. Developed hands-on expertise in React & Next.js,
                  working on interactive applications.
                </li>
              </ul>
            </article>

            <article className="bg-white rounded-lg shadow p-5">
              <h2 className="text-xl font-semibold mb-3">References</h2>
              <div className="text-sm text-gray-700">
                <p className="font-medium">
                  Moklesur Rahman — Lecturer, CSE Department, Tejgaon College,
                  Dhaka
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:+8801717406684" className="text-blue-600">
                    +880 1717-406684
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:moklesur.cse.ru@gmail.com"
                    className="text-blue-600"
                  >
                    moklesur.cse.ru@gmail.com
                  </a>
                </p>
              </div>
            </article>
          </section>

          {/* Right column */}
          <aside className="space-y-6">
            {/* Education */}
            <div className="bg-white rounded-lg shadow p-5">
              <h3 className="text-lg font-semibold mb-3">
                Academic Qualification
              </h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <div>
                  <div className="font-medium">
                    B.Sc. in CSE — Tejgaon College, Dhaka
                  </div>
                  <div>Year: 2017 · Grade: 2.68 / 4.00</div>
                </div>
                <div>
                  <div className="font-medium">
                    H.S.C — Dhaka Imperial College
                  </div>
                  <div>Year: 2012 · Grade: 3.40 / 5.00</div>
                </div>
                <div>
                  <div className="font-medium">
                    S.S.C — Nagmud Bazar High School
                  </div>
                  <div>Year: 2010 · Grade: 4.25 / 5.00</div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-lg shadow p-5">
              <h3 className="text-lg font-semibold mb-3">Technical Skills</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>Programming:</strong> JavaScript, PHP, C, C++,
                  TypeScript
                </li>
                <li>
                  <strong>Frontend:</strong> HTML, CSS, Bootstrap, Tailwind CSS,
                  React
                </li>
                <li>
                  <strong>Backend & DB:</strong> Node.js, MySQL
                </li>
                <li>
                  <strong>Tools:</strong> Git, GitHub
                </li>
                <li>
                  <strong>Practices:</strong> Debugging, Testing, API
                  Integration
                </li>
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-lg shadow p-5">
              <h3 className="text-lg font-semibold mb-2">
                Language Proficiency
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Bangla — Native / Fluent</li>
                <li>English — Professional Working Proficiency</li>
              </ul>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
