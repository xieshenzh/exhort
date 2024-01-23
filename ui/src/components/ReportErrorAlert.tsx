import React from 'react';
import {Alert, AlertVariant} from '@patternfly/react-core';
import {uppercaseFirstLetter, hasSignUpTab} from '../utils/utils';
import {useAppContext} from '../App';
import {Report} from '../api/report';

export const ReportErrorAlert = ({report}: { report: Report }) => {

  const appContext = useAppContext();
  const errorReports = Object.keys(report.providers)
    .map(name => {
      return report.providers[name].status;
    })
    .filter(e => !e.ok && !hasSignUpTab(e));

  return (
    <>
      {errorReports.map((e, index) => (
        <Alert
          key={index}
          variant={
            e.code >= 500 ? AlertVariant.danger : e.code >= 400 ? AlertVariant.warning : undefined
          }
          title={`${uppercaseFirstLetter(e.name)}: ${e.message}`}
        />
      ))}
    </>
  );
};
