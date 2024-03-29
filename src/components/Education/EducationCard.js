import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear, college, degreeType}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`} >
                <div className="education-image-container">
                    <div className="educard-img" style={{backgroundColor: theme.primary}}>
                        <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                    </div>
                </div>
                <div className="education-details-container">
                    <div className="education-details">
                        <h6 style={{color: theme.tertiary80}}>{startYear}-{endYear}</h6>
                        <h2 style={{color: theme.tertiary}}>{degreeType}</h2>
                        <h1 style={{color: theme.tertiary}}>{course}</h1>
                        <h5 style={{color: theme.tertiary80}}>{institution}</h5>
                        <h6 style={{color: theme.tertiary80}}>{college}</h6>
                    </div>
                </div>

            </div>
        </Fade>        
    )
}

export default EducationCard
