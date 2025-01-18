import { useCanGoBack, useRouter } from '@tanstack/react-router';
import { backButton } from '@telegram-apps/sdk-react';
import { useCallback, useEffect } from 'react';

export const useBackButton = (visible: boolean = false, customBackHandler?: () => void) => {
  const router = useRouter();
  const canGoBack = useCanGoBack();

  const handleBackButtonClick = useCallback(() => {
    if (customBackHandler && visible) customBackHandler();
    else if (canGoBack) router.history.back();
  }, [canGoBack, router, customBackHandler, visible]);

  useEffect(() => {
    const unsubscribe = backButton.onClick(handleBackButtonClick);

    return () => {
      unsubscribe();
      backButton.hide();
    };
  }, [handleBackButtonClick]);

  useEffect(() => {
    if (visible) backButton.show();
    else backButton.hide();
  }, [visible]);

  return null;
};
