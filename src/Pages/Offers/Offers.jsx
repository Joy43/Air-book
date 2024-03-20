import offer1 from "../../assets/image/offer/offer1.png";
import offer2 from "../../assets/image/offer/offer2.png";
import offer3 from "../../assets/image/offer/offer3.png";
const Offers = () => {
  return (
    <div className="mt-8 mb-10">
      <h1 className="text-2xl font-bold text-[#09182E]">Deals and Offers</h1>
      <div className="mt-6 gap-4 grid grid-cols-3">
        {/* -----------1---------- */}
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-1/2 shrink-0 overflow-hidden rounded-2xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={offer1}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal  antialiased">
              With bkash payment only
            </h6>
            <h4 className="mb-2 block font-sans  font-semibold leading-snug tracking-normal text-[#006CE4] antialiased">
              up to 14% discount on the base fare of domestic flights
            </h4>
          </div>
        </div>
        {/* --------------2-------- */}

        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-1/2 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={offer2}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal  antialiased">
              With bkash payment only
            </h6>
            <h4 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-[#006CE4] antialiased">
              up to 14% discount on the base fare of domestic flights
            </h4>
          </div>
        </div>
        {/* ----3 */}
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-1/2 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={offer3}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal  antialiased">
              With bkash payment only
            </h6>
            <h4 className="mb-2 text-[#006CE4] block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              up to 14% discount on the base fare of domestic flights
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
