import React from "react";
import LinkWithIcon from "./GithubLogo";
import SearchBox from "./SearchBox"; // Assuming the component is in a separate file

const SocialIcons = () => {
  const linksData = [
    {
      link: "https://github.com/",
      icon: "fab fa-github",
      backgroundColor: "#333", // Dark gray
      color: "yellow",
    },
    {
      link: "https://www.youtube.com/",
      icon: "fab fa-youtube",
      backgroundColor: "red", // Red color
      color: "black",
    },
    {
      link: "https://www.linkedin.com/",
      icon: "fab fa-linkedin",
      backgroundColor: "#00008B", // Dark blue
      color: "#333",
    },
    {
      link: "https://www.facebook.com/",
      icon: "fab fa-facebook",
      backgroundColor: "#ADD8E6", // Light blue
      color: "black",
    },
    // Add more links with their respective icons and background colors here
  ];

  return (
    <div
      className="social-icons-container"
      style={{ background: "#fafafa", fontSize: "20px" }}
    >
      <div style={{ margin: "0px 20px" }}>
        <SearchBox parentHeight="40px" />
      </div>
      <div
        className="contact-text"
        style={{ margin: "0px 30px", marginLeft: "10px", marginRight: "80px" }}
      >
        Contact
      </div>
      <div className="social-icons" style={{ marginRight: "20px" }}>
        {linksData.map((item, index) => {
          return (
            <LinkWithIcon
              key={index}
              link={item.link}
              icon={item.icon}
              backgroundColor={item.backgroundColor}
              color={item.color}
              fontSize="20px"
            />
          );
        })}
      </div>
    </div>
  );
};

export default SocialIcons;
