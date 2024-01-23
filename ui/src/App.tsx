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
      <PageSection variant={PageSectionVariants.default}>
        <DockerTabbedLayout />
      </PageSection>
    </AppContext.Provider>
  );
}

export default App;
