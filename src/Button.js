import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';
import heroimg from "./Img/hero-section-image-new.b1f39a21 (1).svg"
import secondimg from "./Img/secondimg.svg"
import arrowimg from "./Img/icons8-arrow-24.png"
import thirdimg from "./Img/thirdimg.svg"
import finegirl from "./Img/finegirl.webp"
import fourthimg from "./Img/fourlogo.svg"
import fifthimg from "./Img/fivelogo.webp"
import sixthimg from "./Img/secure-payments-image.61417c6b.svg"
import eigthimg from "./Img/eight.svg"
import iconimg from "./Img/icons8-check-50.png"
import SelectSizesExample from './form';
import SocialFollow from './social'
function TypesExample() {
    return (
      <div className='a-1'>
        <span className='bbn'>
        <Button className='a-2' variant="primary">Get All-in-one</Button>{' '}
        </span>
        <span className='bbn'>
        <Button className='a-2' variant="light">Send Instant Invoices</Button>{' '}

        </span>
        < img className='Heroimgg' alt='' src={
            heroimg
        }/>
        <p className='a-3'>
            We've fixed the <span className='a-4'>"small things"</span>
            so you don't have to.
        </p>
        <span className='b-1'>
           < img className='Heroimgg' alt='' src={
            secondimg
           }/>
        </span>
        <span>
            <h4>
                BUSINESS PAGE
            </h4>
            <h3>
                Command respect and 
                get paid for your time
            </h3>
            <p>
                Set up a free professionnal page
                in minutes and add up to 
                5 services to start receiving appointments.

            </p>
            <p className='g-1'>
                <a href='$'> Get your free business page <span> <img src={arrowimg}/> </span></a>
            </p>
        </span>

           <span className='a-5'>
            < img className='Heroimgg' alt='' src={
                thirdimg
            }/>
           </span>


           <span>
            <h4>
                APPOINTMENT SCHEDULING
            </h4>
            <h3>
                Stay organized in your day-to-day.
            </h3>
            <p>
                Set your available hours and 
                receive appointment bookings directly into your calender
            </p>
            <p className='g-1'>
                <a href='$'> Start accepting bookings <span> <img src={arrowimg}/> </span></a>
            </p>
        </span>

           <span className='a-5'>
            < img className='Heroimgg' src={
                fifthimg
            }/>
           </span>

           <span>
            <h4>
                BORDERLESS PAYMENTS
            </h4>
            <h3>
                Work with international clients from day one.
            </h3>
            <p>
                Receive payments in multiple currencies

            </p>
            <p className='g-1'>
                <a href='$'> Start onboarding clients <span> <img src={arrowimg}/> </span></a>
            </p>
        </span>


           <span className='a-10'>
            < img className='Heroimgg' src={
                fourthimg
            }/>
           </span>


           <div className='van'>
            <h4>
                CONFERENCING
            </h4>
            <h3>
                Host your meetings directly.
            </h3>
            
            <p>
                Get booked for free or paid meetings. Join in from your account, no need for Zoom or Google Meet!
            </p>
            <p className='g-1'>
                <a href='$'>Get Your Free business Page <img src={
                    arrowimg
                }/>
                </a>
            </p>
            <h3>Hear from our customers and make the switch too!</h3>
            
            <span className='c-1'>
                <img className='cardimg' src={
                    finegirl
                }/>
                <p>
                Life saver! Before using Oddience in November '22, I had issues with getting a registration link that could take all participants in my virtual group session and you helped me solve that. Also the payment platform is so seamless. Keep up the good work.
                </p>
                <p>
                    Udeme Isemin
                </p>
                <p>
                    Licensed Nutritionist-Dietitian
                </p>
            </span>
           
          
          
           <div className='silver'>
            <h2>
                See how this works <span className='bird'>for you</span>
            </h2>
<div className='d-1'>
            <span className='d-2'>I'm a </span> <br/>

            <span>
               <SelectSizesExample/>
            </span>
            </div>
            <span className='m-1'>
                As a
                 <span className='m-2'>
                    Mental Health Therapist
                </span>
                <p>
                    Securely hold private sessions with your clients from the comfort of your home.
                </p>
                <p>
                    <span>
                        <img className='pop' src={iconimg}/>
                    </span>
                    <span>
                        Share in-take forms to know your clients before a session.
                    </span>
                </p>

                <p>
                    <span>
                        <img className='pop' src={iconimg}/>
                    </span>
                    <span>
                        Share in-take forms to know your clients before a session.
                    </span>
                </p>

                <p>
                    <span>
                        <img className='pop' src={iconimg}/>
                    </span>
                    <span>
                        Share in-take forms to know your clients before a session.
                    </span>
                </p>

                <p className='g-1'>
                <a href='$'>Get Your Free business Website <img src={
                    arrowimg
                }/>
                </a>
            </p>
            <span className='a-5'>
            < img className='Heroimgg' src={
                fifthimg
            }/>
           </span>
            </span>
            </div>
            <span className='nta'>
                <h3 className='tvc'>
                    Secure payments in any currency.
                </h3>
                <p>
                    Our payments are powered by a PCI DSS compliant infrastructure.
                    You also get reliable transfers to your bank account in any 
                    currency at friendly rates.
                </p>
                <p className='ntaa'>
                    < img className='ntaaa' src={sixthimg} />
                    < img src={eigthimg} />
                </p>
                
            </span>
            <span className='f-1'>
                <p>
                    Invite another Consultant
                </p>
                <p className='f-2'>
                    <span>
                        Share on:
                    </span>
                    <span>
                        <SocialFollow/>
                    </span>
                </p>
            </span>
           </div>
           
      </div>
    );
  }
  
  export default TypesExample;