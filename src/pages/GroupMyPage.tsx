import React from 'react';
import { useParams } from 'react-router-dom';

const GroupMyPage = () => {
  const { groupName } = useParams();

  return <div>{groupName} GroupMyPage</div>;
};

export default GroupMyPage;
