import React from 'react';

export const LanguageContext = React.createContext();
export const LanguageConsumer = LanguageContext.Consumer;

class LanguageProvider extends React.Component {
    state = {
        language: 'french',
    };

    updateLanguage = (e) => {
        this.setState({
            language: e.target.value,
        });
    };

    render() {
        return (
            <LanguageContext.Provider
                value={{
                    language: this.state.language,
                    updateLanguage: this.updateLanguage,
                }}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

export default LanguageProvider;
