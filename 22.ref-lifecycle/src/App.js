import ColorChanger from './components/ColorChanger';

import './App.css';
import RandomMathQuiz from './components/RandomMathQuiz';
import LifeCycleFunc from './components/LifeCycleFunc';
import LifeCycleClass from './components/LifeCycleClass';

import FakePost from './components/FakePost';
import PostList from './components/PostList';
import Container from './components/Container';
function App() {
  return (
    <div className='App' >
 
   {/* <ColorChanger/>    
    <RandomMathQuiz/>
    <LifeCycleClass/>    
   <LifeCycleFunc/> 
   <FakePost/> */}
   <Container>
   <PostList/>
   </Container>
    </div>
    );
}

export default App;
