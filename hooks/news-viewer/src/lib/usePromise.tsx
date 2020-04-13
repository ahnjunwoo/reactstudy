import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface Source {
  id: string;
  name: string;
}

interface Articles {
  articles: Array<Article>;
}


export default function usePromise({ promiseCreator, deps }: { promiseCreator: () => Promise<AxiosResponse<Articles>>, deps: any })
  : [boolean, AxiosResponse<Articles> | null, any] {
  // 로딩중 / 완료 / 실패에 대한 상태 관리
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<AxiosResponse<Articles> | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResponse(resolved);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
  }, deps);

  return [loading, response, error];
}
