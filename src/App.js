// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { AuthContext, SessionAction } from 'auth/AuthContext';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => {
  const { LogInAction, LogOutAction, RegisterAction } = SessionAction();
  const { user, token } = LogInAction(null);
  return (
    <AuthContext.Provider value={{ user, token, LogInAction, LogOutAction, RegisterAction }}>
      <ThemeCustomization>
        <ScrollTop>
          <Routes />
        </ScrollTop>
      </ThemeCustomization>
    </AuthContext.Provider>
  );
};

export default App;
