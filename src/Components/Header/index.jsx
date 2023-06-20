import './styles.css'
import logo from '../../assets/Group 14.png'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import SignIn from '../SignIn'
export default function Header() {
  return (
    <div className='Header'>
      <div className='section-one'>
        <img src={logo} alt='' />
        <HiOutlineMenuAlt4 className='icon'/>
      </div>
      <SignIn />
      <button className='login'>LOG IN</button>
    </div>
  )
}