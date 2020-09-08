import React from "react"
import Card from "../components/card"

export default {
  title: "Design/Cards",
}

export const cardsWithPadding = () => {
  return (
    <>
      <Card>
        This is a card element. This has a default padding which is 16px.
      </Card>
      <p></p>
      <Card p24>This is a card element. This has a padding of 24px.</Card>
    </>
  )
}
