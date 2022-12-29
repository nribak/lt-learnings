import useSWR from 'swr';
import App from "../components/App";
import clientAPI from "../data/clientAPI";

export default function Home() {
  const {data} = useSWR('all', clientAPI.getAll);
  return <App data={data ?? []} />;
}

