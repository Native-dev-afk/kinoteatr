import withAuth from '../../components/private-route/private-route';
import ApplicationSteps from '../../routes/profile';

const Profile = () => {
  return (
    <>
      <ApplicationSteps />
    </>
  );
};

export default withAuth(Profile);
