import img from './../assets/image.png'
import Typewriter from './Type';

function Hero() {
  return (
    <>
      <div id='home' className="flex flex-col md:flex-row items-center justify-center h-screen mt-16 md:mt-0  md:gap-30 text-center px-4 -mt-10">
        <div className="md:text-left text-center">
          <Typewriter />
          <p className="max-w-lg text-xl leading-relaxed mt-4">
            Hi, I am an aspiring Data Analyst & Data Scientist with a strong foundation in Python, Pandas, NumPy, Statistics,
            Probability, and Machine Learning. I enjoy working with data — cleaning, analyzing, and building predictive models to
            solve real-world problems.
          </p>
        </div>

        <div className="flex img justify-center mt-6 md:mt-0">
          <img
            className="w-64 h-64 object-cover border-4 shadow-xl rounded-full hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
            src={img}
            alt="Profile"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
