import React from 'react';

function About() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen p-8">
      <embed
        src="/assets/Elijah_Fang_Resume.pdf"
        type="application/pdf"
        className="w-full md:w-3/4 lg:w-2/3 h-[800px] rounded-lg shadow-lg"
      />
    </div>
  );
}

export default About;