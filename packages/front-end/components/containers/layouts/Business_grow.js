import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SecurityIcon from "@mui/icons-material/Security";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { CardMedia, Card, CardContent, Typography } from "@mui/material";
import { typography } from "@mui/system";

const useStyles = makeStyles({
  root: {
    marginTop: 60,
    marginBottom: 40,
  },
  card: {
    width: "100%",
    padding: 20,
    height: 250,
    // borderRadius: 35,
  },
});

const cards = [
  {
    image:
      "https://assets.website-files.com/5fe79cd304bf070ed14ea9fc/5fe7cf9a9063f98569fa84a9_Pitchdecks.png",
    title: "Manage Data",
    desc:
      "Using Technology to manage your business instead of using old school style. ",
  },
  {
    image:
      "https://assets.website-files.com/5fe79cd304bf070ed14ea9fc/5fe7cf9ac0ce0176101079f6_Landingpages.png",
    title: "Security",
    desc:
      "More easier for online shop seller ot manage their data without fear of losing.",
  },
  {
    image:
      "https://assets.website-files.com/5fe79cd304bf070ed14ea9fc/5fe7cf9a9666b3bc3c3bbc1b_Digitalads.png",
    title: "Spend Less",
    desc: "No need a lot of people to take noted and reduce staff cost.",
  },
];
export default function Business_Grow() {
  const classes = useStyles();
  return (
    <div>
      <h1 id="explore"
        style={{
          textAlign: "center",
          marginTop: "180px",
          fontFamily: "'Quicksand', sans-serif",
          fontSize: "40px",
          color: "rgb(20, 93, 160)",
        }}
      >
        We help your business grow faster
      </h1>
      <Grid
        className={classes.root}
        container
        justifyContent={"center"}
        spacing={2}
      >
        {cards.map((card, index) => {
          return (
            <Grid item xs={10} sm={5} md={3}>
              <Card>
                <CardMedia image={card.image} className={classes.card} />
              </Card>
              <CardContent>
                <Typography variant="h5" style={{fontFamily: "'Quicksand', sans-serif", fontWeight:"700"}}>{card.title}</Typography>
                <Typography style={{fontFamily: "'Quicksand', sans-serif", fontWeight:"500"}}>{card.desc}</Typography>
              </CardContent>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

{
}
