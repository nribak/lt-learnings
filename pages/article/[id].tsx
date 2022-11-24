import {NewsItem} from "../../data/models";
import {GetServerSideProps} from "next";
import API from "../../data/api";
import Article from "../../components/Article";

export default function Article({item}: {item: NewsItem}) {
    return <Article item={item} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
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
