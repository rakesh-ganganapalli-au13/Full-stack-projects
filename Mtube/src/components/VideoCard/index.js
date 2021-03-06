import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './VideoCardStyle';
import PATHS from '../../config/webPath';

export default function VideoCard(props) {

  const {
    video: {
      id: { videoId },
      snippet: { title, description, thumbnails: { medium } }
    },
    showError
  } = props;

  const classes = useStyles();

  const history = useHistory();

  const auth = useSelector(state => state.auth);

  const showDetails = () => {
    const detailPath = PATHS.VIDEO_DETAILS.replace(':id',videoId);
    if(!auth) showError();
    else history.push(detailPath);
  };

  return (
    <Grid item xs={12} sm={6} md={4} id={videoId}>
      <Card onClick={showDetails} className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={medium.url}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
