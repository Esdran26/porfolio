import Head from 'next/head';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => console.log(data)

  return(
    <>
      <Head>
        <title>Login</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous"></link>
      </Head>

      <div className="container pt-5">

        <h1 className="text-center">LOGIN</h1>
        <br/>

        <form onSubmit={ handleSubmit(onSubmit) }>
          <div className="mb-3">
            <label 
              htmlFor="exampleInputEmail1" 
              className="form-label"
            >
              Email address
            </label>

            <input 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp"
              name="email"
              ref={ register({ 
                required: true, 
                pattern: /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/ 
              })}
              placeholder="example@email.com"
            />
            

            {
              errors.email &&
                <div>
                  <br/>
                  <div 
                    id="emailHelp" 
                    className="alert alert-danger" role="alert"
                  >
                    
                    Please enter a valid email
                  </div>
                </div>
            }

            {
              !errors.email &&
                <div 
                id="emailHelp" 
                className="form-text" role="alert"
                >
                  We'll never share your email with anyone else.
                </div>
            }
          </div>
          <div className="mb-3">
            <label 
              htmlFor="exampleInputPassword1" 
              className="form-label"
            >
              Password
            </label>

            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1" 
              name="password"
              ref={ register({
                required: true,
                minLength: 6
              })}
              placeholder="Minimum 6 characters"
            />

            {
              errors.password &&
                <div>
                  <br/>
                  <div 
                    id="passwordHelp" 
                    className="alert alert-danger" role="alert"
                  >
                    
                    Please enter a valid password
                  </div>
                </div>
            }

          </div>
          <button 
            type="submit" 
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;