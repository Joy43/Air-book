import card1 from "../../assets/image/card1.jpeg";
import card2 from "../../assets/image/card2.jpeg";
import card3 from "../../assets/image/card3.jpeg";
const FeatureDestination = () => {
  return (
    <div>
      <h1 className="text-3xl mt-8">Featured Destinations</h1>
      <div className="grid grid-cols-3 gap-6 ">
        {/* ------------first card------- */}
        <div className="flex items-center justify-center  ">
          <div>
            {/* component */}
            <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img src={card1} alt="ui/ux review check" />
              </div>

              <div className="mb-3 p-6 flex items-center justify-between">
                <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Stopover opportunity in İstanbul with Turkish Airlines
                </h5>
              </div>

              <div className="p-6 text-center items-center  ml-16 align-middle ">
                <a
                  target="_blank"
                  href="1"
                  className="block mt-10 w-[210px] px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                  rel="noreferrer"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------- 2nd */}

        <div className="flex items-center justify-center  ">
          <div>
            {/* component */}
            <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img src={card2} alt="ui/ux review check" />
              </div>

              <div className="mb-3 p-6 flex items-center justify-between">
                <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Stopover opportunity in İstanbul with Turkish Airlines
                </h5>
              </div>

              <div className="p-6 text-center items-center  ml-16 align-middle ">
                <a
                  target="_blank"
                  href="1"
                  className="block mt-10 w-[210px] px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                  rel="noreferrer"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ------------3rd------ */}
        <div className="flex items-center justify-center  ">
          <div>
            {/* component */}
            <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img src={card3} alt="ui/ux review check" />
              </div>

              <div className="mb-3 p-6 flex items-center justify-between">
                <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Stopover opportunity in İstanbul with Turkish Airlines
                </h5>
              </div>

              <div className="p-6 text-center items-center  ml-16 align-middle ">
                <a
                  target="_blank"
                  href="1"
                  className="block mt-10 w-[210px] px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                  rel="noreferrer"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDestination;
