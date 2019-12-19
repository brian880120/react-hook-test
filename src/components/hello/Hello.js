import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import LanguageProvider from '../../providers/language.provider';
import Header from '../Header/Header';
import TranslatableText from '../Header/TranslatableText';

export const Hello = React.memo(() => {
    const intl = useIntl();

    const messages = defineMessages({
        greeting: {
            id: 'app.home.greeting',
            description: 'Message to greet the user',
            defaultMessage: 'Hello, {name}',
        },
    });

    const message = intl.formatMessage(messages.greeting, {
        name: <b>Eric</b>
    });

    console.count('render hello');

    return (
        <LanguageProvider>
            <div>
                <Header />
                <h1>
                    <TranslatableText
                        dictionary={{
                            french: 'Bonjour, Michel!',
                            english: 'Hello, Michael!',
                            italian: 'Ciao, Michele!',
                        }} />
                </h1>
            </div>
            <div>{message}</div>
        </LanguageProvider>
    );
});
