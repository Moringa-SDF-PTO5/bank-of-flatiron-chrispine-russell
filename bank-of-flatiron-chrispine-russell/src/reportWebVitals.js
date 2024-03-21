import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

function reportToAnalytics(metric) {
  // Replace this with your own analytics reporting function
  console.log(metric);
}

getCLS(reportToAnalytics);
getFID(reportToAnalytics);
getLCP(reportToAnalytics);
getFCP(reportToAnalytics);
getTTFB(reportToAnalytics);
