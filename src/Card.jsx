import { useCustomScript } from "./Script";
import logoImage from "./assets/cpm_logo_b.png";
import recentProject from "./assets/code.png";
import github from "./assets/github.svg";
import user from "./assets/user.png";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import instagram from "./assets/instagram.png";
import randomdice from "./assets/random_dice.png";
import CopyLinkButton from "./CopyLinkButton"; // Import the CopyLinkButton component
import propTypes from "prop-types";

const buttonsData = [
  {
    link: "https://github.com/Lucianono/ShelterAlloc_Thesis",
    icon: recentProject,
    label: "recent project",
    disabled: false,
  },
  {
    link: "https://lovalog.infinityfreeapp.com/",
    icon: randomdice,
    label: "store price ledger",
    disabled: false,
  },
  {
    link: "https://captainpandamonkey5.github.io/CPM-Alpha/src/index.html",
    icon: user,
    label: "more about me",
    disabled: true,
  },
  {
    link: "https://github.com/CaptainPandaMonkey5",
    icon: github,
    label: "github",
    disabled: false,
  },
  {
    link: "https://www.linkedin.com/in/lovelycunanan/",
    icon: linkedin,
    label: "linkedin",
    disabled: false,
  },
  {
    link: "https://twitter.com/CptPandaMonkey",
    icon: twitter,
    label: "twitter",
    disabled: false,
  },
  {
    link: "https://www.instagram.com/captainpandamonkey/",
    icon: instagram,
    label: "instagram",
    disabled: false,
  },
];

const SocialButton = ({ link, icon, label, disabled }) => (
  <button
    className="btn btn-warning flex w-80 items-center justify-center rounded-2xl border-2 border-[#333333] text-lg font-bold shadow-[5px_10px_0px_0px_rgba(51,51,51,1)] transition duration-500 hover:bg-gray-500 hover:text-white hover:shadow-[0_0_0_0_rgba(0,0,0,0)]"
    data-link={link}
    disabled={disabled}
  >
    <img src={icon} alt={label} className="mr-2 h-6 w-6" />
    <span className="text-center">{label}</span>
  </button>
);

SocialButton.propTypes = {
  link: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  disabled: false,
};

function Card() {
  useCustomScript();

  return (
    <>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-center">
        <img
          className="mb-4 h-32 w-32 rounded-full"
          src={logoImage}
          alt="profile_img"
        />
        <h1 className="text-4xl font-bold">PandaMonkey</h1>
        <p className="mx-auto mt-2 items-center text-center text-base">
          Mathematics and Computer Science Graduate <br />
          Junior Web Developer at Virtual Graffiti Australia <br />
          Discord Moderator at The High Exchange - THX and The High X
        </p>
        <div className="my-2">
          <CopyLinkButton />
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
        <div className="flex flex-col items-center space-y-6 py-5">
          {buttonsData.map((button, index) => (
            <SocialButton
              key={index}
              link={button.link}
              icon={button.icon}
              label={button.label}
              disabled={button.disabled}
            />
          ))}
        </div>
        <footer className="footer footer-center p-5 text-black">
          <aside>
            <p className="font-bold">CaptainPandaMonkey</p>
            <p>Made in 2024</p>
          </aside>
        </footer>
      </div>
    </>
  );
}

export default Card;
