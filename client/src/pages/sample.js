import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sampleAction } from '../redux/actions/templateActions';
import { Button } from '@chakra-ui/react';
import { Layout } from '../components';

function Sample() {
  const count = useSelector((state) => state.templateReducer.count);
  const dispatch = useDispatch();

  //componentDidMount if dependency list is empty
  useEffect(() => {
    //component did unmount used as a cleanup function
    // return () => {
    //     cleanup
    // }
  }, []);

  return (
    <Layout>
      <h1>Template function</h1>
      <br />
      <h1>{count}</h1>
      <Button onClick={() => dispatch(sampleAction(3))}>
        Click to increment/change global state
      </Button>
    </Layout>
  );
}

export default Sample;
