import Flex from "../../uikit/Flex/Flex";
import MyServices from "./MyServices";
import ProfileCard from "./ProfileCard";
import styles from "./homescreen.module.css";

const HomeScreen = () => {
  return (
    <Flex className={styles.overAll}>
      <ProfileCard />
      <MyServices />
    </Flex>
  );
};

export default HomeScreen;
