import ProfileForm from './ProfileForm';
import classes from '../../styles/styles/UserProfile.module.css';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <section className={classes.profile}>
      <h3>Your User Profile</h3>
      <h4>Logged in as: {user}</h4>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
