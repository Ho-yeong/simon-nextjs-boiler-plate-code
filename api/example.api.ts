import https from 'https';

const API_URL = 'Backend URL';
const agent = new https.Agent({
  rejectUnauthorized: false,
});

export interface DataType {
  id: string;
  title: string;
  content: string;
}

export async function getData() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const request = await fetch(`${API_URL}`, { agent });
  const response = await request.json();
  const { data } = response;

  return {
    data,
  };
}
