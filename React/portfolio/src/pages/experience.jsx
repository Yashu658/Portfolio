import React from "react";

const Experience = () => {
  return (
    <div className="m-5 shadow-2xl bg-green-300">
      <h2 class="text-2xl font-bold text-gray-800 border-b-2 pb-2 mb-4">
        Experience
      </h2>
      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-800">
          Senior Web Developer
        </h3>
        <p class="text-gray-600">ABC Tech Solutions | Jan 2021 - Present</p>
        <ul class="list-disc list-inside text-gray-700 mt-2">
          <li>
            Developed and maintained responsive web applications using React and
            Next.js.
          </li>
          <li>Optimized website performance, improving load times by 30%.</li>
          <li>
            Collaborated with designers and backend developers to enhance UI/UX.
          </li>
          <li>
            Implemented RESTful APIs and GraphQL for seamless data integration.
          </li>
        </ul>
      </div>

      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-800">Frontend Developer</h3>
        <p class="text-gray-600">XYZ Digital | May 2018 - Dec 2020</p>
        <ul class="list-disc list-inside text-gray-700 mt-2 ">
          <li>Built dynamic user interfaces with Vue.js and Tailwind CSS.</li>
          <li>
            Developed reusable UI components, reducing development time by 40%.
          </li>
          <li>
            Integrated third-party APIs for payment processing and
            authentication.
          </li>
          <li>Conducted code reviews and mentored junior developers.</li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-gray-800">
          Junior Web Developer
        </h3>
        <p class="text-gray-600">LMN Web Agency | Jun 2016 - Apr 2018</p>
        <ul class="list-disc list-inside text-gray-700 mt-2">
          <li>
            Designed and coded landing pages using HTML, CSS, and JavaScript.
          </li>
          <li>Assisted in website maintenance and debugging.</li>
          <li>
            Worked closely with SEO specialists to improve website rankings.
          </li>
          <li>Converted PSD designs into fully functional web pages.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
