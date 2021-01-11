import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Error from "../components/Error";
import Loading from "../components/Loading";
import PhotoContent from "../components/Photo/PhotoContent";
import Head from "../components/Head";

import { fetchPhoto } from "../store/photo";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [id, dispatch]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single />
      </section>
    );
  return null;
};

export default Photo;
