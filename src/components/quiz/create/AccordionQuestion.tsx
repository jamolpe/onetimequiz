import { AccordionDetails, AccordionProps, Typography } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';
import MuiAccordionSummary, {
  AccordionSummaryProps
} from '@mui/material/AccordionSummary';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

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
  }
}));

type AccordionQuestionProps = {
  panelName: string;
  expanded: string | false;
  component: JSX.Element;
  title: string;
  handleChange: (
    panel: string
  ) => (event: React.SyntheticEvent, newExpanded: boolean) => void;
};

const AccordionQuestion = ({
  panelName,
  expanded,
  component,
  title,
  handleChange
}: AccordionQuestionProps) => {
  return (
    <div className="accordion">
      <Accordion
        expanded={expanded === panelName}
        onChange={handleChange(panelName)}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{component}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionQuestion;
