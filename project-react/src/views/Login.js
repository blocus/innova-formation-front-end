import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Login extends Component {
    render(){
        return (
            <div className="hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <Link to="/"><b>Admin</b>LTE</Link>
                    </div>
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <form action="../../index3.html" method="post">
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password" className="form-control" placeholder="Password" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                                    </div>
                                </div>
                            </form>

                            <div className="social-auth-links text-center mb-3">
                                <p>- OR -</p>
                                <button className="btn btn-block btn-primary">
                                    <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                                </button>
                                <button className="btn btn-block btn-danger">
                                    <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                                </button>
                            </div>
                            <p className="mb-1">
                                <Link to="/forgot-password">I forgot my password</Link>
                            </p>
                            <p className="mb-0">
                                <Link to="/register" className="text-center">Register a new membership</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login;


//
//
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <title>AdminLTE 3 | Log in</title>
//   <!-- Tell the browser to be responsive to screen width -->
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//
//   <!-- Font Awesome -->
//   <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css">
//   <!-- Ionicons -->
//   <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
//   <!-- icheck bootstrap -->
//   <link rel="stylesheet" href="../../plugins/icheck-bootstrap/icheck-bootstrap.min.css">
//   <!-- Theme style -->
//   <link rel="stylesheet" href="../../dist/css/adminlte.min.css">
//   <!-- Google Font: Source Sans Pro -->
//   <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
// </head>
// <body className="hold-transition login-page">
//
// <!-- /.login-box -->
//
// <!-- jQuery -->
// <script src="../../plugins/jquery/jquery.min.js"></script>
// <!-- Bootstrap 4 -->
// <script src="../../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
// <!-- AdminLTE App -->
// <script src="../../dist/js/adminlte.min.js"></script>
//
// </body>
// </html>
