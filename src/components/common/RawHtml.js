import React from 'react'

const RawHtml = ({htmlData}) => {
  return (
    <div>
        <div dangerouslySetInnerHTML={{ __html: htmlData.replace(/\n/g, '') }} />
    </div>
  )
}

export default RawHtml