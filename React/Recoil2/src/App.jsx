import {useRecoilValue , RecoilRoot , useRecoilState } from 'recoil'

import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from './store/atoms'
import { totalNotificationSelector } from './store/selectors';

function App() {
  return (
  <>
  <RecoilRoot>
    <MainApp />
  </RecoilRoot>
  </>
  )
}

function MainApp(){
  const networkNotificationsCount = useRecoilValue(networkAtom);
  const finalValue = networkNotificationsCount >= 100 ? "99+ " : networkNotificationsCount;
  const jobsValue = useRecoilValue(jobsAtom);
  const [ messageValue ,setMessageValue ] = useRecoilState(messagingAtom);
  const NotificationsCount = useRecoilValue(notificationsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
    <button>Home</button>
    <button>My network ({finalValue}) </button>
    <button>Jobs ({jobsValue}) </button>
    <button>Messaging ({messageValue}) </button>
    <button>Notifications ({NotificationsCount}) </button>
    <button onClick={() => {
      setMessageValue(c => c +1 );
    }}>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
