import React, { useEffect } from "react";

export default function AboutMe() {
  const age = new Date().getFullYear() - 1998;

  const typewriter = () => {
    const command = document.querySelector(".whoami");
    const whoamiSummary = document.querySelector(".whoamiSummary");
    command.style.color = "#e2e8f0";
    whoamiSummary.style.opacity = "0";
    command.textContent = "";

    let count = 0;
    const typeCommend = setInterval(() => {
      command.textContent += command.dataset.command[count];
      count += 1;
      if (count > command.dataset.command.length - 1) {
        clearInterval(typeCommend);
        command.style.color = "#4e9a06";
        whoamiSummary.style.opacity = "1";
      }
    }, 120);
  };

  useEffect(() => {
    typewriter();
  }, []);

  return (
    <section className="drop-shadow-[0_2px_1px_rgba(251,157,38,0.06)]">
      <article className="text-light py-12 px-6 bg-primaryColor rounded-xl">
        <p className="mb-4 p-2 rounded-lg border border-lightGold">
          <span className="text-darkGold font-bold">&#36; &nbsp;</span>{" "}
          <span className="whoami" data-command="whoami"></span>
        </p>
        <p className="whoamiSummary opacity-0 ease-in transition-all text-justify">
          <span className="text-darkGold font-bold">&gt; &nbsp;</span>Hello! I'm
          Amr Ezzat, a <span className="text-darkGold font-bold">MERN</span>{" "}
          stack developer. I'm a Computer Science Student at the {""}
          <a
            href="https://www.london.ac.uk/"
            target="_blank"
            rel="noreferrer"
            className="text-gold border-b border-b-transparent pb-1 hover:border-b-darkGold"
          >
            University of London
          </a>
          . I've worked on many projects through my academic study and online
          courses. I've just started my professional career in the web
          development industry.
        </p>
      </article>
    </section>
  );
}
