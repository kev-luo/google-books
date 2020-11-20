import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 10px',
    background: '#24252A',
  },
  navList: {
    listStyle: 'none',
    '& > li': {
      display: 'inline-block',
      padding: '0 20px',
      '& > a': {
        transition: 'all 0.3s ease 0s',
        '&:hover': {
          color: '#0088a9'
        }
      }
    }
  },
  rightButton: {
    padding: '9px 25px',
    backgroundColor: 'rgba(0,136,169,1)',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease 0s',
    '&:hover': {
      backgroundColor: 'rgba(0,136,169,0.8)'
    }
  }
}))

export default function Nav() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <nav>
        <ul className={classes.navList}>
          <li><a href="#" >Google Books</a></li>
          <li><a href="#" >Search</a></li>
          <li><a href="#" >Saved</a></li>
        </ul>
      </nav>
      <a href="#"><button className={classes.rightButton} >Hello</button></a>
    </div>
  )
}
