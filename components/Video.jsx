// import BgVideo from "./video/video.mp4"

const Video = () => {
  return (
        <div className="video">
            {/* <video
                autoPlay
                loop
                muted
                style={videoStyle}
            >
                <source src={BgVideo} type="video/mp4"/>
            </video> */}
        </div>
    );
};
const videoStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
}
export default Video;
