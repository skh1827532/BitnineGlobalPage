import React from "react";
import Logo from "../assets/AgenSQL-Logo.png";
import EnterpriseLogo from "../assets/Agens-Enterprise-Package.png";
import GitHubLogo from "../components/GithubLogo";
import AgensEnterprise from "../assets/Agens-Enterprise-Package.png";
import Button from "../components/Button";
import StrongText from "../components/StrongText";
import FlippingComponent from "../components/FlippingComponent";
import MainLogo from "../assets/AgenSQL-Logo.png";
import ImageBox from "../components/ImageHoverComponent";
import List from "../components/List";
import Paragraph from "../components/Paragraph";
import KeyFeaturesImg from "../assets/img_key-features_eng.png";
import { paras, ButtonsText, imageSrcs, listText } from "../data/data";
import TwoColumnTable from "../components/TwoColumnTable";
const hoverText = ["Item 1", "Item 2", "Item 3"];

const backText = [1, 2, 3];

const Product = () => {
  return (
    <div>
      <div>
        <img src={MainLogo} alt="" />
        <h3>
          <StrongText
            text="An integration of Bitnine's DB technology and PG expertise"
            color="#444444"
          />
        </h3>
        {paras.map((elem, index) => {
          return (
            <Paragraph text={elem} color="#666666" width="50%" key={index} />
          );
        })}

        <div className="buttons-div">
          {ButtonsText.map((elem, index) => {
            return <Button text={elem} key={index} />;
          })}
        </div>

        <div
          style={{
            background: "rgb(243, 246, 251)",
            margin: "0",
            padding: "10% 20%",
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={AgensEnterprise}
            alt="Not Found!"
            width="90%"
            height="100%"
          />
        </div>

        <div>
          <h2>
            <StrongText text="Key features" color="#000" />
          </h2>
          <Paragraph
            color="#666666"
            text="Manage your data with Agens Enterprise Package"
          />
          <Paragraph
            color="#666666"
            text="
Essential enterprise features such as high availability and sharding are provided"
          />
        </div>

        <img src={KeyFeaturesImg} alt="" width="80%" />
        <div style={{ background: "rgb(243, 246, 251)" }}>
          <h1>
            <StrongText color="#000" text="AgensSQL DB Engine" />
          </h1>
          <Paragraph
            text="Manage your data with Agens Enterprise Package"
            color="#666666"
          />
          <Paragraph
            text="
Essential enterprise features such as high availability and sharding are provided"
            color="#666666"
          />
          <div className="data-security-image">
            {imageSrcs.map((elem, index) => {
              return (
                <ImageBox key={index} imageUrl={elem.src} items={elem.text} />
              );
            })}
          </div>
        </div>

        <div>
          <h2>
            <StrongText text="Agens Enterprise Package" color="#000" />
          </h2>

          <Paragraph
            text="Agens Enterprise Package comes with a high availability management server that"
            color="#666666"
          />
          <Paragraph
            text="supports backup and data monitoring dashboard that helps enterprise customers manage their data efficiently."
            color="#666666"
          />

          <TwoColumnTable />
        </div>

        <div style={{ display: "flex" }}>
          {listText.map((elem, index) => {
            return (
              <List
                key={index}
                heading={elem.heading}
                listItems={elem.listItems}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
