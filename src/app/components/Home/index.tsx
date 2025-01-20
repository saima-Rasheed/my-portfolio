export default function Home() {
    return (
      <div className="bg-black text-gold min-h-screen flex items-center justify-center p-6">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center md:items-start">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-10 text-orange-300">Welcome to My Portfolio</h1>
            <p className="text-sm text-orange-300">

Welcome to my digital space. I am a passionate web developer and designer dedicated to bringing creative ideas to life through innovative and responsive websites.<br/> My focus is on creating user-friendly, visually stunning web experiences that are not only functional but also aesthetically pleasing. With a keen eye for design and a deep understanding of modern web technologies, I turn concepts into seamless, interactive websites. Explore my portfolio to see how I combine creativity with code to build digital solutions that make a lasting impact.</p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
            <img src="/p pic.jpeg" alt="Profile" className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-x-orange-300" />
          </div>
        </div>
      </div>
    );
  }