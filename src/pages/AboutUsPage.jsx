import Home from "../assets/Home.png";
import ID from "../assets/ID.png";
import Contact from "../assets/Contact.png";

const AboutUsPage = () => {
  return (
    <div className="w-full min-h-screen">
      <header className="bg-[#252434] text-center w-full h-96 flex flex-col justify-center items-center gap-10">
        <h1 className="text-5xl text-white font-bold">
          About <span className="text-[#00A3FF]">NSG</span>
        </h1>
        <p className="text-base font-semibold text-[#AEAEAE]">
          On a mission to acccelerate the world's transition into money
        </p>
      </header>

      <main className="flex flex-col md:flex-row py-10 px-4 xl:px-40 lg:px-10 w-full xl:gap-x-40 lg:gap-x-10">
        <aside className="flex flex-col gap-6 px-0 w-full md:w-4/12">
          <p className="py-4 text-base font-semibold text-[#AEAEAE] hover:text-white border-l-4 border-transparent pl-4 hover:border-[#00A3FF] hover:cursor-pointer relative transition-all">
            Our Mission
          </p>
          <p className="py-4 text-base font-semibold text-[#AEAEAE] hover:text-white border-l-4 border-transparent pl-4 hover:border-[#00A3FF] hover:cursor-pointer relative transition-all">
            An Entirely New Monetary System
          </p>
          <p className="py-4 text-base font-semibold text-[#AEAEAE] hover:text-white border-l-4 border-transparent pl-4 hover:border-[#00A3FF] hover:cursor-pointer relative transition-all">
            Gold on the Blockchain
          </p>
          <p className="py-4 text-base font-semibold text-[#AEAEAE] hover:text-white border-l-4 border-transparent pl-4 hover:border-[#00A3FF] hover:cursor-pointer relative transition-all">
            Borderless Currency
          </p>
        </aside>
        <article className="flex flex-col gap-10 w-full md:w-8/12">
          <div>
            <h1 className="text-2xl text-white font-bold">Our Mission</h1>
            <p className="text-base font-light text-[#AEAEAE]">
              North Star Group shares a vision of a world where money is honest,
              fair and backed by a true store of value, within a system designed
              to reward everyone who participates.
              <br /> <br />
              NSG has introduced a new form of money to stand the test of time
              and overcome the pitfalls of traditional currencies susceptible to
              inflation, weakened value and eventual collapse. In today’s
              financial model, where more and more money is printed and the
              value of that currency is eroded, economies and individuals are
              left to suffer the consequences.
            </p>
          </div>
          <div>
            <h1 className="text-2xl text-white font-bold">Lorem ipsum</h1>
            <p className="text-base font-light text-[#AEAEAE]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </article>
      </main>

      <section className="w-full text-center my-15 px-4 xl:px-50 lg:px-20">
        <h1 className="text-5xl text-white font-bold mb-20">
          Industry Leaders in Fully Allocated Precious Metals
        </h1>
        <p className="text-base font-light text-[#AEAEAE] text-start px-8">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.{" "}
        </p>
      </section>
      <div className="cards flex flex-col md:flex-row py-10 px-4 xl:px-40 lg:px-10 w-full justify-between text-center gap-x-[77px]">
        <div className="flex flex-1 flex-col items-center justify-start bg-[#252434] m-2 px-4 py-7 rounded-lg gap-4">
          <img className="w-16" src={Home} alt="" /> <h1 className="text-2xl text-white font-bold">Name and Address</h1>
          <p className="text-base font-light text-[#AEAEAE]">Name and address, name and address, name and address</p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-start bg-[#252434] m-2 px-4 py-7 rounded-lg gap-4">
          
          <img className="w-16" src={ID} alt="" /> <h1 className="text-2xl text-white font-bold">CEO</h1> <p className="text-base font-light text-[#AEAEAE]">Chris Rodriguez </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-start bg-[#252434] m-2 px-4 py-7 rounded-lg gap-4">
          
          <img className="w-16" src={Contact} alt="" /> <h1 className="text-2xl text-white font-bold">Contact information</h1>
          <p className="text-base font-light text-[#AEAEAE]">
            +44 12 3456 6789 <br /> northstargroup@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
