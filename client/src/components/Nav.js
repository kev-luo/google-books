import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

export default function Nav() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <nav>
        <ul className={classes.navList}>
          <li><Link to="/" >Google Books</Link></li>
          <li><Link to="/" >Search</Link></li>
          <li><Link to="/saved" >Saved</Link></li>
        </ul>
      </nav>
      <a href="#"><button className={classes.rightButton} >Hello</button></a>
    </div>
  )
}

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