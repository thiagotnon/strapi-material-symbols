import { Page } from '@strapi/strapi/admin';
import { Profiler } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from './HomePage';

const App = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <Profiler
            id="HomePage"
            onRender={(id, phase, actualDuration) => {
              console.log(`${id} - ${phase}: ${actualDuration}ms`);
            }}
          >
            <HomePage />
          </Profiler>
        }
      />
      <Route path="*" element={<Page.Error />} />
    </Routes>
  );
};

export { App };
