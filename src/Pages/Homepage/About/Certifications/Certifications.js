import React from "react";
import Certificate from "./Certificate";
import CERTIFICATIONS_DATA from "./CERTIFICATIONS_DATA";

export default function Certifications() {
  return (
    <section className="mt-12 px-4 sm:px-0">
      <h3 className="text-3xl font-bebas text-gold mb-6">Certifications</h3>
      <h4 className="text-light mb-8">
        Here is a list of some certifications that I have. You can see more on
        my{" "}
        <a
          href="https://www.linkedin.com/in/amrezzatofficial/details/certifications/"
          target="_blank"
          rel="noreferrer"
          className="text-gold border-b border-b-transparent pb-1 hover:border-b-darkGold"
        >
          LinkedIn
        </a>{" "}
        profile.
      </h4>
      <article className="text-light py-12 px-6 bg-primaryColor rounded-xl mb-6">
        <table className="w-full text-left">
          <thead className="w-full">
            <tr>
              <th>Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className="text-sm lg:text-lg">
            {CERTIFICATIONS_DATA.map((cert) => (
              <Certificate
                key={cert.name}
                url={cert.url}
                name={cert.name}
                date={cert.date}
                icon={cert.icon}
              />
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
