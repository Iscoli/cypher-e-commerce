import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Data structure for accordion panels
  const accordionData = [
    {
      id: 'panel1',
      title: 'How does Kachabaza works?',
      content: 'Holisticly engage sticky niche markets before collaborative collaboration and idea-sharing. Phosfluorescently facilitate parallel applications with unique imperatives. Proactively plagiarize functionalized deliverables via inexpensive solutions. Collaboratively embrace web-enabled infomediaries rather than diverse testing procedures.',
    },
    {
      id: 'panel2',
      title: 'Can i Cancel my Sub?',
      content: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
    },
    {
      id: 'panel3',
      title: 'Which payment do we accept?',
      content: 'Continually impact seamless imperatives for best-of-breed best practices. Phosfluorescently facilitate parallel applications with unique imperatives. Proactively plagiarize functionalized deliverables via inexpensive solutions. Collaboratively embrace web-enabled infomediaries rather than diverse testing procedures.',
    },
    {
      id: 'panel4',
      title: 'what are the benefit of using Kachabaza?',
      content: 'Distinctively initiate error-free channels with highly efficient ROI. Intrinsicly envisioneer world-class data via best-of-breed best practices. Efficiently enable empowered e-tailers after cross-unit services. Uniquely expedite seamless e-tailers via cooperative interfaces. Monotonectally myocardinate customer directed meta-services whereas error-free scenarios.',
    },
    {
      id: 'panel5',
      title: 'what is Kachabaza EC2 auto scaling?',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ducimus temporibus, tempora laborum numquam impedit fuga quam distinctio minus veniam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta.',
    },
  ];

  return (
    <div >
      {accordionData.map((panelData) => (
        <Accordion
          key={panelData.id}
          expanded={expanded === panelData.id}
          onChange={handleChange(panelData.id)}
          style={{padding:'6px 0'}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${panelData.id}bh-content`}
            id={`${panelData.id}bh-header`}
          >
            <Typography>
              {panelData.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {panelData.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
