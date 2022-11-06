import { AccordionDetails, AccordionProps, Typography } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';
import MuiAccordionSummary, {
  AccordionSummaryProps
} from '@mui/material/AccordionSummary';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { QuestionType, TypeOption } from '../../../../services/quiz/models';
import ViewQuestion from './ViewQuestion';

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
  question: QuestionType;
  key: string | number;
  handleChange: (
    panel: string
  ) => (event: React.SyntheticEvent, newExpanded: boolean) => void;
};

const selectedOption = (options?: TypeOption[]) => {
  const prevSelected = options?.find((q) => q.selected);
  return prevSelected
    ? { id: prevSelected.id, text: prevSelected.text }
    : undefined;
};

const AccordionQuestion = ({
  panelName,
  expanded,
  question,
  key,
  handleChange
}: AccordionQuestionProps) => {
  const getQuestionOptions = (question: QuestionType) => {
    switch (question.type) {
      case 'SELECTOR':
        return {
          prevSelectorOptions: question.options?.map((o) => ({
            id: o.id,
            text: o.text
          })),
          prevSelectedOption: selectedOption(question.options)
        };
      case 'TEXT':
        return {
          prevMaxCharacters: question.maxCharacters
        };
      case 'CHECK':
        return {
          prevOptions: question.options?.map((o) => ({
            id: o.id,
            text: o.text,
            selected: o.selected,
            checked: o.selected
          }))
        };
    }
  };
  return (
    <div key={key} className="accordion">
      <Accordion
        expanded={expanded === panelName}
        onChange={handleChange(panelName)}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{question.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ViewQuestion
            typeQuestion={question.type}
            options={getQuestionOptions(question)}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionQuestion;
