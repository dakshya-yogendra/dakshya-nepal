import React from "react"
import { Box, Image } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"

export default ({ title, description, image, mobile, index }) => {
  return (
    <Box
      direction={mobile ? "column" : index % 2 === 0 ? "row" : "row-reverse"}
      gap="medium"
    >
      <Box width={mobile ? "100%" : "40%"} background="p1-l">
        <Image fill="vertical" src={image} />
      </Box>
      <Box width={mobile ? "100%" : "60%"} justify="center">
        <Heading
          textAlign={mobile ? "start" : index % 2 === 0 ? "start" : "end"}
          code={3}
        >
          {title}
        </Heading>
        <Text
          textAlign={mobile ? "start" : index % 2 === 0 ? "start" : "end"}
          code="subtext-r"
          size="small"
          color="b2"
        >
          {description}
        </Text>
      </Box>
    </Box>
  )
}
