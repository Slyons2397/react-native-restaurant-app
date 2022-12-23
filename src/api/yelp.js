import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer h8sypNNd-F4oIQIkZJX00V5AtbXVDNJZfiJpFnpr30mQGV6q-mhkusbN2WJKDXpBXveyQ2Vmz2RyAC0dRHxbd93haUrhyQEEyuNvC4v2tQ3pZJIpNOABLnnkrPWlY3Yx'
    }
});
