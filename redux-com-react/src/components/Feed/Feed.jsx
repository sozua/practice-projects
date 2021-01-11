import React, { useEffect } from "react";

import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos, resetFeedState } from "../../store/feed";
import Loading from "../Loading";
import Error from "../Error";

const Feed = ({ user }) => {
  const { error, loading, list, infinite } = useSelector((state) => state.feed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFeedState());
    dispatch(loadNewPhotos({ user, total: 6 }));
  }, [dispatch, user]);

  useEffect(() => {
    let wait = false;

    const infiniteScroll = () => {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75 && !wait) {
          dispatch(loadNewPhotos({ user, total: 6 }));
          wait = true;

          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    };

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite, user, dispatch]);

  return (
    <div>
      <FeedModal />
      {list.length > 0 && <FeedPhotos />}
      {loading && <Loading />}
      {error && <Error error={error} />}
      {!infinite && (
        <p style={{ padding: "2rem 0", width: "100%", textAlign: "center" }}>
          Não há nada mais aqui! 😞
        </p>
      )}
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: propTypes.oneOfType([
    propTypes.string.isRequired,
    propTypes.number.isRequired,
  ]),
};

export default Feed;
