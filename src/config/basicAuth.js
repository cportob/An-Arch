import clienteAxios from './axios';

const basicAuth = () => {
    clienteAxios.defaults.headers.common['php_auth_user'] = '5jiYZZGa9FgCmq+i+f+vl0/n9A194ecI7HOUBn0wgSo=';
    clienteAxios.defaults.headers.common['php_auth_pw'] = 'lxlBBe527nzxU2MFuQUiFmIV2ECojI2ivHLp+wbkpjOmhVFnczxmFMxnKdLiEx+OCpF5XgzEXP82UrM0E6EQSQ==';
}

export default basicAuth;