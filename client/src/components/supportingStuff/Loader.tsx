import { Spin } from "antd";
import { Container } from "../styles/Containet";
import { Flex } from "../styles/Flex.styled";

export default function Loader() {
  return (
    <Flex>
      <Spin />
    </Flex>
  );
}
