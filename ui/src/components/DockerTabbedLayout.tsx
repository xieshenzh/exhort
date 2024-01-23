import React from 'react';
import {Grid, GridItem, PageSection, PageSectionVariants, Tab, Tabs, TabTitleText,} from '@patternfly/react-core';
import {SummaryCard} from '../components/SummaryCard';
import {TabbedLayout} from "../components/TabbedLayout";
import {ReportErrorAlert} from '../components/ReportErrorAlert';
import {Report} from '../api/report';

export const DockerTabbedLayout = ({report}: { report: Report[] }) => {

  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(report[0]?.root?.ref || '');
  const [isTabsLightScheme] = React.useState<boolean>(true);

  // Toggle currently active tab
  const handleTabClick = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number,
  ) => {
    setActiveTabKey(tabIndex);
  };

  const tabs = report.map((report) => {
    const srcName = report.root?.ref || '';
    return (
      <Tab
        eventKey={srcName}
        title={<TabTitleText>{srcName}</TabTitleText>}
        aria-label={`${srcName} source`}
      >
        <ReportErrorAlert report={report}/>
        <PageSection variant={PageSectionVariants.light}>
          <Grid hasGutter>
            <GridItem>
              <SummaryCard report={report}/>
            </GridItem>
          </Grid>
        </PageSection>
        <PageSection variant={PageSectionVariants.default}>
          <TabbedLayout report={report}/>
        </PageSection>

      </Tab>
    );
  });

  return (
    <div>
      <Tabs
        activeKey={activeTabKey}
        onSelect={handleTabClick}
        aria-label="Providers"
        role="region"
        variant={isTabsLightScheme ? 'light300' : 'default'}
        isBox>
        {tabs}
      </Tabs>
    </div>
  );
};