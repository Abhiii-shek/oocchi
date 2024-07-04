import React from "react";
``;
const About = () => {
  return (
    <>
      <div className='w-full md:py-20 bg-[#CDEA68] rounded-t-3xl text-black lg:px-10 py-10 border-b-2 border-zinc-900 font-["Neue_Montreal"]  '>
        <h1 className=" px-4 lg:px-10 font-['Neue_Montreal'] pb-10 border-b-2 border-zinc-700 text-[8vw] lg:text-[4vw] ">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.{" "}
        </h1>

        <div className="md:grid grid-cols-3 text-[5vw] lg:text-[1.5vw] border-b-2 border-zinc-900">
          <h2 className="pb-4 lg:px-10 pt-4 lg:pb-6 px-4  ">
            What you can expect:
          </h2>
          <div className="">
            <h2 className="pb-4 lg:px-10 pt-4 lg:pb-6 px-4 ">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </h2>
            <h2 className="pb-4 lg:px-10 pt-4 lg:pb-6 px-4 ">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </h2>
          </div>

          <div className="lg:pt-36 lg:px-20 px-4 pb-4">
            S:
            {["Instagram", "Facebook", "Twitter", "Whatsapp"].map(
              (item, index) => {
                return <h1 className="lg:pt-30">{item}</h1>;
              }
            )}
          </div>
        </div>

        <div className="pt-4 lg:flex justify-between">
            <div>

          <h1 className="px-4 lg:px-2 text-[4vw]">Our Approach:</h1>
          <button className=" border-2 px-8 py-4 rounded-full bg-black text-white hover:bg-zinc-900 hover:text-zinc-200 hover:text-xl  ">
            Read more
          </button>

            </div>
          
            
            <div className="cards px-2  ">
              <div className=" ">
                <img
                  className="  rounded-xl"
                  src="./src/assets/Homepage-Photo-663x469.jpg"
                  alt=""
                />
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default About;
