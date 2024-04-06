import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { useFormik } from 'formik';
// import axios from 'axios';

// project import
import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import useAuthContext from 'auth/hook/useAuthContext';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthRegister = () => {
  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const { RegisterAction } = useAuthContext();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('');
  }, []);

  const handleSubmit = async () => {
    const inputs = formik.values;
    await RegisterAction(inputs);

    return;
  };

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      number_phone: '',
      email: '',
      username: '',
      perfil: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object().shape({
      first_name: Yup.string().max(255).required('First Name is required'),
      last_name: Yup.string().max(255).required('Last Name is required'),
      number_phone: Yup.string().min(9).required('Number Phone is required'),
      email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
      username: Yup.string().max(30).required('Username is required'),
      perfil: Yup.string().required('Perfil is required'),
      password: Yup.string().max(255).required('Password is required')
    }),
    onSubmit: (values) => alert(JSON.stringify(values, null, 2))
  });

  return (
    <>
      <form action="#" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="first_name-signup">First Name*</InputLabel>
              <OutlinedInput
                id="first_name-login"
                type="first_name"
                value={formik.values.first_name}
                name="first_name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="John"
                fullWidth
                error={Boolean(formik.touched.first_name && formik.errors.first_name)}
              />
              {formik.touched.first_name && formik.errors.first_name && (
                <FormHelperText error id="helper-text-first_name-signup">
                  {formik.errors.first_name}
                </FormHelperText>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="last_name-signup">Last Name*</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formik.touched.last_name && formik.errors.last_name)}
                id="last_name-signup"
                type="last_name"
                value={formik.values.last_name}
                name="last_name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Doe"
                inputProps={{}}
              />
              {formik.touched.last_name && formik.errors.last_name && (
                <FormHelperText error id="helper-text-last_name-signup">
                  {formik.errors.last_name}
                </FormHelperText>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="number_phone-signup">Number Phone*</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formik.touched.number_phone && formik.errors.number_phone)}
                id="number_phone-signup"
                value={formik.values.number_phone}
                name="number_phone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="+244 9xx xxx xxx"
                inputProps={{}}
              />
              {formik.touched.number_phone && formik.errors.number_phone && (
                <FormHelperText error id="helper-text-number_phone-signup">
                  {formik.errors.number_phone}
                </FormHelperText>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formik.touched.email && formik.errors.email)}
                id="email-login"
                type="email"
                value={formik.values.email}
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="demo@company.com"
                inputProps={{}}
              />
              {formik.touched.email && formik.errors.email && (
                <FormHelperText error id="helper-text-email-signup">
                  {formik.errors.email}
                </FormHelperText>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="username-signup">Username*</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formik.touched.username && formik.errors.username)}
                id="username-login"
                type="username"
                value={formik.values.username}
                name="username"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Type your username"
                inputProps={{}}
              />
              {formik.touched.username && formik.errors.username && (
                <FormHelperText error id="helper-text-username-signup">
                  {formik.errors.username}
                </FormHelperText>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="perfil-signup">Perfil*</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formik.touched.perfil && formik.errors.perfil)}
                id="perfil-login"
                type="perfil"
                value={formik.values.perfil}
                name="perfil"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder="Choose your perfil"
                inputProps={{}}
              />
              {formik.touched.perfil && formik.errors.perfil && (
                <FormHelperText error id="helper-text-perfil-signup">
                  {formik.errors.perfil}
                </FormHelperText>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="password-signup">Password</InputLabel>
              <OutlinedInput
                fullWidth
                error={Boolean(formik.touched.password && formik.errors.password)}
                id="password-signup"
                type={showPassword ? 'text' : 'password'}
                value={formik.values.password}
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="******"
                inputProps={{}}
              />
              {formik.touched.password && formik.errors.password && (
                <FormHelperText error id="helper-text-password-signup">
                  {formik.errors.password}
                </FormHelperText>
              )}
            </Stack>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Box
                    sx={{
                      bgcolor: level?.color,
                      width: 85,
                      height: 8,
                      borderRadius: '7px'
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" fontSize="0.75rem">
                    {level?.label}
                  </Typography>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              By Signing up, you agree to our &nbsp;
              <Link variant="subtitle2" component={RouterLink} to="#">
                Terms of Service
              </Link>
              &nbsp; and &nbsp;
              <Link variant="subtitle2" component={RouterLink} to="#">
                Privacy Policy
              </Link>
            </Typography>
          </Grid>
          {formik.errors.submit && (
            <Grid item xs={12}>
              <FormHelperText error>{formik.errors.submit}</FormHelperText>
            </Grid>
          )}
          <Grid item xs={12}>
            <AnimateButton>
              <Button
                disableElevation
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="primary"
              >
                Create Account
              </Button>
            </AnimateButton>
          </Grid>
          <Grid item xs={12}>
            <Divider>
              <Typography variant="caption">Sign up with</Typography>
            </Divider>
          </Grid>
          <Grid item xs={12}>
            <FirebaseSocial />
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AuthRegister;
