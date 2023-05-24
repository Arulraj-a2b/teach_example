import Button from "../../uikit/Button/Button";
import Flex from "../../uikit/Flex/Flex";
import Text from "../../uikit/Text/Text";
import styles from "./profilecard.module.css";

const ProfileCard = () => {
  return (
    <Flex flex={1} className={styles.overAll}>
      <Flex row className={styles.profileCard}>
        <Flex>
          <Text bold size={36}>
            I’m Rayan Adlrdard
          </Text>
          <Text bold size={36}>
            <Text size={36} bold color={"theme"}>
              Front-end
            </Text>{" "}
            Developer
          </Text>
          <Text color={"gray"} className={styles.des}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </Text>
          <Button className={styles.hireBtn}>HIRE ME</Button>
        </Flex>
        <img
          className={styles.profile}
          alt="Profile"
          src={require("../../images/profile.png")}
        />
      </Flex>
    </Flex>
  );
};

export default ProfileCard;
