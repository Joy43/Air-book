const Cover = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/0J4YbW4/cover.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            {/* ---------------- card */}
            <div className="card">
              <div className="bg-white  w-full  gap-6 grid grid-cols-4 p-5 m-5 rounded">
                {/* ---------1--------- */}
                <div className="flex flex-row m-auto   p-6 gap-8 rounded-lg border-2 border-gray-400">
                  <div className="my-auto">
                    <div className="text-lg text-purple-300">Downloads</div>
                    <div className="text-4xl text-purple-100">622k</div>
                  </div>
                  <div className="text-purple-300 my-auto bg-gradient-to-l from-purple-700 via-purple-800 to-purple-900 rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                    </svg>
                  </div>
                </div>

                {/* ---------2--------- */}
                <div className="flex flex-row m-auto   p-6 gap-8 rounded-lg border-2 border-gray-400">
                  <div className="my-auto">
                    <div className="text-lg text-purple-300">Downloads</div>
                    <div className="text-4xl text-purple-100">622k</div>
                  </div>
                  <div className="text-purple-300 my-auto bg-gradient-to-l from-purple-700 via-purple-800 to-purple-900 rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                    </svg>
                  </div>
                </div>
                {/* ---------3--------- */}
                <div className="flex flex-row m-auto   p-6 gap-8 rounded-lg border-2 border-gray-400">
                  <div className="my-auto">
                    <div className="text-lg text-purple-300">Downloads</div>
                    <div className="text-4xl text-purple-100">622k</div>
                  </div>
                  <div className="text-purple-300 my-auto bg-gradient-to-l from-purple-700 via-purple-800 to-purple-900 rounded-full p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
