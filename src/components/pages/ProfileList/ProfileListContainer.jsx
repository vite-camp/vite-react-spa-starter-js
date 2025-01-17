// eslint-disable-next-line no-unused-vars
import React from 'react';
// import { useOktaAuth } from '@okta/okta-react';

import { getExampleData } from '../../../api';

import { List } from '../../common';
import RenderProfileListPage from './RenderProfileListPage';

// Here is an example of using our reusable List component to display some list data to the UI.
const ProfileList = () => {
  // const { authState } = useOktaAuth();

  return (
    <List
      // Use the getExampleData function to fetch data
      getItemsData={getExampleData}
      // Here we are passing in a component we want to show whilst waiting for our API request
      // to complete.
      LoadingComponent={() => <div>Loading Profiles...</div>}
      // Here we are passing in a component that receives our new data and returns our JSX elements.
      RenderItems={RenderProfileListPage}
    />
  );
};

export default ProfileList;
