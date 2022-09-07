import type { FC } from "react";
import { useState, useEffect } from "react";
import { useLanyard } from "react-use-lanyard";
import { DEFAULTS } from "../../../lib/stuffs";
import ReactTooltip from "react-tooltip";
import Tilt from "react-tilt";
import Link from "next/link";
import { PageDir, ID } from "@components/utils/Dialogs/pageDir";
import { BsGithub, BsLinkedin, BsSpotify, BsTwitter } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { DiscordStatus } from "@components/utils/Functions/DiscordStatus";
export const About: FC = () => {
  let [details, setDetails] = useState<string | null>();
  let [activity, setActivity] = useState<string | null>();
  let [statusColor, setStatusColor] = useState<string | null>();
  let [statusText, setStatusText] = useState<string | null>();

  function pageDir(e: any) {
    e.preventDefault();
    window.document.getElementById(ID)?.classList.remove("hidden");
  }

  useEffect(() => {
    let modal: any = window.document.getElementById(ID);
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.classList.add("hidden");
      }
    };
  });

  function LanyardInitializer() {
    let userID = DEFAULTS.DiscordUserID;
    const { loading, status } = useLanyard({
      userId: userID,
      socket: true,
    });
    if (!loading) {
      let discordStatus = status?.discord_status;
      if (discordStatus) {
        let { formattedStatus, color }: any = DiscordStatus(discordStatus);
        if (statusText != formattedStatus) setStatusText(formattedStatus);
        if (statusColor != color) setStatusColor(color);
      }

      let activities: any = status?.activities.filter(
        (activity) => activity.id != "custom"
      );
      if (activities?.length > 0) {
        let activityName = activities[0].name;
        if (activity != activityName) setActivity(activityName);

        let detailsName = activities[0].state;
        if (activities[0].name == "Spotify") {
          detailsName = activities[0].details + " " + activities[0].state;
        }
        if (detailsName && details != detailsName) setDetails(detailsName);
      }
    }
  }

  LanyardInitializer();

  return (
    <div className="lg:flex  justify-evenly">
      <div className="hidden lg:inline-block">
        <PageDir />
      </div>
      <div className="lg:hidden mt-10 flex text-center justify-center">
        <Link href="/blog">
          <p className="text-white mr-5 bg-indigo-600 transition hover:bg-indigo-700 px-4 py-3 rounded -mt-3 cursor-pointer">
            Blogs
          </p>
        </Link>
        <a
          href="#aboutme"
          className="text-white transition mr-5 hover:text-white/80"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="text-white transition hover:text-white/80 mr-5"
        >
          Projects
        </a>
        <a href="#repos" className="text-white transition hover:text-white/80">
          Repositories
        </a>
      </div>
      <div className="lg:w-3/12 lg:min-w-max lg:ml-10 flex flex-col">
        <Tilt className="mt-16 w-60 mx-auto">
          <button
            onClick={(e) => {
              pageDir(e);
            }}
          >
            <img src={"assets/pp.png"} className="rounded-xl cursor-pointer" />
          </button>
        </Tilt>
        <div className="mx-auto mt-5 flex">
          <div
            data-tip
            data-for="statuso"
            className="w-2.5	h-2.5 rounded-full text-gray-300 mt-2"
            style={{ backgroundColor: statusColor || "#747F8D" }}
          ></div>
          <p data-tip data-for="zort" className="ml-2 text-base text-gray-300">
            {activity || "Nothing is playing right now"}
          </p>
          <ReactTooltip
            place="left"
            backgroundColor="black"
            effect="solid"
            id="statuso"
          >
            {statusText && statusText}
          </ReactTooltip>
          {activity && (
            <ReactTooltip
              place="bottom"
              backgroundColor="black"
              effect="solid"
              id="zort"
            >
              {details}
            </ReactTooltip>
          )}
        </div>
        <div className="text-center flex mx-auto mt-3">
          <a
            className="w-6 h-6 mr-3"
            href={DEFAULTS.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="w-6 h-6 text-white hover:text-black  transition duration-500" />
          </a>
          <a
            className="w-6 h-6 mr-3"
            href={DEFAULTS.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="w-6 h-6 text-white hover:text-[#0A66C2] transition duration-500" />
          </a>
          <a
            className="w-6 h-6 mr-3"
            href={DEFAULTS.links.discord}
            target="_blank"
            rel="noreferrer"
          >
            <SiDiscord className="w-6 h-6 text-white hover:text-[#737CF8] transition duration-500" />
          </a>
          <a
            className="w-6 h-6 mr-3"
            href={DEFAULTS.links.mail}
            target="_blank"
            rel="noreferrer"
          >
            <HiMail className="w-6 h-6 text-white hover:text-gray-500 transition duration-500" />
          </a>
          <a
            className="w-6 h-6 mr-3"
            href={DEFAULTS.links.spotify}
            target="_blank"
            rel="noreferrer"
          >
            <BsSpotify className="w-6 h-6 text-white hover:text-[#1DD760] transition duration-500" />
          </a>
          <a
            className="w-6 h-6 mr-3"
            href={DEFAULTS.links.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="w-6 h-6 text-white hover:text-[#1C9CEF] transition duration-500" />
          </a>
        </div>
      </div>
      <div className="lg:w-9/12 lg:my-auto">
        <p className="text-gray-200 text-center font-bold text-5xl mt-10 lg:mt-32">
          Taha Kaçmaz
        </p>
        <p className="text-center text-indigo-600 font-semibold mt-1">
          Backend Developer
        </p>
        <p className="text-gray-400 text-center mx-5 md:mx-32 lg:mt-5">
          I'm a self-educated backend developer. I'm interested in developing
          frontend projects too. I use mostly{" "}
          <Link href="https://nextjs.org/">
            <a target="_blank" rel="noreferrer">
              <span className="link link-underline link-underline-black text-gray-200">
                NextJS
              </span>
            </a>
          </Link>{" "}
          and{" "}
          <Link href="https://tailwindcss.com/">
            <a target="_blank" rel="noreferrer">
              <span className="link link-underline link-underline-black text-gray-100">
                TailwindCSS
              </span>
            </a>
          </Link>{" "}
          in frontend development and{" "}
          <Link href="https://www.typescriptlang.org/">
            <a target="_blank" rel="noreferrer">
              <span className="link link-underline link-underline-black text-gray-100">
                Typescript
              </span>
            </a>
          </Link>{" "}
          in backend development
        </p>
      </div>
    </div>
  );
};
