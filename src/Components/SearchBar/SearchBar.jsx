import React from 'react';
import {
  AppBar, Toolbar, Button, Typography, InputBase, IconButton,
} from '@material-ui/core/';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

const SearchBar = ({
  setInputData, search, setLoading, inputData, clearList,
}) => {
  const classes = useStyles();

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInputData(inputValue.replace(/^[ \s]+|[ \s]+$/g, ''));
  };

  const startSearch = () => {
    if (inputData) {
      setLoading(true);
      search();
    }
  };

  const searchFromEnter = (e) => {
    if (e.keyCode === 13) {
      startSearch();
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Domain Search
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Enter domain name ... "
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
              onKeyDown={searchFromEnter}
              value={inputData}
            />
          </div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.searchButton}
            onClick={startSearch}
          >
            Search
          </Button>
          <IconButton aria-label="delete" className={classes.colorPrimary} onClick={clearList}>
            <ClearAllIcon className={classes.colorPrimary} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SearchBar;

SearchBar.defaultProps = {
  search: () => {},
  setInputData: () => {},
  setLoading: () => {},
  clearList: () => {},
  inputData: '',
};

SearchBar.propTypes = {
  search: PropTypes.func,
  clearList: PropTypes.func,
  setInputData: PropTypes.func,
  setLoading: PropTypes.func,
  inputData: PropTypes.string,
};
