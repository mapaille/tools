import './main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
const appInsights = new ApplicationInsights({ config: {
        connectionString: 'InstrumentationKey=5607b793-6c98-4ea1-ade0-cc3f4743bd14;IngestionEndpoint=https://canadaeast-0.in.applicationinsights.azure.com/;LiveEndpoint=https://canadaeast.livediagnostics.monitor.azure.com/;ApplicationId=f3769436-9a29-4335-ae8e-41a7d1971fd8'
    } });
appInsights.loadAppInsights();
appInsights.trackPageView();
createApp(App).use(router).mount('#app');
//# sourceMappingURL=main.js.map