import { Platform, Route } from './types';

export const platforms: { id: Platform; name: string; url: string }[] = [
  { id: 'GetYourGuide', name: 'GetYourGuide', url: 'https://www.getyourguide.com/login?next=/my-bookings' },
  { id: 'Viator', name: 'Viator', url: 'https://www.tripadvisor.com/UserReviewEdit-g13808671-d17770271-Taipei_Nightlife_Pub_Crawls_Bar_Hopping_2_Different_Routes-Zhongshan_District_Taipei.html' },
  { id: 'FreeTour', name: 'FreeTour.com', url: 'https://www.freetour.com/auth/login' },
  { id: 'Google', name: 'Google Maps', url: '' }, // URL depends on route
];

export const googleMapsLinks: Record<Route, string> = {
  Classic: 'https://maps.app.goo.gl/APheEQxUdQZ8doYs5',
  Xinyi: 'https://maps.app.goo.gl/VsfPPk2EQvxedKYb6',
};
