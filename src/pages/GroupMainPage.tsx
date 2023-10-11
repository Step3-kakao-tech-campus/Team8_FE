import React from 'react';
import { useParams } from 'react-router-dom';

import PageTitleSection from '@components/PageTitleSection';
import { getPageInfo } from '@dummy/page';

const GroupMainPage = () => {
  const { groupName } = useParams();

  if (!groupName) return null;

  const pageInfo = getPageInfo(groupName);

  return (
    <div>
      <PageTitleSection title={pageInfo.pageName} />
    </div>
  );
};

export default GroupMainPage;
