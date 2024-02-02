import {createContext, useContext} from 'react';
import {Grid, GridItem, PageSection, PageSectionVariants} from '@patternfly/react-core';

import {AppData} from './api/report';
import {SummaryCard} from './components/SummaryCard';
import {ReportErrorAlert} from './components/ReportErrorAlert';

import {MOCK_REPORT} from './mocks/report.mock';
import {TabbedLayout} from "./components/TabbedLayout";
import {DockerTabbedLayout } from './components/DockerTabbedLayout'

const data: AppData =
  process.env.NODE_ENV === 'production' ? ((window as any)['appData'] as AppData) : MOCK_REPORT.docker;

export const AppContext = createContext<AppData>(data);
export const useAppContext = (): AppData => useContext(AppContext);

function App() {
  return (
    <AppContext.Provider value={data}>
      {Array.isArray(data.report) ? (
        <PageSection variant={PageSectionVariants.default}>
          <DockerTabbedLayout report={data.report}/>
        </PageSection>
      ) : (
        <>
          <ReportErrorAlert report={data.report}/>
          <PageSection variant={PageSectionVariants.light}>
            <Grid hasGutter>
              <GridItem>
                <SummaryCard report={data.report}/>
              </GridItem>
            </Grid>
          </PageSection>
          <PageSection variant={PageSectionVariants.default}>
            <TabbedLayout report={data.report}/>
          </PageSection>
        </>
      )}
    </AppContext.Provider>
  );
}

export default App;
