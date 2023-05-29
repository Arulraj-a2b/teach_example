import Card from "../../uikit/Card/Card";
import Flex from "../../uikit/Flex/Flex";
import Text from "../../uikit/Text/Text";
import styles from "./myservices.module.css";

const MyServiceCard = ({ icon, title, description, isMargin }) => {
  return (
    <Card className={isMargin ? styles.cardOverAll : ""}>
      <Flex center>
        {icon}
        <Text className={styles.cardTitle} size={18} bold>
          {title}
        </Text>
        <Text size={15} color="gray">
          {description}
        </Text>
      </Flex>
    </Card>
  );
};

export default MyServiceCard;
