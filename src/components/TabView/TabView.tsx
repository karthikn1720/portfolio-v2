import React from "react";
import "./tab-view";
import { Tab, Tabs } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  panelClass?: string;
  index: any;
  value: any;
}

function TabPanel({ children, value, index, panelClass }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && <div className={panelClass}>{children}</div>}
    </div>
  );
}

export interface TabItemProps {
  text: string;
  icon: JSX.Element;
  visible?: boolean;
  url?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export interface TabContainerProps {
  items: TabItemProps[];
  initialTab?: number;
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const TabView = ({ items, initialTab = 0 }: TabContainerProps): JSX.Element => {
  const [value, setValue] = React.useState<number | undefined>(initialTab);

  React.useEffect(() => {
    setValue(initialTab);
  }, [initialTab]);

  const handleChange = (event: React.ChangeEvent<any>, index: number) => {
    setValue(index);
  };

  return (
    <div>
      <div>
        <Tabs
          TabIndicatorProps={{ style: { height: 4 } }}
          value={value}
          indicatorColor="primary"
          textColor="primary"
          aria-label="full width tabs example"
          onChange={handleChange}
          variant="scrollable"
        >
          {items.map(
            (item, index) =>
              item.visible && (
                <Tab
                  key={index}
                  color="primary"
                  disabled={item.disabled}
                  label={item.text}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...a11yProps(index)}
                />
              )
          )}
        </Tabs>
      </div>
      {items.map(
        (item, index) =>
          item.visible && (
            <TabPanel value={value} index={index} key={item.url}>
              {item.children}
            </TabPanel>
          )
      )}
    </div>
  );
};

export default TabView;
