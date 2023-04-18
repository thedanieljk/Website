import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Landing, Skills, Education, Experience, Contacts, Projects, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name}'s' - Portfolio</title>
            </Helmet>

            {/* <Navbar />         */}
            <Landing />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Achievement />
            {/* <Contacts /> */}
        </div>
    )
}

export default Main
