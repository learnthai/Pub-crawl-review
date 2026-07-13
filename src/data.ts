import { Platform, Route } from './types';

export const platforms: { id: Platform; name: string; url: string }[] = [
  { id: 'GetYourGuide', name: 'GetYourGuide', url: 'https://www.getyourguide.com/login?next=/my-bookings' },
  { id: 'Viator', name: 'Viator', url: 'https://www.tripadvisor.com/UserReviewEdit-g13808671-d17770271-Taipei_Nightlife_Pub_Crawls_Bar_Hopping_2_Different_Routes-Zhongshan_District_Taipei.html' },
  { id: 'FreeTour', name: 'FreeTour.com', url: 'https://www.freetour.com/auth/login' },
  { id: 'Google', name: 'TourMeAway / Klook', url: '' }, // URL depends on route
];

export const googleMapsLinks: Record<Route, string> = {
  Classic: 'https://www.google.com/maps/place/Taipei+Nightlife:+Classic+Taipei+Pub+Crawl+Meeting+Point+-+TourMeAway/@25.063075,121.5200959,17z/data=!4m8!3m7!1s0x3442abc653c6ca77:0x35d1bc7beac9b63f!8m2!3d25.063075!4d121.5200959!9m1!1b1!16s%2Fg%2F11dymc10yq?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D',
  Xinyi: 'https://www.google.com/maps/place/Taipei+Nightlife:+Taipei+101+Xinyi+Pub+Crawl+Meeting+Point+-+TourMeAway/@25.0408368,121.5654133,17z/data=!3m1!5s0x3442abbbe4fa26dd:0x84e2168294d5e1dd!4m8!3m7!1s0x3442ab8a0ea6b565:0x4d3754940d48fce7!8m2!3d25.0408368!4d121.5654133!9m1!1b1!16s%2Fg%2F11vt83hb6m?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D',
};
