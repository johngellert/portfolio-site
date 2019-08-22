import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import paytracksScreenshot from '../assets/images/paytracks-screenshot.png'
import toDoListScreenshot from '../assets/images/to-do-list-screenshot.png'
import panaceaUserScreenshot from '../assets/images/panacea-user-screenshot.png'

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
  },
  media: {
    height: 250,
  },
})

export default function MediaCard() {
  const classes = useStyles()

  return (
    <Grid
      container
      spacing={6}
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
    >
      {/* Prime Group/Client Project */}
      <Grid item>
        <Card raised={true} className={classes.card}>
          <CardActionArea
            href="https://panacea1.herokuapp.com/#/"
            target="_blank"
          >
            <CardMedia
              className={classes.media}
              image={panaceaUserScreenshot}
              title="Panacea"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Panacea
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom="true"
              >
                Worked with three engineers to develop an application for
                Panacea. This application mitigates barriers to healthcare
                access for people traveling abroad. Users of this application
                can find healthcare providers, emergency numbers, and medication
                translations for selected cities.
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom="true"
              >
                Technologies used: JavaScript, React-Redux, Node.js, Express,
                PostgreSQL, Google Maps API, and Material-UI.
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom="true"
              >
                Try it for yourself by clicking on "Visit App"! There are two
                cities presently loaded. Search for Krakow or Madrid.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              className="button"
              href="https://panacea1.herokuapp.com/#/"
              target="_blank"
            >
              Visit App
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

      {/* Prime Solo Project */}
      <Grid item>
        <Card raised={true} className={classes.card}>
          <CardActionArea
            href="https://paytracks.herokuapp.com/#/home"
            target="_blank"
          >
            <CardMedia
              className={classes.media}
              image={paytracksScreenshot}
              title="PayTracks"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                PayTracks
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom="true"
              >
                Developed an application for household employers to track
                payroll information for employees. Household employers have
                similar payroll responsibilities as small businesses, but
                without the resources to complete these task efficiently, so I
                developed PayTracks. Users of this application can create a
                business entity, add employees, and record wages paid to
                employees. Upon recording gross wages, the application
                automatically calculates state, federal, and social security and
                medicare withholdings according to each employee’s withholding
                criteria and generates a net payment amount.
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom="true"
              >
                Technologies used: JavaScript, React-Redux, Node.js, Express,
                PostgreSQL, and Material-UI.
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom="true"
              >
                Try it for yourself by clicking on "Visit App"! You will need to
                register at the login page to get started.
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
              Visit App
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
          <CardActionArea
            href="https://gellert-weekend-sql-to-do-list.herokuapp.com/"
            target="_blank"
          >
            <CardMedia
              className={classes.media}
              image={toDoListScreenshot}
              title="To-Do List"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                To-Do List
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom="true"
              >
                Developed a to-do list application while learning jQuery and
                PostgreSQL databases. Users of this application can add a task
                and prioritize tasks based on the Eisenhower Matrix.
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom="true"
              >
                Technologies used: JavaScript, jQuery, CSS3, Node.js, Express,
                and PostgreSQL.
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom="true"
              >
                Try it for yourself by clicking on "Visit App"! Add a few items
                to the to-do list or delete some.
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
              Visit App
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
