import Button from "../../uikit/Button/Button";
import Flex from "../../uikit/Flex/Flex";
import Text from "../../uikit/Text/Text";
import ProfileCard from "./ProfileCard";
import styles from "./homescreen.module.css";

const HomeScreen = () => {
  return (
    <Flex>
      <ProfileCard />
    </Flex>
  );
};

export default HomeScreen;
