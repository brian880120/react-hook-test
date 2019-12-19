import React from 'react';
import { LanguageConsumer } from '../../providers/language.provider';

const TranslatableText = (props) => {
    return (
        <LanguageConsumer>
            {({ language }) => props.dictionary[language]}
        </LanguageConsumer>
    );
};

export default TranslatableText;
