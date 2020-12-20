import React from 'react'
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import useStyles from './styles'

const NewsCard = ({article: {description, publishedAt, source, title, url, urlToImage}, i}) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
           <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage || 'https://www.libe.ma/photo/art/grande/24898170-26471856.jpg?v=1535287842'} />
                <div className={classes.details}>
                     <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                     <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                    <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
               </CardActionArea> 
               <CardActions className={classes.cardActions}>
                   <Button size="small" color="primary">Learn More</Button>
                 <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
               </CardActions>
        </Card>
    )
}

export default NewsCard
