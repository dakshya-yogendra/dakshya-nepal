import React from "react"
import { Box, Collapsible, Grid, ResponsiveContext } from "grommet"
import Heading from "../../../components/heading"
import Button from "../../../components/button"

import products from "../../../content/products.json"
import HeaderCard from "./headerCard"

import chevUp from "../../../components/icons/chevron-up"
import chevDown from "../../../components/icons/chevron-down"

export default props => {
  const [open, setOpen] = React.useState(false)
  const Icon = open ? chevUp : chevDown
  const mobile = React.useContext(ResponsiveContext) === "small"
  let name = props.link.match("[^/]+$")
  name = name[0].replace("-", " ")

  return (
    <>
      <Box
        width="100%"
        direction="row"
        border={{ size: "1px", side: "top" }}
        pad={{ top: "12px" }}
      >
        <Box direction="row" alignSelf="center" onClick={() => setOpen(!open)}>
          <Heading
            code={4}
            size="small"
            style={{ textTransform: "capitalize" }}
          >
            {name}
          </Heading>
          <Icon color="b1" />
        </Box>
        <Box flex="grow">
          <Button alignSelf="end" primary label="Know More" />
        </Box>
      </Box>
      <Box width="100%">
        <Collapsible open={open} {...props}>
          <Grid
            columns={mobile ? "100%" : "31%"}
            gap="medium"
            pad={{ top: "24px" }}
          >
            {products.map((data, index) => (
              <HeaderCard product={data} key={index} />
            ))}
          </Grid>
        </Collapsible>
      </Box>
    </>
  )
}