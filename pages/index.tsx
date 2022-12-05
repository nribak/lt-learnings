import {MDBContainer} from "mdb-react-ui-kit";
import {GetServerSideProps} from "next";
import serverApi from "../api/server.api";
import {PostSummary} from "../api/models";

export default function Home({posts}: {posts: PostSummary[]}) {
  return (
      <MDBContainer>
          <div className="fs-3">
              <ol>
                  {posts.map(post => <li key={post.id}>{post.title}</li>)}
              </ol>
          </div>
      </MDBContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const postsSummaries = await serverApi.getAllPosts();
    return {
        props: {posts: postsSummaries}
    }
}
