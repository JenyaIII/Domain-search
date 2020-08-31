import React, { useState, useCallback, useEffect } from 'react';
import {
  CssBaseline,
  Paper,
  Container,
  Divider,
  Box,
} from '@material-ui/core/';
import Axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
import { useStyles } from './styles';
import SearchBar from '../Components/SearchBar/SearchBar';
import DomainCard from '../Components/DomainCard/DomainCard';
import Loader from '../Components/Loader/Loader';
import ErrorMessage from '../Components/ErrorMessage/ErrorMessage';

const MainPage = () => {
  const classes = useStyles();
  const itemsPerPage = 6;
  const [inputData, setInputData] = useState('');
  const [domainData, setDomainData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = React.useState(1);
  const [numOfPages, setNumOfPages] = React.useState(null);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const clearList = () => {
    setDomainData('');
    setInputData('');
    setNumOfPages(null);
  };

  const fetchData = useCallback(
    async () => {
      try {
        setNumOfPages(null);
        setDomainData('');
        const proxyurl = 'https://cors-anywhere.herokuapp.com/';
        const { data } = await Axios.get(`${proxyurl}https://api.domainsdb.info/v1/domains/search?domain=${inputData}`);
        setDomainData(data);
        setLoading(false);
      } catch (e) {
        setError({
          message: e.message,
        });
        setLoading(false);
        console.log('Error', e);
      }
    },
    [inputData],
  );

  useEffect(() => {
    if (domainData) {
      setNumOfPages(Math.ceil(domainData.domains.length / itemsPerPage));
    }
  }, [domainData]);

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <CssBaseline />
        <Paper elevation={5} style={{ width: '100%' }}>
          <SearchBar
            setInputData={setInputData}
            setLoading={setLoading}
            search={fetchData}
            inputData={inputData}
            clearList={clearList}
          />
          { (domainData && !loading) && (
            domainData.domains
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((item) => <DomainCard data={item} />)
          )}
          <Loader loading={loading} />
          { !loading && (<ErrorMessage domainData={domainData} error={error} />)}
          <Divider />
          <Box component="span">
            <Pagination
              count={numOfPages}
              page={page}
              onChange={handleChangePage}
              defaultPage={1}
              color="primary"
              size="large"
              showFirstButton
              showLastButton
              classes={{ ul: classes.paginator }}
            />
          </Box>
        </Paper>
      </div>
    </Container>
  );
};

export default MainPage;
