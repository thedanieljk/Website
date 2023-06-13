import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'

function ExperienceCard({id, company, jobtitle, startYear, endYear, description, skills}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();


    return (
        <Fade bottom>
            <div key={id} className={`experience-card ${classes.experienceCard}`}>
                <div className='expcard-img-container'>
                    <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                        <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                    </div>
                </div>
                
                <div className='expcard-details-container'>
                    <div className="experience-details">
                        <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                        <h4 style={{color: theme.tertiary}}>{jobtitle}</h4>
                        <h5 style={{color: theme.tertiary}}>{company}</h5>
                        <h6 style={{color: theme.tertiary80}}>{description}</h6>
                        <h6 style={{color: theme.tertiary80}}>{skills}</h6>

                    </div>
                </div>

            </div>
        </Fade>   
    )
}

export default ExperienceCard
