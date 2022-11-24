import {GetStaticProps} from "next";
import API from "../data/api";
import {NewsItem} from "../data/models";
import App from "../components/App";

export default function Home({data}: {data: NewsItem[]}) {
  return <App data={data} />;
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await API.getAll();
    return {
        props: {data}
    }
}
