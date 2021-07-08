import './App.css';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { height } from '@material-ui/system';
const useStyles = makeStyles(() => ( {
  logo:{
    height:"50px",
    width:"50px",
    marginLeft: "10px",
    marginTop: "10px",
    alignSelf: "flex-start"
  },
  entry_Par:{
    textAlign:"center",
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item xs={12} container>
        <Grid item xs={2}>
          <AccountCircleIcon className={classes.logo}></AccountCircleIcon>
        </Grid>
        <Grid item xs={8}>
          <h2 className={classes.entry_Par}>Welcome to my About Page!</h2>
        </Grid>
      </Grid>
      <Grid item xs={12} container>
        <Grid xs={3}></Grid>
        <Grid item xs={6} justifyContent="center">
          <h2 className={classes.entry_Par}> Hello everyone, and thank you for taking the time to visit my about page! I hope you're ready to learn more about yours truly :D</h2>
        </Grid>
      </Grid>
      <Grid item xs={12} container>
        <Grid item xs={4}>
          <h2>Biography:</h2>
        </Grid>
      </Grid>
      <Grid item xs={12} container>
        <Grid item xs={12}>
          <h2>
            Born the 28th of June 2003 in Paris, France. My parents gave me the name Mathias since our plans were to stay in France and see me grow up there, so my name followed course with our integration. But then we came back in Albania since my parents wanted me to at the very least live a few years there so i can know and understand my roots.
            Since a young age i've been bathed in various activities involving tinkering, helping in repairing wardrobe hinges, measuring and checking up on small electronics, looking at people fixing their car engines when they couldn't start but also to more child like activities such as puzzles, LEGOs and a lot of tabletop games.
            Thanks to this active early life, i can be proud of my problem solving skills, my patience, and my unwillingess to give up upon difficult problems or skills to master. This personality later on made me join Harry T Fultz in Albania and take up an Electronics Degree. But also, i've got to thank my dad for one of my current passions.
            I remember when i was only 12 he first made me sit down infront of my computer, not to play the videogames i so loved, but to show me how they were created. The aged Fortran95 ide was shown to me, and he told me that with millions of these lines made up of seemingly random letters would made the games i played. From there i took up programming, and up to this day i'm still learning and experimenting with this great talent.
          </h2>
        </Grid>
      </Grid>
      <Grid item xs={12} container>
        <Grid item xs={4}>
          <h2>Passions and likes:</h2>
        </Grid>
      </Grid>
      <Grid item xs={12} container>
        <Grid item xs={12}>
          <h2>Engineering, video games, reading, programming of course!, tennis, football, basketball, problem solving, History.</h2>
          <h2>I have a deep love for the Indiana Jones trilogy, those moves have shaped me in ways i couldn't even describe, I listen to music a lot but my favorite genre's gotta be Jazz and it's subgenres, mostly Fussion Jazz.</h2>
          <h2>I said earlier i love tennis, football and basketball, well it's because i took up courses in all of them as a kid! My childhood was filled with sports to football which i only practiced for 1 year, basketball near 3 and tennis for 7 years even entering championships!</h2>
        </Grid>
      </Grid>
      <Grid item xs={12} container>
        <Grid item xs={4}>
          <h2>I hope you guys enjoy my About Page! I would have loved to add more details, make it warmer and prettier or even actually make seperate files for each part instead of dumping everything in the App.js, but gotta meet the deadline :p Thanks for reading!!</h2>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
