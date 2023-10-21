import React, { createContext } from "react";

interface TabList {
  label: string;
  icon?: any;
  subItem?: TabList[];
  isFolderOpen?: boolean;
  isFile?: boolean;
  page?: any;
}
//

interface UseTabReturn {
  activeTab: number | null;
  activeTabs: TabList[];
  setActiveTab: React.Dispatch<any>;
  tabsList: TabList[];
  handleTabClick: any;
  handleFileClick: any;
  handleChangeTab: (item: TabList) => void;
  handleCloseFile: (item: TabList) => void;
  ActivePage: any;
}

interface UseTab {
  tabsList: TabList[];
}

export type TabContextType = ReturnType<typeof useTab>;
const TabContext = createContext<TabContextType | undefined>(undefined);
export const TabProvider = ({
  children,
  tabs,
}: {
  children: any;
  tabs: any;
}) => {
  return <TabContext.Provider value={tabs}>{children}</TabContext.Provider>;
};

export function useTabContext() {
  const context = React.useContext(TabContext);
  if (!context) {
    throw new Error("Error");
  }
  return context;
}

export const useTab = ({ tabsList }: UseTab): UseTabReturn => {
  const [activeTab, setActiveTab] = React.useState<number | null>(null);
  const [activeTabs, setActiveTabs] = React.useState<TabList[]>([]);
  const [tabs, setTabs] = React.useState<TabList[]>(tabsList);
  const [ActivePage, setActivePage] = React.useState<string | null>(null);

  const handleTabClick = (item: TabList, i: number, e?: any) => {
    tabs[i].isFolderOpen = !tabs[i].isFolderOpen;
    setTabs([...tabs]);
  };

  const handleFileClick = (item: TabList, index: number, subIndex?: number) => {
    if (activeTabs.find((t) => t.label === item.label)) {
      setActivePage(item.label);
      return;
    }
    setActiveTabs((prev) => [...prev, item]);
    setActivePage(item.label);
  };

  const handleChangeTab = (item: TabList) => {
    setActivePage(item.label);
  };

  const handleCloseFile = (item: TabList) => {
    const findIndex = activeTabs.findIndex((t) => t.label === item.label);
    activeTabs.splice(findIndex, 1);
    setActiveTabs([...activeTabs]);
    let toSetActive = null;
    if (activeTabs.length) {
      if (findIndex === 0) {
        toSetActive = 0;
      }
      if (findIndex > 0) {
        toSetActive = findIndex - 1;
      }
    }
    if (toSetActive !== null) {
      setActivePage(activeTabs[toSetActive].label);
    } else {
      setActivePage(null);
    }
  };

  return {
    activeTab,
    activeTabs,
    setActiveTab,
    handleTabClick,
    handleFileClick,
    handleCloseFile,
    handleChangeTab,
    tabsList: tabs,
    ActivePage,
  };
};
