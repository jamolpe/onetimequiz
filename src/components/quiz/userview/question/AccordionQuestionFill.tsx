import React from 'react';
import { QuestionType } from '../../../../services/quiz/models';
import { AccordionDetails, AccordionProps, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps
} from '@mui/material/AccordionSummary';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import FillQuestion from './FillQuestion';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  },
  ' & .delete-icon': {
    marginLeft: 'auto'
  }
}));

type AccordionQuestionFillProps = {
  panelName: string;
  expanded: string | false;
  question: QuestionType;
  id: string;
  handleChange: (
    panel: string
  ) => (event: React.SyntheticEvent, newExpanded: boolean) => void;
};

const AccordionQuestionFill = ({
  panelName,
  expanded,
  question,
  id,
  handleChange
}: AccordionQuestionFillProps) => {
  return (
    <div key={id} className="accordion">
      <Accordion
        expanded={expanded === panelName}
        onChange={handleChange(panelName)}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{question.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FillQuestion
            typeQuestion={question.type}
            options={question.options}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionQuestionFill;
