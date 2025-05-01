import React from 'react';

function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
      <section>
        <h1 className="text-8xl font-bold text-black">Elijah Fang</h1>
        <p className="text-4xl text-black">Full Stack Developer</p>
      </section>
      <section>
        <p className="text-black max-w-lg">
          Welcome to my portfolio! Explore my projects, learn more about me, and feel free to get in touch.
        </p>
      </section>
    </div>
  );
}

export default Home;