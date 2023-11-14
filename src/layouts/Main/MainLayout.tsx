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
import CreateBlog from "pages/blog/CreateBlog";
import Blogs from "pages/blog/Blogs";
import { getAllBlogs } from "api/blog";
import Blog from "pages/blog/Blog";
import Blog2 from "pages/blog/Blog2";

const personalInfoItems = [
  {
    label: "bio",
    icon: <BlueFolder />,
    subItem: [{ label: "about-me", id: 900 }],
  },
  {
    label: "experience",
    icon: <OrangeFolder />,
    subItem: [{ label: "Experience.js" }, { label: "Skills.js", id: 901 }],
  },
  {
    label: "education",
    icon: <GreenFolder />,
    subItem: [{ label: "Education.js", id: 902 }],
  },
  {
    label: "createBlog",
    icon: <GreenFolder />,
    subItem: [
      { label: "create-blog", id: 903 },
      { label: "blogs2", id: 903 },
    ],
  },
];

const pages: any = {
  "about-me": <AboutMe />,
  "Skills.js": <Skills />,
  "Experience.js": <Experience />,
  "Education.js": <Education />,
  "create-blog": <CreateBlog />,
  blogs: <Blogs />,
  blogs2: <Blog2 />,
};

const MainLayout = () => {
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    getAllBlogs().then((res) => {
      console.log(res.data);
      setData(
        res.data?.map((item: any) => {
          console.log(item.title);
          return { label: item.title, id: item.id, isFile: true, isBlog: true };
        })
      );
    });
  }, []);

  const sidebarItems = [
    {
      label: "Personal Info",
      item: personalInfoItems,
      isFolderOpen: false,
    },
    {
      label: "Blogs",
      item: data,
      isFolderOpen: false,
    },
  ];
  const [showSidebar, setShowSidebar] = React.useState(false);
  const tabs = useTab({ tabsList: sidebarItems });

  React.useEffect(() => {
    tabs.setTabs(sidebarItems);
  }, [data]);

  const { ActivePage } = tabs;
  console.log(ActivePage);
  return (
    <TabProvider tabs={tabs}>
      <div className="p-top-50 p-bottom-50 h100v overflow-h">
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className="wrap-sidebar-and-main flex">
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <div className="main-screen w100 bg-primary">
            <Tab></Tab>
            <div className="page overflow-s scroll-bar">
              {ActivePage ? (
                ActivePage?.isBlog ? (
                  <Blog id={ActivePage.id} />
                ) : (
                  pages[ActivePage.label]
                )
              ) : (
                <Hello />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </TabProvider>
  );
};

export default MainLayout;
