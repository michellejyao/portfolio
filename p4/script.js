gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector(".footer");
  const lastCard = document.querySelector(".card.scroll");
  const pinnedSections = gsap.utils.toArray(".pinned");

  pinnedSections.forEach((section, index, sections) => {
    let img = section.querySelector(".img");

    let nextSection = sections[index + 1] || lastCard;
    let endScalePoint = `top+=${nextSection.offsetTop - section.offsetTop} top`;

    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end:
          index === sections.length
            ? `+=${lastCard.offsetHeight / 2}`
            : footer.offsetTop - window.innerHeight,
        pin: true,
        pinSpacing: false,
        scrub: 1,
      },
    });

    gsap.fromTo(
      img,
      { scale: 1 },
      {
        scale: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: endScalePoint,
          scrub: 1,
        },
      }
    );
  });

  const heroH1 = document.querySelector(".hero h1");
  ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "+=400vh",
    scrub: 1,
    onUpdate: (self) => {
      let opacityProgress = self.progress;
      heroH1.style.opacity = 1 - opacityProgress;
    },
  });
});

document.getElementById("WAT_AI").addEventListener("click", function (){
    window.open("https://github.com/WAT-ai/SatML", "_blank");
});

document.getElementById("DG").addEventListener("click", function (){
    window.open("https://drive.google.com/file/d/1VAeilANVdtjHnsHgdhaasMxovCOKJ5jK/view?usp=sharing", "_blank");
});

document.getElementById("AI_agents").addEventListener("click", function (){
    window.open("https://github.com/michellejyao/TaskMind-AI", "_blank");
});

document.getElementById("Lucy").addEventListener("click", function (){
    window.open("https://devpost.com/software/lucy-0v6lpm", "_blank");
});

document.getElementById("Job_Hunter").addEventListener("click", function (){
    window.open("https://github.com/michellejyao/Job-Hunter", "_blank");
});

document.getElementById("Medifly").addEventListener("click", function (){
    window.open("https://devpost.com/software/medifly", "_blank");
});

document.getElementById("Me").addEventListener("click", function (){
    window.open("https://www.linkedin.com/in/michelle--yao/", "_blank");
});

document.getElementById("my_resume").addEventListener("click", function (){
    window.open("https://drive.google.com/file/d/1VAeilANVdtjHnsHgdhaasMxovCOKJ5jK/view?usp=sharing", "_blank");
});
