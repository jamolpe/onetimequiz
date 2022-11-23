import { AccordionDetails, AccordionProps, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
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
  },
  ' & .delete-icon': {
    marginLeft: 'auto'
  }
}));

type AccordionQuestionProps = {
  panelName: string;
  expanded: string | false;
  question: QuestionType;
  id: string;
  onDeleteClick?: (id: string) => void;
  handleChange: (
    panel: string
  ) => (event: React.SyntheticEvent, newExpanded: boolean) => void;
  viewMode: boolean;
};

const selectedOption = (options?: TypeOption[]) => {
  const prevSelected = options?.find((q) => q.selected);
  return prevSelected?.id;
};

const AccordionQuestion = ({
  panelName,
  expanded,
  question,
  id,
  handleChange,
  onDeleteClick,
  viewMode = false
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
            selected: o.selected
          }))
        };
    }
  };
  return (
    <div key={id} className="accordion">
      <Accordion
        expanded={expanded === panelName}
        onChange={handleChange(panelName)}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>{question.title}</Typography>
          {onDeleteClick && (
            <DeleteIcon
              onClick={(e) => {
                e.preventDefault();
                onDeleteClick(id);
              }}
              className="delete-icon"
            />
          )}
        </AccordionSummary>
        <AccordionDetails>
          <ViewQuestion
            typeQuestion={question.type}
            options={{ ...getQuestionOptions(question), viewMode }}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionQuestion;
