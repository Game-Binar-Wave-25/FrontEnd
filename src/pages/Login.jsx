import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';

function Login() {
    return (
        <>
            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='text-dark my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                <h2 className="fw-bold mb-2 text-uppercase">lOGIN</h2>
                                <p className="text-dark-50 mb-5">Please enter your email and password!</p>
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Enter email' id='formControlLg' type='email' size="lg" />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Enter password' id='formControlLg' type='password' size="lg" />
                                <MDBBtn className='w-100 mb-4' size='md'>SIGN IN</MDBBtn>
                                <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                                <div>
                                    <p className="mb-0">Don't have an account? <a href="#!" class="text-info fw-bold">Sign Up</a></p>
                                </div>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </>
    );
}

export default Login;