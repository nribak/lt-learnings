import {NewsItem} from "../../data/models";
import {GetServerSideProps} from "next";
import API from "../../data/api";
import ArticleEdit from "../../components/ArticleEdit";

export default function Article({item}: {item: NewsItem}) {
    return <ArticleEdit item={item} />;
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
