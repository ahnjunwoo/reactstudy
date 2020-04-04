import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import WithRouterSample from './WithRouterSample';

interface Profile {
  name: string;
  description: string;
}

interface UserName {
  [key: string]: Profile;
}

const data:UserName = {
  velopert: {
    name: '김민준',
    description: '리액트를 좋아하는 개발자'
  },
  gildong: {
    name: '홍길동',
    description: '전래동화 흥부전의 주인공'
  }
};

interface PathParamsProps {
  username: string;
}

const Profile:FunctionComponent<RouteComponentProps<PathParamsProps>> = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample/>
    </div>
  );
};

export default Profile;
