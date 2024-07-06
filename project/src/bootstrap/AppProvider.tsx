import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
// import { PrefInfoListResasProvider } from '@/features/resas'
import { ErrorModal, ErrorProvider } from '@/components/Modal/ErrorModal';
import { Fallback } from './Fallback';


type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ErrorBoundary fallback={<Fallback />}>
      <ErrorProvider>
        <ErrorModal />
          <BrowserRouter>{children}</BrowserRouter>
      </ErrorProvider>
    </ErrorBoundary>
    
  );
};
