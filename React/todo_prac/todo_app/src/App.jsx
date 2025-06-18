
import './App.css';

function App() {
  return (
    <div>
      <PostComponent />
    </div>
  );
}

const style = {width : 200 , backgroundColor : "white" , borderRadius : 10 , borderColor : "gray" ,
  borderWidth : 1 , display : flex 
}

function PostComponent(){
  return <div style= {{style}}>
    <img src={"https://pbs.twimg.com/profile_images/1669021138087706624/FGGcfuaf_400x400.jpg"} style = {{
      width : 20 ,
      height : 20,
      borderRadius : 20
    }}></img>
    <div>
      <b>100xDevs</b>
      <div>23,888 Followers</div>
      <div>12m</div>
    </div>
  </div>
}


export default App;


