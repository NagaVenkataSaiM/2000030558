import {useState} from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
     
    flexGrow: 1,
      
    },
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  active: {
    backgroundColor: "red"
  },
}));
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
const App = () => {
  const [spacing, setSpacing] = React.useState(2);
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [isone, setIsone] = useState(false);
  const [istwo, setIstwo] = useState(false);
  const [isthree, setIsthree] = useState(false);
  const [isfour, setIsfour] = useState(false);
  const [isfive, setIsfive] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/gettrainsleeperbyprice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
      setIsone(true);
      setIstwo(false);
      setIsthree(false);
      setIsfour(false);
      setIsfive(false);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick2 = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/gettrainacbyprice', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
      setIsone(false);
      setIstwo(true);
      setIsthree(false);
      setIsfour(false);
      setIsfive(false);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick3 = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/gettrainsleeperbyseats', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
      setIsone(false);
      setIstwo(false);
      setIsthree(true);
      setIsfour(false);
      setIsfive(false);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick4 = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/gettrainacbyseats', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
      setIsone(false);
      setIstwo(false);
      setIsthree(false);
      setIsfour(true);
      setIsfive(false);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick5 = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/gettrainbydepart', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
      setIsone(false);
      setIstwo(false);
      setIsthree(false);
      setIsfour(false);
      setIsfive(true);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);
  const classes = useStyles();
  return (
    <div>
      {err && <h2>{err}</h2>}

      
      <div className={classes.root}>
      <Button variant="contained" onClick={handleClick}>Get Trains By sleeping class Price</Button>
      <Button variant="contained" onClick={handleClick2} color="primary">
      Get Trains By AC class Price
      </Button>
      <Button variant="contained" onClick={handleClick3} color="secondary">
      Get Trains By sleeping class Seats Available
      </Button>
      <Button variant="contained" onClick={handleClick4}>
      Get Trains By AC class Seats Available
      </Button>
      <Button variant="contained" onClick={handleClick5} color="primary" href="#contained-buttons">
      Get Trains By Depart time
      </Button>
    </div>

      {isLoading && <h2>Loading...</h2>}

      <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={spacing}>
      {(isone || istwo || isthree || isfour || isfive) && data.map((train, index) => {
        return (
          
          
            <Grid key={index} item>
          <List component="nav" aria-label="main mailbox folders" >
            <ListItem button selected={true} classes={{ selected: classes.active }}>
              
              <ListItemText primary={train.trainName} />Train Name
            </ListItem>
            <ListItem button selected={true} classes={{ selected: classes.active }}>
             
              <ListItemText primary={train.trainNumber} />Train No
            </ListItem>
          
            <ListItem button selected={true} classes={{ selected: classes.active }}>
              <ListItemText primary={train.price["sleeper"]} />Sleeper Price
            </ListItem>
            <ListItem button selected={true} classes={{ selected: classes.active }}>
              <ListItemText primary={train.price["AC"]} />AC Price
            </ListItem>
            <ListItem button selected={true} classes={{ selected: classes.active }}>
              <ListItemText primary={train.seatsAvailable["sleeper"]} />SeatsAvailable(Sleeper)
            </ListItem>
            <ListItem button selected={true} classes={{ selected: classes.active }}>
              <ListItemText primary={train.seatsAvailable["AC"]} />SeatsAvailable(AC)
            </ListItem>
            <ListItem button selected={true} classes={{ selected: classes.active }}>
              <ListItemText primary={train.departureTime["Hours"]+":"+train.departureTime["Minutes"]+":"+train.departureTime["Seconds"]} />Departure time
            </ListItem>
            <ListItem button selected={true} classes={{ selected: classes.active }}>
              <ListItemText primary={train.delayedBy} />DelayedBy(Minutes)
            </ListItem>
            <ListItemLink href={"http://localhost:8000/gettraininfo/"+train.trainNumber}>
              <ListItemText primary="View train Details" />
            </ListItemLink>
          </List>
          <Divider />
          </Grid>
        
        );
      })}
      </Grid>
        </Grid>
        </Grid>
    </div>
  );
};

export default App;
