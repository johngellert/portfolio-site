import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import paytracksScreenshot from '../assets/images/paytracks-screenshot.png';

import johnGellertResume from '../assets/files/john-gellert-resume.pdf';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

export default function MediaCard() {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
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
            information for employees. Household employers have similar payroll
            responsibilities as small businesses, but without the resources to
            complete these task efficiently, so I developed PayTracks. Users of
            this application can create a business entity, add employees, and
            record wages paid to employees. Upon recording gross wages, the
            application automatically calculates state, federal, and social
            security and medicare withholdings according to each employee’s
            withholding criteria and generates a net payment amount.
            Technologies used: JavaScript, React-Redux, Node.js, Express,
            PostgreSQL, and Material-UI.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" className="button" href="https://paytracks.herokuapp.com/#/home" target="_blank">
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
  )
}