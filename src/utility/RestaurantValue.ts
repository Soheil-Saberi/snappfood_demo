import Restaurant from '../model/Restaurant';
// Image
import restaurantImg from './../assets/images/restaurant-img.png';
// Utils
import Constants from './Constants';

const RestaurantValue: Restaurant = {
  name: Constants.RESTAURANT_NAME,
  star: Constants.RESTAURANT_STAR,
  comment: Constants.RESTAURANT_COMMENT,
  img: restaurantImg
};

export default RestaurantValue;
