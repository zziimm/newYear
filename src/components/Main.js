import React, { useState } from 'react';
import { styled } from 'styled-components';

const MainArea = styled.div`
  background-color: #dbdbdb;
  margin: 0 auto;
  height: 100%;
  width: 30rem;

`;


function Main(props) {

  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const change = (e) => {
    setValue(e.target.value)
  };

  const handleInsert = (e) => {
    e.preventDefault();
    
    setData(prev => [value, ...prev])
    setValue('')
  };
  



  return (
    <MainArea>
        <label htmlFor='name'>이름쓰기</label>
        <input type='text' onChange={change} value={value} id='name'></input>
        <button type='button' onClick={handleInsert}>입력</button>

      {data?.map((data) => {
        return (
          <p>{data}</p>
        )
        }
      )}
    </MainArea>
  );
}

export default Main;