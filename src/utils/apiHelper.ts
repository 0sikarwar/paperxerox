interface LooseObject {
  [key: string]: any;
}
interface useFetchPropType {
  url: string;
  headers?: LooseObject;
  body?: LooseObject;
}
export const getData = async (
  url: string,
  body?: LooseObject,
  headers?: LooseObject,
) => {
  const urlPath = new URL(url);
  if (body) {
    Object.keys(body).forEach(key =>
      urlPath.searchParams.append(key, body[key]),
    );
  }
  const data = await fetch(urlPath.toString(), {headers})
    .then(res => res.json())
    .catch(err => ({isError: true, err}));
  return data;
};
export const usePost = async (
  url: string,
  body: LooseObject,
  headers?: LooseObject,
) => {
  const options = {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({...body, namespace: 'paperxerox'}),
  };
  const data = await fetch(url, options)
    .then(res => res.json())
    .catch(err => ({isError: true, err}));
  return data;
};
