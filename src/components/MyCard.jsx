import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Link } from "react-router-dom";

const MyCard = ({ data }) => {
  const pathRoute = `/details/${data.id}`;
  return (
    <Card sx={{ m: 2, maxWidth: 345 }}>
      <Link style={{ textDecoration: "none" }} to={pathRoute}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={data.img_url}
            alt={data.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography
              sx={{
                display: { xs: "block", sm: "none", md: "block" },
                maxHeight: 120,
                overflow: "auto",
              }}
              variant="body2"
              color="text.secondary"
            >
              {data.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary">
          <FavoriteIcon />
        </Button>
        <Button size="small" color="primary">
          <ChatBubbleOutlineIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default MyCard;
