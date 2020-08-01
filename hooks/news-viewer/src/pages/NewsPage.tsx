import React,{FunctionComponent} from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { RouteComponentProps } from 'react-router-dom';

interface PathParamsProps {
  category: string;
}

const NewsPage: FunctionComponent<RouteComponentProps<PathParamsProps>> = ({ match }) => {
  // 카테고리가 선택되지 않았으면 기본값 all로 사용
  const category = match.params.category || 'all';
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;