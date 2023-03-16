import { SiIndeed, SiRstudio, SiUpwork} from "solid-icons/si"
import {
    FaBrandsDropbox,
    FaBrandsGithub,
    FaBrandsKaggle,
    FaBrandsLinkedin,
    FaSolidCode
} from "solid-icons/fa"
import {FiMail} from "solid-icons/fi";
import {CgWebsite} from "solid-icons/cg";

const SideBar = () => {
  return (
    <div class="fixed top-0 left-0 h-screen w-16 flex flex-col bg-white
                  dark:bg-gray-900 shadow-lg">
      <SideBarIcon
        icon={<FaSolidCode size="28" /> }
        text="Source Code"
        link="https://github.com/jmwinemiller/jmwinemiller.github.io"
      />
      <Divider />
      <SideBarIcon
          icon={<FaBrandsLinkedin size="28" />}
          text="Linkedin"
          link="https://www.linkedin.com/in/jordan-winemiller" />
      <SideBarIcon
        icon={<FaBrandsGithub size="28" />}
        text="Github"
        link="https://github.com/jmwinemiller"
      />
      <SideBarIcon
        icon={<FaBrandsKaggle size="28" />}
        text="Kaggle"
        link="https://www.kaggle.com/jmwinemiller"
      />
      <Divider />
      <SideBarIcon
        icon={<SiRstudio size="28" />}
        text="RPubs"
        link="https://rpubs.com/jwinemiller"
      />
      <SideBarIcon
        icon={<CgWebsite size="28" />}
        text="Shiny Website"
        link="https://jwinemiller.shinyapps.io/Presentation"
      />
      <Divider />
      <SideBarIcon
        icon={<SiUpwork size="28" />}
        text="Upwork"
        link="https://www.upwork.com/freelancers/~01c72f3181dddf810d"
      />
      <SideBarIcon
        icon={<SiIndeed size="28" />}
        text="Indeed Resume"
        link="https://my.indeed.com/p/jordanw-yy874yz"
      />
      <Divider />
      <SideBarIcon
        icon={<FaBrandsDropbox />}
        text="Resume"
        link="https://www.dropbox.com/s/ze3qrhcb1qq5bdi/JordanWinemiller_Resume.pdf?dl=0"
      />
      <SideBarIcon
        icon={<FiMail size="28" />}
        text="Email Contact"
        link="mailto:jordanwinemiller@gmail.com"
      />
    </div>
  );
};

const SideBarIcon = (props) => (
  <div class="sidebar-icon group" >
    <a href={props.link}>
      {props.icon}
    </a>
    <span class="sidebar-tooltip group-hover:scale-100">
      {props.text}
    </span>
  </div>
);

const Divider = () => <hr class="sidebar-hr" />;

export default SideBar;

