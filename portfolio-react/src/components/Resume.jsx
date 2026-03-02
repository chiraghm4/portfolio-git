import React from 'react'
import { Document, Page } from 'react-pdf'
import resume from '../assets/resume/Chirag_Maski_Resume.pdf'

function Resume() {
  return (
    <div id='resume'>
        <Document file={resume}> 
            <Page />
        </Document>
    </div>
  )
}

export default Resume