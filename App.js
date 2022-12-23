import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator({
  Search: SearchScreen
}, 
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);

// Client ID
// GQKqp42FHN2YmEDt44HK0g

// API Key
// h8sypNNd-F4oIQIkZJX00V5AtbXVDNJZfiJpFnpr30mQGV6q-mhkusbN2WJKDXpBXveyQ2Vmz2RyAC0dRHxbd93haUrhyQEEyuNvC4v2tQ3pZJIpNOABLnnkrPWlY3Yx

//https://api.yelp.com/v3/businesses/search
//https://api.yelp.com/v3/businesses/{business_id_or_alias}