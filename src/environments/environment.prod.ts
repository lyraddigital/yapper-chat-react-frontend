import ConfigurationSettings from '../config/configuration-settings';

const configuration: ConfigurationSettings = {
    auth0Settings: {
        clientID: '%AUTH0_API_CLIENT_ID%',
        domain: '%AUTH0_API_DOMAIN%',
        redirectUri: '%AUTH0_API_REDIRECT_URI%'
    }
}

export default configuration;