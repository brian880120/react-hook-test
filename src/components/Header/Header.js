import React from 'react';
import { LanguageConsumer } from '../../providers/language.provider';

const Header = () => {
    return (
        <LanguageConsumer>
            {({ updateLanguage }) => (
                <header>
                    see this site in
                    <select onChange={updateLanguage}>
                        <option value="french">french</option>
                        <option value="english">english</option>
                        <option value="italian">italian</option>
                    </select>
                </header>
            )}
        </LanguageConsumer>
    );
};

export default Header;
