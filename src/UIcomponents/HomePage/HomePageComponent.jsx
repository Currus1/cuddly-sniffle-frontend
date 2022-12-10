import React, { useEffect } from "react";
import HeaderComponent from "../BaseHeader/HeaderComponent";
import FooterComponent from "../BaseFooter/FooterComponent";
import HomePageBannerComponent from "./HomePageBannerComponent";
import { useNavigate } from "react-router-dom";
import { useUserValidation } from "../../CustomHooks/useUserValidation";
import BecomeDriverComponent from "../ReusableComponents/BecomeDriverComponent";

const TripsComponent = () => {
  const navigate = useNavigate("");

  var isValid = useUserValidation();

  useEffect(() => {
    if (!isValid) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <HeaderComponent />
      <HomePageBannerComponent />
      <BecomeDriverComponent />
      <FooterComponent />
    </div>
  );
};

export default TripsComponent;
