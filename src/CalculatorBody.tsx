import { Box, Grid } from "@mui/material";

function CalculatorBody() {
  return (
    <div id="calculator-body" className="calculator-body">
      <p>Calculator here</p>
      <Box
        sx={{
          height: 750,
          backgroundColor: "gray",
          borderRadius: 10,
          border: 2.5,
          borderColor: "black",
        }}
      >
        <Grid container>
          <Grid item xs={12} minHeight={150}>
            <p>Display</p>
          </Grid>
          <Grid item xs={12} minHeight={75}>
            <Grid container>
              <Grid item xs={3}>
                7
              </Grid>
              <Grid item xs={3}>
                8
              </Grid>
              <Grid item xs={3}>
                9
              </Grid>
              <Grid item xs={3}>
                +
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} minHeight={75}>
            <Grid container>
              <Grid item xs={3}>
                4
              </Grid>
              <Grid item xs={3}>
                5
              </Grid>
              <Grid item xs={3}>
                6
              </Grid>
              <Grid item xs={3}>
                -
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} minHeight={75}>
            <Grid container>
              <Grid item xs={3}>
                1
              </Grid>
              <Grid item xs={3}>
                2
              </Grid>
              <Grid item xs={3}>
                3
              </Grid>
              <Grid item xs={3}>
                x
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} minHeight={75}>
            <Grid container>
              <Grid item xs={3}>
                0
              </Grid>
              <Grid item xs={6}>
                =
              </Grid>
              <Grid item xs={3}>
                /
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default CalculatorBody;
