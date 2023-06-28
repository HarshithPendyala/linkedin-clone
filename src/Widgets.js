import React from 'react';
import "./Widgets.css"
import { FiberManualRecord, Info } from '@mui/icons-material';


function Widgets() {
    const newsArticle = (heading,subtitle) => (

        <div className="widgets_article">
            <div className="widgets_articleleft">
                <FiberManualRecord fontSize="small"/>
            </div>
            <div className="widgets_articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <Info/>
        </div>
        {newsArticle("RUMBLING HAS BEGUN!","Eren Yeager - 9999")}
        {newsArticle("Covid Updates!","Vaccine to be soon rolled out")}
    </div>
  )
}

export default Widgets