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
    <div class="sidebar-layout">
      <SideBarIcon
        icon={<FaSolidCode /> }
        text="Source Code"
        link="https://github.com/jmwinemiller/jmwinemiller.github.io"
      />
      <Divider />
      <SideBarIcon
          icon={<FaBrandsLinkedin />}
          text="Linkedin"
          link="https://www.linkedin.com/in/jordan-winemiller" />
      <SideBarIcon
        icon={<FaBrandsGithub />}
        text="Github"
        link="https://github.com/jmwinemiller"
      />
      <SideBarIcon
        icon={<FaBrandsKaggle />}
        text="Kaggle"
        link="https://www.kaggle.com/jmwinemiller"
      />
      <Divider />
      <SideBarIcon
        icon={<SiRstudio />}
        text="RPubs"
        link="https://rpubs.com/jwinemiller"
      />
      <SideBarIcon
        icon={<CgWebsite />}
        text="Shiny Website"
        link="https://jwinemiller.shinyapps.io/Presentation"
      />
      <Divider />
      <SideBarIcon
        icon={<SiUpwork />}
        text="Upwork"
        link="https://www.upwork.com/freelancers/~01c72f3181dddf810d"
      />
      <SideBarIcon
        icon={<SiIndeed />}
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
        icon={<FiMail />}
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

