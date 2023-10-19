// plugins/device-detect.js
import MobileDetect from 'mobile-detect';

export default ({ app }, inject) => {
  if (process.client) {
    const userAgent = navigator.userAgent;
    const md = new MobileDetect(userAgent);
    const isMobile = md.phone() !== null || md.mobile() === 'UnknownMobile';
    const isTablet = md.tablet() !== null || md.mobile() === 'UnknownTablet';
    const isDesktop = !isMobile && !isTablet;
    inject('deviceDetect', {
      isMobile,
      isTablet,
      isDesktop,
    });
  } else {
    // Handle the server-side case if needed
    inject('deviceDetect', {
      isMobile: false,
      isTablet: false,
      isDesktop: false,
    });
  }
};
