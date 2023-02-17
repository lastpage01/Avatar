
import './App.css';
import Avatar from './components/Avatar';

const src = 'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg'
function App() {
  return (
    <>
    <Avatar src={src} alt='image' size="6rem"/>
    <Avatar variant="rounded"/>
    </>
  );
}

export default App;
