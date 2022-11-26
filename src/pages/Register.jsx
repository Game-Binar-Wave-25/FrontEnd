import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBTextArea
}
    from 'mdb-react-ui-kit';

function Register() {
    return (
        <>
            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-white text-dark my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                                <p className="text-dark-50 mb-5">Please enter your email and password!</p>

                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Enter username' id='username' type='text' size="lg" />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Enter email' id='email' type='email' size="lg" />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Enter password' id='password' type='password' size="lg" />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Enter city' id='city' type='text' size="lg" />
                                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Enter address' id='address' type='text' size="lg" />
                                <MDBTextArea wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Enter bio' id='bio' rows={3} />
                                <MDBBtn className='w-100 mb-4' size='md'>SIGN UP</MDBBtn>

                                <div>
                                    <p className="mb-0">You have an account? <a href="#!" class="text-info fw-bold">Sign In</a></p>
                                </div>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </>
    );
}

export default Register;