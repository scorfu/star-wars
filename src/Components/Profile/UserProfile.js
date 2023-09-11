import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector(state => state.auth.user);

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <h3>Logged in as: {user}</h3>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
