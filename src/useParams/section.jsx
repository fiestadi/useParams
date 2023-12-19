import React from 'react';
import { useParams } from 'react-router-dom';

const Section = () => {
  const { sectionId } = useParams();

  let sectionContent;

  switch (sectionId) {
    case 'about':
      sectionContent = <AboutSection />;
      break;
    case 'contact':
      sectionContent = <ContactSection />;
      break;
    default:
      sectionContent = <DefaultSection />;
  }

  return (
    <div>
      <h2>Section: {sectionId}</h2>
      {sectionContent}
    </div>
  );
};

const AboutSection = () => {
  return <div>About Section Content</div>;
};

const ContactSection = () => {
  return <div>Contact Section Content</div>;
};

const DefaultSection = () => {
  return <div>Default Section Content</div>;
};

export default Section;