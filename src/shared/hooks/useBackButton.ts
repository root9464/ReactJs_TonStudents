import { useCanGoBack, useRouter } from '@tanstack/react-router';
import { backButton } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';

export const useBackButton = (visible: boolean) => {
  const router = useRouter();
  const canGoBack = useCanGoBack();

  useEffect(() => {
    if (visible) {
      backButton.show();
    } else {
      backButton.hide();
    }
  }, [visible]);

  useEffect(() => {
    const handleBackButtonClick = () => {
      if (canGoBack) {
        router.history.back();
      }
    };

    const unsubscribe = backButton.onClick(handleBackButtonClick);

    return () => {
      unsubscribe();
    };
  }, [router, canGoBack]);

  return null;
};
