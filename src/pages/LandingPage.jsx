import Header from "../assets/LandingHeaderImg.png"

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#1E1E1E] px-4 md:px-20 flex flex-col gap-10">
      <header className="w-full mt-10">
        <div>
          <p className="text-base font-bold text-[#00A3FF]">
            YOUR MONEY, YOUR CHOICE
          </p>
          <h2 className="text-5xl text-white font-bold">
            Manage your money with
          </h2>
          <h1
            className="font-extrabold
text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <em>
              <span
                className="bg-[linear-gradient(45deg,#D8A800_0%,#7C7213_52%,#D8A800_100%)] 
bg-clip-text text-transparent"
              >
                Gold
              </span>{" "}
              {""}
              <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                &
              </span>{" "}
              {""}
              <span
                className="bg-[radial-gradient(circle,#636363_0%,#FFFFFF_52%,#636363_100%)] 
bg-clip-text text-transparent"
              >
                Silver
              </span>{" "}
              {""}
            </em>
          </h1>

          <p className="text-base font-semibold text-[#AEAEAE]">
            Spend and save in physical gold and silver. Buy digital currency.
            Earn rewards for every transaction
          </p>
        <div className="lg:flex items-center gap-2 text-white font-bold">
        <button
          className="px-8 py-2 rounded-sm bg-[#00A3FF] transition hover:scale-105 hover:cursor-pointer"
        >
Join Group        </button>
        <button
          className="px-8 py-2 rounded-sm bg-[#202E48] transition hover:scale-105 hover:cursor-pointer"
        >
About Us        </button>
      </div>
        </div>
        <div>
          <img src={Header} alt="" />
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
