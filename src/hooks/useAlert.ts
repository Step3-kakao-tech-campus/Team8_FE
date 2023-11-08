import { useEffect, useState } from 'react';

const useAlert = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setIsOpen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  return { isOpen, setIsOpen };
};

export default useAlert;
