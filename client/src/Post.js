import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Pagination from '@mui/material/Pagination';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Stack from '@mui/material/Stack';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const itemsPerPage = 16

function Post({posts}) {

  const [page, setPage] = useState(1);

  // Pagination
const startIndex = (page - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentData = posts.slice(startIndex, endIndex);

const handleChange = (event, value) => {
  setPage(value);

window.scrollTo({ top: 0, behavior: 'smooth' });
};

  return (
    <div>
      <Grid container spacing={1} >
        {currentData &&currentData.map(post=>(
          <Grid item key={post.id}>
              <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={post.image_url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
      
    </Card>
          </Grid>
        ))}
      </Grid>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {posts.length > 9 && (
          <Pagination
            color="primary"
            shape="rounded"
            count={Math.ceil(posts.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            size="large"
            sx={{marginBottom:"8px"}}
          />
        )}
      </Stack>
    </div>
  )
}

export default Post