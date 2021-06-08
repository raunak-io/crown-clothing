import React from "react";
import DirectoryComponent from "./../../components/directory/directory.component";
import MenuItem from "./../../components/menu-item/menu-item.component";
import "./homepage.styles.scss";
// WE CAN USE EXPORT HERE  EG export const ...  but we have another way as well
const HomePage = () => (
  <div className="homepage">
    <DirectoryComponent></DirectoryComponent>
  </div>
);

export default HomePage;
