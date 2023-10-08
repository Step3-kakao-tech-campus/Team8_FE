import React from 'react';
import { useParams } from 'react-router-dom';

const GroupMainPage = () => {
  const { groupName } = useParams();

  return <div>{groupName}</div>;
};

export default GroupMainPage;
