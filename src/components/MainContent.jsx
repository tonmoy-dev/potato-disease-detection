import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Detector from "./Detector";

export default function MainContent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} md={5} sx={{ margin: "auto" }}>
          <Detector />
        </Grid>
      </Grid>
    </Box>
  );
}
