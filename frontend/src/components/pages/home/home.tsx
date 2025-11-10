import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="bg-radial-[at_50%_5%] from-white via-white to-blue-100">
      <header className="bg-transparent flex py-2 px-4 sm:px-10 min-h-[84px] tracking-wide z-50">
        <div className="flex flex-wrap items-center justify-between gap-5 w-full max-w-screen-xl mx-auto">
          <a href="javascript:void(0)" className="max-sm:hidden">
            {/* <Image
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-36"
            /> */}
            <span className="text-black font-bold text-xl">ANiME BlOG</span>
          </a>
          <a href="javascript:void(0)" className="hidden max-sm:block">
            <Image
              src="https://readymadeui.com/readymadeui-short.svg"
              alt="logo"
              width={45}
              height={45}
              className="w-9 h-9"
            />
          </a>

          <div
            id="collapseMenu"
            className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>
            <ul className="lg:flex gap-x-6 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <a href="javascript:void(0)">
                  <Image
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    className="w-36"
                    width={144}
                    height={144}
                  />
                </a>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-2">
                <a
                  href="javascript:void(0)"
                  className="text-base text-slate-900 hover:text-purple-700 block font-semibold"
                >
                  Home
                </a>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-2">
                <a
                  href="javascript:void(0)"
                  className="text-base text-slate-900 hover:text-purple-700 block font-semibold"
                >
                  How it works
                </a>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-2">
                <a
                  href="javascript:void(0)"
                  className="text-base text-slate-900 hover:text-purple-700 block font-semibold"
                >
                  Features
                </a>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-2">
                <a
                  href="javascript:void(0)"
                  className="text-base text-slate-900 hover:text-purple-700 block font-semibold"
                >
                  Integrations
                </a>
              </li>
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-2">
                <a
                  href="javascript:void(0)"
                  className="text-base text-slate-900 hover:text-purple-700 block font-semibold"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="flex gap-4 max-lg:ml-auto">
            <Link
              href="/login"
              className="px-5 py-2.5 text-base rounded-full font-medium tracking-wide text-white border border-purple-600 bg-purple-600 hover:bg-purple-700 transition-all cursor-pointer"
            >
              Login
            </Link>

            <button id="toggleOpen" className="lg:hidden cursor-pointer">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="px-4 sm:px-10 lg:py-16 py-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-slate-900 md:text-5xl text-4xl font-bold mb-6 !leading-tight">
              Welcome to OtakuVerse <br />
              <span className="text-indigo-600">
                Dive into the world of anime & manga
              </span>
            </h1>
            <p className="text-base text-slate-600 leading-relaxed">
              We help businesses grow by leveraging cutting-edge digital
              marketing strategies that drive results, increase ROI, and build
              lasting customer relationships.
            </p>

            <div className="max-w-xl mx-auto mt-12">
              <div className="bg-gray-100 flex px-6 py-5 border border-gray-300 rounded-full overflow-hidden focus-within:border-purple-600 focus-within:bg-white transition-all">
                <input
                  type="email"
                  placeholder="Search Something..."
                  className="w-full text-slate-900 outline-none text-base bg-transparent"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192.904 192.904"
                  className="w-5 cursor-pointer fill-gray-500"
                >
                  <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                </svg>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-center flex-wrap gap-4">
              <button className="px-5 py-2.5 text-base rounded-full font-medium tracking-wide text-white border border-purple-600 bg-purple-600 hover:bg-purple-700 transition-all cursor-pointer">
                Get started today
              </button>
              <button className="px-5 py-2.5 text-base rounded-full font-medium tracking-wide text-slate-900 border border-purple-600 bg-transparent hover:bg-purple-100 transition-all cursor-pointer">
                Our services
              </button>
            </div>

            <div className="flex items-center flex-wrap justify-center gap-4 mt-12">
              <div className="flex -space-x-2">
                <Image
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://readymadeui.com/team-1.webp"
                  alt="img-1"
                  width={50}
                  height={50}
                />
                <Image
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://readymadeui.com/team-2.webp"
                  alt="img-2"
                  width={50}
                  height={50}
                />
                <Image
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://readymadeui.com/team-3.webp"
                  alt="img-3"
                  width={50}
                  height={50}
                />
              </div>
              <div className="text-slate-600 text-base">
                <span className="font-semibold">Over 10,000</span> Professionals
                trust us
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
