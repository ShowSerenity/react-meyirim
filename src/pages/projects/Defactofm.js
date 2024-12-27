import React from "react";
import "../../assets/styles/ProjectDetails.css";

const DefactoFM = () => {
  const projectDetails = {
    title: "Rock Royalty",
    subtitle: "Collaboration with famous musicians",
    description: `
      Welcome to a corner of my musical journey that resonates with the electrifying energy of rock 'n' roll.
      Collaborating with renowned rock bands and musicians has been a thrilling chapter in my career, filled
      with power chords, anthemic melodies, and unforgettable performances. Here, I invite you to dive into
      the world of rock collaborations that have left a resounding mark:
    `,
    date: "April 1985",
    sections: [
      {
        title: "🔥 Legendary Jams",
        content:
          "Sharing the stage with rock icons like Led Zeppelin, The Rolling Stones, and Queen was a dream realized...",
      },
      {
        title: "🤟 Sonic Innovation",
        content:
          "Rock musicians are known for pushing the boundaries of sound, and collaborating with them allowed me to...",
      },
      {
        title: "🎤 Vocal Powerhouses",
        content:
          "Collaborating with rock vocalists like Freddie Mercury and Robert Plant was a lesson in sheer vocal prowess...",
      },
      {
        title: "🎸 Guitar Virtuosos",
        content:
          "As a guitarist myself, sharing the stage with guitar legends like Jimi Hendrix and Jimmy Page was a dream...",
      },
      {
        title: "🌟 Songwriting Alchemy",
        content:
          "The songwriting process with rock luminaries such as Bob Dylan and Mick Jagger was a true meeting of minds...",
      },
      {
        title: "📸 Iconic Moments",
        content:
          "The memories created during these collaborations are etched in my heart and captured in photographs...",
      },
      {
        title: "🌎 Global Impact",
        content:
          "Rock music knows no boundaries, and these collaborations resonated with fans worldwide...",
      },
    ],
    images: [
      "/assets/images/guitarhero.jpg",
      "/assets/images/fguitaristview.jpg",
    ],
  };

  return (
    <div className="project-page">
      <div className="project-padding">
        <h1 class="project-title">{projectDetails.title}</h1>
        <p className="project-subtitle">{projectDetails.subtitle}</p>
        <p className="project-text">{projectDetails.description}</p>
        <p className="project-date-label">Date</p>
        <p className="project-text">{projectDetails.date}</p>
      </div>

      {projectDetails.images.map((src, index) => (
        <img
          key={index}
          className="project-image"
          src={src}
          alt={`Project visual ${index + 1}`}
        />
      ))}

      <div className="project-padding">
        {projectDetails.sections.map((section, index) => (
          <p key={index} className="collabs">
            <strong>{section.title}</strong>
            <br />
            {section.content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DefactoFM;
