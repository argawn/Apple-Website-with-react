import React from 'react'
import AlertSection from './AlertSection'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'


import Youtube from '../Youtube/Youtube'
// import News from '../News/News'
function Main() {
    return (
        <div>
          < AlertSection/>
          <Section1/>
          <Section2/>
          <Section3/>
          <Section4/>
          <Section5/>
          <Section6/>
          <Youtube/>
          {/* <News/> */}
        </div>
    )
}

export default Main
