import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { MdFavorite, MdShare, MdExpandMore, MdMoreVert } from "react-icons/md";

export default function Detector() {
  return (
    <Card sx={{ maxWidth: "auto" }}>
      <CardHeader
        sx={{ textAlign: "center" }}
        title="Potato Disease Detection"
        subheader=""
      />
      <CardMedia component="img" height="194" image="" alt="Potato Image" />
      <CardContent>
        <Button
          variant="contained"
          size="small"
          sx={{ textTransform: "capitalize", margin: "16px 0" }}
        >
          Show Results
        </Button>
        <Typography variant="body2" color="text.secondary">
          Accuracy: 100% <br /> Disease Name: Late blight
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <MdFavorite />
        </IconButton>
        <IconButton aria-label="share">
          <MdShare />
        </IconButton>
      </CardActions>
    </Card>
  );
}
