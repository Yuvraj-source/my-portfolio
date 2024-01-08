import React from 'react';
import { Grid, Paper, Box, Typography, Card, CardContent } from '@mui/material';

function Portfolio() {
  const experiences = [
    {
      duration: 'April 2021 - November 2022',
      company: 'Lupin Limited Injectable Facility (Unit 2) SEZ, Mihan Nagpur',
      designation : 'Officer',
      responsibilities: [
        '● Conducted sterility testing in isolator environments for finished products, stability samples, packaging materials, nitrogen gas, and compressed air.',
        '● Performed Liquid Borne Particle Count (LBPC) for stability and finished products.',
        '●Utilized Labware LIMS 7 software for environmental monitoring.',
        '●Carried out Bacterial Endotoxin Tests (BET) using the gel clot method on WFI, finished products, raw materials, in-process samples, and packaging materials.',
        '● Validated BET methods for raw materials, finished products, and in-process samples.',
        '● Conducted Bacterial Endotoxin Tests (BET) using Kinetic Turbidimetric Method (KTA) on finished products, in-process, and raw materials.',
      ],
    },
    {
      duration: 'February 2020 - April 2021',
      company: 'Indoco Remedies Ltd (Plant 2) Sterile Formulation Plant, Verna, Goa',
      designation:'Officer',
      responsibilities: [ '● Conducted sterility testing for finished products, stability samples, in-process samples (bulk), raw materials, and packaging materials.',
      '● Performed Microbial Limit Tests (MLT)',
      '● Executed Sterility Method Validation.',
      '● Conducted Bacterial Endotoxin Tests (BET) using the gel clot method for Water for Injections (WFI) finished products, raw materials, in-process sampling, and packaging materials.',
      '● Validated methods for Microbial Limit Tests.',
   '   ● Validated methods for Bioburden Tests.',
      '● Completed Container Closure Integrity Tests (CCIT).',
      '● Monitored the environment in the Microbiology Lab.',
      '● Conducted sampling of primary packaging materials.' ],
    },

    {
        duration: 'May 2018 - December 2019',
        company: 'Eurolife Healthcare Pvt. Ltd. (Baxter India) Waluj, Aurangabad',
        designation : 'Officer' ,
        responsibilities: [
            'Conducted environmental monitoring in classified areas.',
            '● Carried out water sampling and testing, including purified water, potable water, and water for injection (WFI).',
           ' ● Performed Bacterial Endotoxin Tests (BET) using the gel clot method for Water for Injections (WFI),finished products, raw materials, and in-process sampling.',
           ' ● Conducted Bioburden testing for in-process samples.',
            '● Executed Microbial Limit Tests (MLT) on raw materials.',
           ' ● Monitored the compressed air.'
        ],
      },
  ];

  const achievements = [
    {
      title: 'USFDA Audit',
      description: 'At Lupin Limited, I have successfully demonstrated Bacterial Endotoxin Test and Sterility Testing to USFDA auditor Cynthia Jim.',
    },
   
  ];

  const projects = [
    {
      title: ' Potential of Marine Fungi for Different Enzymes',
      description: 'The project work includes exploring the ability of the marine fungi to produce 8 different enzymes which have industrial applications and studying how these enzymes differ from their industrial counterparts.',
    },
   
  ];

  const cardStyle = {
    background: 'black',
    color: 'white',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
  };

  return (
    <Grid container spacing={3} style={{ background: 'black' }}>
      {/* Left Column */}
      <Grid item xs={12} sm={6}>
      <Paper style={{ position: 'sticky', top: '1', marginTop: '100px', marginLeft: '20px' , padding:'10px', background:'black', color:'white' , fontFamily: 'Helvetica Neue' , fontSize:'18px'}}> 
          {/* Title */}
          <Typography variant="h4" paragraph  fontFamily={"Helvetica Neue"}>
            Exploring and Enhancing Life at the Microscopic Level
          </Typography>
          {/* Short Intro */}
          <p >
            With a robust background spanning 5 years in the pharmaceutical sector, my journey as a microbiologist
            has been defined by an unwavering commitment to ensuring the quality and safety of pharmaceutical products.
          </p>
        </Paper>
      </Grid>

      {/* Right Column */}
      <Grid item xs={12} sm={6}>
      <div style={{ overflowY: 'scroll', height: '80vh', marginTop: '10px', background: 'black' , fontFamily:'Helvetica Neue' , fontSize:'18px' }}>
          <Paper style={{ background: 'black', color: 'white', boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>

            
            {/* Experience Cards */}
            {experiences.map((experience, index) => (
              <Box key={index} bgcolor="background.black" style={cardStyle} borderRadius={4} m={2} p={2}>
              <p>{experience.duration}</p>
               <p>{experience.company}</p>
                <p>{experience.designation}</p>
               
                <p>{experience.responsibilities}</p>
              </Box>
            ))}
          </Paper>

          {/* Achievement Cards */}
          <Paper style={{ background: 'black'  }}>
            {achievements.map((achievement, index) => (
              <Card key={index} style={{ ...cardStyle, margin: '16px', borderRadius:'10px', fontFamily:'Helvetica Neue' , fontSize:'18px' }}>
                <CardContent boxShadow={2}>
                  <Typography variant="h5" fontFamily={'Helvetica Neue'}>{achievement.title}</Typography>
                  <p>{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </Paper>

          {/* Project Cards */}
          <Paper style={{ background: 'black', color: 'white' }}>
            {projects.map((project, index) => (
              <Card key={index} style={{ ...cardStyle, margin: '16px',  borderRadius:'10px' }}>
             
                <CardContent>
                  <Typography variant="h5" fontFamily={'Helvetica Neue'}>{project.title}</Typography>
                  <p>{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}

export default Portfolio;





