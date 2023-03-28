import styles from "../styles/setting.module.css";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks";
import { useEffect, useState } from "react";
import { fetchUserProfile } from "../api";
import Loader from "../component/Loader";

const UserProfile = () => {
  const [user,setUser] = useState({});
  const [loading,setLoading] = useState(true);
  const userId = useParams();
  const addToast = useToasts();
  const history = useNavigate();
  console.log("userId",userId);
  useEffect(() => {
    const getUser = async () => {
      const response = await fetchUserProfile(userId);

      if (response.success) {
        setUser(response.data.user);
      } else {
        // addToast(response.message, {
        //   appearance: 'error',
        // });
        console.log(response.message);
        return history('/');
      }

      // setLoading(false);
    };

    getUser();
    setLoading(false);
  }, [userId, history, addToast]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className={styles.settings}>
      <div className={styles.imgContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt=""
        />
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Email</div>
        <div className={styles.fieldValue}>{user?.email}</div>
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        <div className={styles.fieldValue}>{user?.name}</div>
      </div>

      <div className={styles.btnGrp}>
        <button className={`button ${styles.saveBtn}`}>Add Friend</button>
        <button className={`button ${styles.saveBtn}`}>Remove Friend</button>
        </div>
      </div>
    );
  };
export default UserProfile;