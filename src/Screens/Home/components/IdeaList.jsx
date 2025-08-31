import React from "react"
import IdeaItem from "./IdeaItem"

const IdeaList = ({ ideaList, refreshData }) => {
  return (
    <div>
      {ideaList.map((idea, index) => (
        <IdeaItem key={index} idea={idea} index={index} refreshData={refreshData} />
      ))}
    </div>
  )
}

export default IdeaList
