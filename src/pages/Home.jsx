import wave from "../assets/wave.svg"
import Hero from "../components/Hero";
const Home = () => {
  return (
    <div className="min-h-[calc(100vh-310px)] flex flex-col justify-center items-center relative">
      {/* <div className="container  mx-auto px-7 lg:px-5 xl:px-7"></div> */}
      <Hero/>
      <img className="absolute bottom-0 w-full" src={wave} alt="" />
    </div>
  );
}

export default Home