import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";
import "../index.css";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center" /* Center the items horizontally */
      alignItems="center" /* Center the items vertically */
      gap={{ xs: 2, md: 4 }} /* Add some gap between the items */
      sx={{
        /* Add some padding to the container */
        p: { xs: 2, md: 4 },
        /* Add a max width to the container */
        maxWidth: "1200px",
        /* Center the container */
        margin: "0 auto",
      }}
    >
      {videos?.map((item, idx) => (
        <Box key={idx} className="vid_card">
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
