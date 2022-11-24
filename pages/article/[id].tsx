import {NewsItem} from "../../data/models";
import {GetStaticPaths, GetStaticProps} from "next";
import API from "../../data/api";
import Article from "../../components/Article";

export default function ArticlePage({item}: {item: NewsItem}) {
    return <Article item={item} />;
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}
export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params?.id;
    if(id) {
        const item = await API.getById(id as string)
        if(item)
            return {
                props: {item}
            }
    }
    return {
        notFound: true
    }
}

