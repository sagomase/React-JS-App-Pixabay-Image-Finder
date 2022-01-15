import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './component/NavBar';
import BreadCrumb from './component/BreadCrumb';
import { Box } from '@material-ui/core';
import { getImages } from './services/api'
import Images from './component/Images';
import SnackBar from './component/SnackBar';


function App() {

  const [ data, setData] = useState([]);
  const [ count, setCount ] = useState(12);
  const [ text, setText ] = useState('mountains');
  const [ open, toggleSnack] = useState(false);

  useEffect(() => {

    if(count < 3 || count > 200){
      toggleSnack(true);
      return;
    }
    toggleSnack(false);


    getImages(text,count).then(response => {
      setData(response.data.hits)
      console.log(response.data.hits);
      
    })
  },[text,count])
  
  const onTextChange = (text) =>{
    setText(text)
  }

  const onCountChange = (count) =>{
    setCount(count)
  }


  return (
    <Box>
     
      <NavBar />
      <BreadCrumb onTextChange={onTextChange} onCountChange={onCountChange}/>
      <Images data={data}/>
      <SnackBar open={open} toggleSnack={toggleSnack}/>
    </Box>
  );
}

export default App;
