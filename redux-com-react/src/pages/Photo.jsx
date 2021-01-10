import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import { PHOTO_GET } from "../api";

import Error from "../components/Error";
import Loading from "../components/Loading";
import PhotoContent from "../components/Photo/PhotoContent";
import Head from "../components/Head";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent data={data} single />
      </section>
    );
  return null;
};

export default Photo;
