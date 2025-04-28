import React from 'react';

function Resume() {
  return (
    <div className="w-full h-screen p-4">
      <embed
        src="/assets/Elijah_Fang_Resume.pdf"
        type="application/pdf"
        className="w-full h-full"
      />
    </div>
  );
}

export default Resume;