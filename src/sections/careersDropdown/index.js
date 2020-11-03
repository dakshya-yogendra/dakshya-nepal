import React from "react"
import { Box, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import Dropdown from "./dropdown"

export default ({ data }) => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  console.log(data)
  return (
    <Box
      pad={
        mobile
          ? { top: "90px", horizontal: "16px" }
          : { top: "58px", horizontal: "131px" }
      }
    >
      <Heading code={2}>open Careers @ dakshya nepal</Heading>
      <Box pad={{ top: "40px" }} gap="medium">
        {data.map((data, index) => (
          <Dropdown info={data} key={index} active={index === 1} />
        ))}
      </Box>
    </Box>
  )
}