import React, {useState, Fragment, useEffect} from 'react';
import Search from '../../containers/Search/Search';
import axiosMovies from "../../axiosMovies";

const Movie = (props) => {
  let movieInfo = null;
  const [movieShow, setMovieShow] = useState(movieInfo);

  let movieText = null;
  const [movieDescription, setMovieDescription] = useState(movieText);

  const fetchData = async (id) => {
    const response = await axiosMovies.get(`shows/${id}`);
    movieInfo = response.data;
    setMovieShow(movieInfo);

    if (response.data.summary === null) {
      setMovieDescription('No description');
    } else {
      setMovieDescription(response.data.summary.replace(/(\<(\/?[^>]+)>)/g, ''));
    }
  };

  useEffect(() => {fetchData(props.match.params.id);
  },[props.match.params.id]);

  return (
    <Fragment>
      <Search />
      { movieShow ?
        <div>
          { movieShow.image ?
            <img src={movieShow.image.medium} style={{float: 'left', paddingRight: '15px'}}/>
            : <p>Image not found</p>
          }
          <p style={{fontWeight: 'bold'}}>{movieShow.name}</p>
          <p style={{fontWeight: 'bold'}}>Language: {movieShow.language}</p>
          { movieShow.rating.average ?
            <p style={{fontWeight: 'bold'}}>Rating: {movieShow.rating.average}</p>
            : <p>Not rated</p>
          }
          <p>{movieDescription}</p>
        </div>
        : null
      }
    </Fragment>
  );
};

export default Movie;