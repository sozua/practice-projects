import React, { useEffect } from "react";
import { GET_STATS } from "../../api";
import Error from "../../components/Error";
import Head from "../../components/Head";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Estatísticas" />
      </div>
    );
  return null;
};

export default UserStats;
