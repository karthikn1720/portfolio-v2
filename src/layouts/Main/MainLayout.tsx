import Header from "../../components/Header.tsx/Header";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import Tab from "components/Tab/Tab";
import { ReactComponent as GreenFolder } from "assets/green-folder.svg";
import { ReactComponent as OrangeFolder } from "assets/orange-folder.svg";
import { ReactComponent as BlueFolder } from "assets/blue-folder.svg";
import { TabProvider, useTab } from "hooks/useTab";
import AboutMe from "pages/about-me/AboutMe";
import Education from "pages/education/Education";
import Experience from "pages/Experience/Experience";
import Skills from "pages/skills/Skills";
import Hello from "pages/Hello/Hello";
import React from "react";

const sidebarItems = [
  {
    label: "bio",
    icon: <BlueFolder />,
    subItem: [{ label: "about-me" }],
  },
  {
    label: "experience",
    icon: <OrangeFolder />,
    subItem: [{ label: "Experience.js" }, { label: "Skills.js" }],
  },
  {
    label: "education",
    icon: <GreenFolder />,
    subItem: [{ label: "Education.js" }],
  },
];

const pages: any = {
  "about-me": <AboutMe />,
  "Skills.js": <Skills />,
  "Experience.js": <Experience />,
  "Education.js": <Education />,
};

const MainLayout = () => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const tabs = useTab({ tabsList: sidebarItems });
  const { ActivePage } = tabs;
  return (
    <TabProvider tabs={tabs}>
      <div className="p-top-50 p-bottom-50 h100v overflow-h">
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className="wrap-sidebar-and-main flex">
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <div className="main-screen w100 bg-primary">
            <Tab></Tab>
            <div className="page overflow-s scroll-bar">
              {ActivePage ? pages[ActivePage] : <Hello />}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </TabProvider>
  );
};

export default MainLayout;
