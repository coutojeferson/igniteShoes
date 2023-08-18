import OneSignal from 'react-native-onesignal';

export function tagUserInfoCreate() {
  OneSignal.sendTags({
    user_name: 'Jeferson',
    user_email: 'coutojefersonn@gmail.com',
  });
}

export function TagCartUpdate(itemsCount: string) {
  OneSignal.sendTag('cart_items_count', itemsCount);
}
