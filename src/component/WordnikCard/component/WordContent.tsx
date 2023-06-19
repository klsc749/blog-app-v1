import React, { useState } from 'react';
import { Card, CardContent, Typography, List, ListItem, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
    flexGrow: 1,
    padding: '8px',
    borderRadius: '12px',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: '#3f51b5',
}));

interface Definition {
    text: string;
    partOfSpeech: string;
    source: string;
}

interface Example {
    url: string;
    text: string;
    title: string;
    id: number;
}

export interface WordnikWordProps {
    wordData: {
        word: string;
        note: string;
        definitions: Definition[];
        examples: Example[];
    };
}

const WordnikContent: React.FC<WordnikWordProps> = ({ wordData }) => {

    return (
        <StyledCard elevation={3}>
            <CardContent>
                <Box mb={2}>
                    <StyledTypography variant="h4" gutterBottom>每日一词: {wordData.word}</StyledTypography>
                    <Typography variant="subtitle1" >Note: {wordData.note}</Typography>
                </Box>
                {WordDefinition(wordData.definitions)}
                {WordExamples(wordData.examples)}
            </CardContent>
        </StyledCard>
    );
}

function WordDefinition(definitions: Definition[]){
    return(
        <Box>
            <StyledTypography variant="h6" gutterBottom>Definitions:</StyledTypography>
            <List>
                {definitions.map((definition, index) => (
                    <ListItem key={index} style={{ flexDirection: 'column' }}>
                        <Typography style={{ color: 'green' }}>{index + 1}. {definition.text}</Typography>
                        <Typography style={{ color: 'blue' }}>词性: {definition.partOfSpeech}</Typography>
                        <Typography style={{ color: 'red' }}>来源: {definition.source}</Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

function WordExamples(examples: Example[]){
    const [expanded, setExpanded] = useState(false);

    function handleAccordionClick(){
        setExpanded(!expanded);
    }

    return(
        <Accordion expanded={expanded} onChange={handleAccordionClick}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <StyledTypography variant="h6" gutterBottom>Examples:</StyledTypography>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    {examples.map((example, index) => (
                        <ListItem key={index}>
                            <Typography>{index + 1}. {example.text}</Typography>
                        </ListItem>
                    ))}
                </List>
            </AccordionDetails>
        </Accordion>
    )
}

export default WordnikContent;
