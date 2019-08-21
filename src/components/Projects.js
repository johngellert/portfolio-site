import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';

import paytracksScreenshot from '../assets/images/paytracks-screenshot.png'
import toDoListScreenshot from '../assets/images/to-do-list-screenshot.png'

import johnGellertResume from '../assets/files/john-gellert-resume.pdf'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
})

export default function MediaCard() {
  const classes = useStyles()

  return (
    <Grid container spacing={6} direction="row" justify="flex-start" alignItems="flex-start">
      {/* Prime Solo Project */}
      <Grid item>
      <Card raised={true} className={classes.card}>
        <CardActionArea href="https://paytracks.herokuapp.com/#/home" target="_blank">
          <CardMedia
            className={classes.media}
            image={paytracksScreenshot}
            title="PayTracks"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              PayTracks
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Developed an application for household employers to track payroll
              information for employees. Household employers have similar
              payroll responsibilities as small businesses, but without the
              resources to complete these task efficiently, so I developed
              PayTracks. Users of this application can create a business entity,
              add employees, and record wages paid to employees. Upon recording
              gross wages, the application automatically calculates state,
              federal, and social security and medicare withholdings according
              to each employee’s withholding criteria and generates a net
              payment amount. Technologies used: JavaScript, React-Redux,
              Node.js, Express, PostgreSQL, and Material-UI.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            className="button"
            href="https://paytracks.herokuapp.com/#/home"
            target="_blank"
          >
            Visit Site
          </Button>
          <Button
            size="small"
            className="button"
            href="https://github.com/johngellert/prime-solo-paytracks"
            target="_blank"
          >
            Github
          </Button>
        </CardActions>
      </Card>
      </Grid>

      <Grid item>
      {/* To-Do List */}
      <Card raised={true} className={classes.card}>
        <CardActionArea href="https://gellert-weekend-sql-to-do-list.herokuapp.com/" target="_blank">
          <CardMedia
            className={classes.media}
            image={toDoListScreenshot}
            title="To-Do List"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              To-Do List
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Developed a to-do list application using JavaScript, jQuery, CSS3
              Node.js, Express, and PostgreSQL. Users can add a task and prioritize
              the task based on the Eisenhower Matrix.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            className="button"
            href="https://gellert-weekend-sql-to-do-list.herokuapp.com/"
            target="_blank"
          >
            Visit Site
          </Button>
          <Button
            size="small"
            className="button"
            href="https://gellert-weekend-sql-to-do-list.herokuapp.com/"
            target="_blank"
          >
            Github
          </Button>
        </CardActions>
      </Card>
      </Grid>
    </Grid>
  )
}
