import SvgCoding from "../../icons/SvgCoding";
import Flex from "../../uikit/Flex/Flex";
import Text from "../../uikit/Text/Text";
import MyServiceCard from "./MyServiceCard";
import styles from "./myservices.module.css";

const MyServices = () => {
  return (
    <Flex>
      <Flex center>
        <Text size={32} bold>
          My Services
        </Text>
        <Text color="gray" align="center" className={styles.des}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </Text>
      </Flex>
      <Flex row>
        <MyServiceCard
          icon={<SvgCoding />}
          title={"web development"}
          description={"blog, e-commerce"}
        />
        <MyServiceCard
          isMargin
          icon={<SvgCoding />}
          title={"web development"}
          description={"blog, e-commerce"}
        />
        <MyServiceCard
          icon={<SvgCoding />}
          title={"web development"}
          description={"blog, e-commerce"}
        />
      </Flex>
      <Flex row className={styles.cardRowFlex}>
        <MyServiceCard
          icon={<SvgCoding />}
          title={"web development"}
          description={"blog, e-commerce"}
        />
        <MyServiceCard
          isMargin
          icon={<SvgCoding />}
          title={"web development"}
          description={"blog, e-commerce"}
        />
        <MyServiceCard
          icon={<SvgCoding />}
          title={"web development"}
          description={"blog, e-commerce"}
        />
      </Flex>
    </Flex>
  );
};

export default MyServices;
