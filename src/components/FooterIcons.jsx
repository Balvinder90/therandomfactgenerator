import { LiaLinkedinIn } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";

function FooterIcons() {
  return (
    <div className="footer-icons">
      <a
        href="https://uk.linkedin.com/in/balvindersingh90"
        target="_blank"
        title="https://uk.linkedin.com/in/balvindersingh90"
      >
        <LiaLinkedinIn />
      </a>
      <a
        href="https://github.com/Balvinder90"
        target="_blank"
        title="ttps://github.com/Balvinder90"
      >
        <FaGithub />
      </a>
    </div>
  );
}

export default FooterIcons;
