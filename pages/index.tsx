import {MDBContainer} from "mdb-react-ui-kit";
import {GetServerSideProps} from "next";

export default function Home(props: {name: string}) {
  return (
      <MDBContainer>
          <div className="fs-3">
              {props.name}
          </div>
      </MDBContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    // get news posts from backend...
    console.log('get server side props');
    return {
        props: {name: 'Nadav'}
    }
}
