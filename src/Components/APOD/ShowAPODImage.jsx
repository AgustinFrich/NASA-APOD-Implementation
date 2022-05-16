const ShowAPODImage = ({ loading, response }) => {
  const loadingStyle = { width: "5vw", padding: "150px" };

  if (loading) {
    return (
      <img style={loadingStyle} src={"./loading.gif"} alt="Loading..."></img>
    );
  } else {
    return (
      <img className="APOD-Image" src={response.url} alt="Loading..."></img>
    );
  }
};

export default ShowAPODImage;
