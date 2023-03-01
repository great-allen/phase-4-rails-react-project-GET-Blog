import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PostDetails from "./PostDetails";
import ModeTwoToneIcon from '@mui/icons-material/ModeTwoTone';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRounded from '@material-ui/icons/FavoriteBorderRounded';
import Share from '@material-ui/icons/Share';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import { useHistory } from "react-router";



const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: 304,
    height:410,
    margin: 'auto',
  },
  content: {
    padding: 20,

  },
  avatar: {
    width: 50,
    height: 50,
    border: '2px solid #fff',
    margin: '-15px 32px 0 auto',
    '& > img': {
      margin: 0,
    },
  },
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
    marginTop:"2%",
    
  },
//   avatar: {
//     width: 60,
//     height: 60,
//     margin: 'auto',
//   },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: '0.875em',
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
  },
}));
  

const itemsPerPage = 16

function MyPosts({user,posts,setPosts,addToEdit,deletePost}) {
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const [errors,setErrors]=useState([])
    const styles = useStyles();
    const borderedGridStyles = useGutterBorderedGridStyles({
        borderColor: 'rgba(0, 0, 0, 0.08)',
        height: '50%',
      });
      const shadowNewStyles = useFadedShadowStyles();
    const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
    const userPosts=posts&&posts.filter((post)=>{
        return post.user.username===user.username
    })
    
    const [reviews,setReviews]=useState([])
  const [page, setPage] = useState(1);
  const [showPost,setShowPost]=useState(false)
  const [postDetail,setPostDetail]=useState([])
  
  
  // Pagination
const startIndex = (page - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentData = userPosts.slice(startIndex, endIndex);
const handleChange = (event, value) => {
  setPage(value);

window.scrollTo({ top: 0, behavior: 'smooth' });
};

const onEdit=(post)=>{
    addToEdit(post)
    
}
  
const handleClick=(post)=>{
  setPostDetail(post)
  setShowPost(true)
  fetch(`/posts/${post.id}`).then(r=>r.json()).then(setReviews)
  
}

  const onAddReview=(review)=>{
    setReviews([review,...reviews])
  }

  const onDelete=(post)=>{
    if (window.confirm("Are you sure you want to delete this item?")){
        setIsLoading(true);
    fetch(`/posts/${post.id}`,{
        method:"DELETE"}).then((r) => {
      
      
            if (r.ok) {
                
              r.json().then((data) => {
                setIsLoading(false);
                deletePost(data)
                
              })
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          })
  }
}

  return (
    <>
    {showPost?<PostDetails postDetail={postDetail} user={user} reviews={reviews} onAddReview={onAddReview}/>:
    <div>
        <Card className={cx(styles.card, shadowNewStyles.root)}>
      <CardContent>
        <Avatar className={styles.avatar} src={user.image_url} />
        <h3 className={styles.heading}>{user.username}</h3>
        <span className={styles.subheader}>Poland</span>
      </CardContent>
      <Divider light />
      <Box display={'flex'}>
        <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>Followers</p>
          <p className={styles.statValue}>6941</p>
        </Box>
        <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
          <p className={styles.statLabel}>Following</p>
          <p className={styles.statValue}>12</p>
        </Box>
      </Box>
    </Card>
      <Grid container spacing={3} style={{marginLeft:"4%",marginTop:"5px"}}>
        {currentData &&currentData.map(post=>(
          <Grid item key={post.id}>
           <Card className={cx(cardStyles.root, shadowStyles.root)} onClick={()=>handleClick(post)}>
      <CardMedia
        classes={mediaStyles}
        image={
          post.image_url
        }
      />
      {/* <Avatar className={cardStyles.avatar} src={post.user.image_url} /> */}
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={post.title}
          body={
            post.content
          }
        />
      </CardContent>
      
      <Box px={2} pb={2} mt={-2} >
        <IconButton>
          <Share />
        </IconButton>
        <IconButton>
          <FavoriteBorderRounded />
        </IconButton>
        <Link to={{ pathname: "/New", state: { post } }} onClick={(event) => {
    event.stopPropagation();
    onEdit(post);
}}>
  <ModeTwoToneIcon />
</Link>
<IconButton aria-label="delete" onClick={(e)=>{
    e.stopPropagation()
    onDelete(post)
}}>
           {isLoading ? "Loading..." : <DeleteForeverTwoToneIcon />} 
        </IconButton>
      </Box>
      
    </Card>
            
          </Grid>
        ))}
      </Grid>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {userPosts.length > 9 && (
          <Pagination
            color="primary"
            shape="rounded"
            count={Math.ceil(userPosts.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
            size="large"
            sx={{marginBottom:"8px"}}
          />
        )}
      </Stack>
    </div>}
    </>
  )
}

export default MyPosts