import Image from "next/image";

const BlogPage = () => {
  return (
    <div className="bg-white p-4">
      <div className="max-w-5xl max-lg:max-w-3xl max-md:max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-slate-900">LATEST BLOGS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-purple-100 rounded-lg overflow-hidden group">
            <div className="relative overflow-hidden">
              <Image
                width={500}
                height={240}
                src="https://readymadeui.com/images/food22.webp"
                alt="Blog Post 3"
                className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300"
              />
              <div className="px-4 py-2.5 text-white text-sm font-medium tracking-wider bg-pink-500 absolute bottom-0 right-0">
                August 16, 2023
              </div>
            </div>
            <a href="javascript:void(0)" className="block p-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  The Future of Food and Tech
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed line-clamp-2">
                  Explore how robotics and AI are revolutionizing fast food.
                </p>
              </div>
            </a>
          </div>

          <div className="bg-purple-100 rounded-lg overflow-hidden group">
            <div className="relative overflow-hidden">
              <Image
                width={500}
                height={240}
                src="https://readymadeui.com/images/food11.webp"
                alt="Blog Post 3"
                className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300"
              />
              <div className="px-4 py-2.5 text-white text-sm font-medium tracking-wider bg-pink-500 absolute bottom-0 right-0">
                August 16, 2023
              </div>
            </div>
            <a href="javascript:void(0)" className="block p-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Eating Clean, Feeling Great
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed line-clamp-2">
                  Healthy eating doesn’t have to be boring. Discover delicious
                  meals that boost your mood.
                </p>
              </div>
            </a>
          </div>

          <div className="bg-purple-100 rounded-lg overflow-hidden group">
            <div className="relative overflow-hidden">
              <Image
                width={500}
                height={240}
                src="https://readymadeui.com/images/food.webp"
                alt="Blog Post 3"
                className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300"
              />
              <div className="px-4 py-2.5 text-white text-sm font-medium tracking-wider bg-pink-500 absolute bottom-0 right-0">
                August 16, 2023
              </div>
            </div>
            <a href="javascript:void(0)" className="block p-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Pasta That Tells a Story
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed line-clamp-2">
                  Dive into the world of bold flavors and cultural traditions.
                </p>
              </div>
            </a>
          </div>

          <div className="bg-purple-100 rounded-lg overflow-hidden group">
            <div className="relative overflow-hidden">
              <Image
                width={500}
                height={240}
                src="https://readymadeui.com/images/food33.webp"
                alt="Blog Post 1"
                className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300"
              />
              <div className="px-4 py-2.5 text-white text-sm font-medium tracking-wider bg-pink-500 absolute bottom-0 right-0">
                June 10, 2023
              </div>
            </div>
            <a href="javascript:void(0)" className="block p-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Food That Inspires
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed line-clamp-2">
                  Bright meals, bold ideas—see how vibrant food presentation can
                  spark imagination and joy.
                </p>
              </div>
            </a>
          </div>

          <div className="bg-purple-100 rounded-lg overflow-hidden group">
            <div className="relative overflow-hidden">
              <Image
                width={500}
                height={240}
                src="https://readymadeui.com/images/food44.webp"
                alt="Blog Post 2"
                className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300"
              />
              <div className="px-4 py-2.5 text-white text-sm font-medium tracking-wider bg-pink-500 absolute bottom-0 right-0">
                April 20, 2023
              </div>
            </div>
            <a href="javascript:void(0)" className="block p-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Energize Your Routine
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed line-clamp-2">
                  Power your day with nourishing bowls packed with flavor and
                  crunch.
                </p>
              </div>
            </a>
          </div>

          <div className="bg-purple-100 rounded-lg overflow-hidden group">
            <div className="relative overflow-hidden">
              <Image
                width={500}
                height={240}
                src="https://readymadeui.com/images/food55.webp"
                alt="Blog Post 3"
                className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300"
              />
              <div className="px-4 py-2.5 text-white text-sm font-medium tracking-wider bg-pink-500 absolute bottom-0 right-0">
                August 16, 2023
              </div>
            </div>
            <a href="javascript:void(0)" className="block p-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Sweet Trends to Watch
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed line-clamp-2">
                  From aesthetic plating to bite-sized delights, uncover what’s
                  trending in the world of desserts and snacks.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
