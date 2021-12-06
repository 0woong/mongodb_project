import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailComponent from "../../components/post/DetailComponent";

const baseURL = "http://localhost:3000";

function DetailContainer() {
  const params = useParams();
  const { postId } = params;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // axios
    async function getData() {
      setLoading(true);
      try {
        const response = await axios({
          url: `${baseURL}/ssac/board/${postId}`,
          method: "GET",
        });

        if (response.status === 200) {
          const result = response.data.data;
          setData(result);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getData();
  }, []);

  return <DetailComponent data={data} loading={loading} />;
}

export default DetailContainer;
