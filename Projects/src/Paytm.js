import React, {useState} from 'react';
import './Paytm.css';
import {HiChevronDown} from 'react-icons/hi';
import {GoArrowRight} from 'react-icons/go';

export default function Paytm(){
    const navList = [
        {
            nav:'Recharge & Bills',
            list:['Mobile Recharge','Electricity bill', 'DTH Recharge', 'Municipal Bill','Water Bill', 'Gas & Cylinder','Loan EMI','Insurance Premium', 'Challan','Ticket Booking']
        },
        {
            nav:'Ticket Booking',
            list:['Flight Tickets','Train Tickets','Bus Tickets']
        },
        {
            nav:'Payments Services',
            list:['Payments','Loan & Credit cards', 'Wealth']
        },
        {
            nav:'Paytm for Business',
            list:['Online Paymetns','Offline payments', 'Business Software','Business Lending','insurance', 'For Developers-API']
        },
        {
            nav:'Company',
            list:['About','Investors','Sustainability','Blog','Latest News','Contact US','Customer Care','Career','CSR','Terms & Conditions']
        }
    ]
    const [bills, setBills]=useState([
        {src:'https://assetscdn1.paytm.com/images/catalog/view_item/2839929/17630252264344684.png',
         text:'Mobile Recharge'
        }
         ,{
            src:'https://assetscdn1.paytm.com/images/catalog/view_item/2839930/24719034555061353.png',
            text:'DTH Recharge'
         },
         {
            src:'https://assetscdn1.paytm.com/images/catalog/view_item/2839931/17630306417008374.png',
            text:'FastTag'
         },
         {
            src:'https://assetscdn1.paytm.com/images/catalog/view_item/3171057/25654768955408870.png',
            text:'Electricity Bill'
         },
        {
            src:'https://assetscdn1.paytm.com/images/catalog/view_item/3171058/25654802470500577.png',
            text:'Loan EMI Payment'
        },
        {
            src:'https://assetscdn1.paytm.com/images/catalog/view_item/3171059/25654906198636032.png',
            text:'Metro Recharge'
        },
        {
            src:'https://assetscdn1.paytm.com/images/catalog/view_item/3171060/25654956324419025.png',
            text:'Toll Gate Recharge'
        },
        {
            src:'https://assetscdn1.paytm.com/images/catalog/view_item/2839932/17630339117612605.png',
            text:'View All Products'
        }]);



    const bill_style={
        fontSize:'12.5px',
        fontWeight:'500',
        fontFamily:'Montserrat, sans-serif',
        
     }
    return (
        <div className='paytm-main'>
            <div className='container'>
                <h2 style={{textAlign:'center'}}>PAYTM CLONE</h2>
                <div className='paytm-nav'>
                        <div> <img src='https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo_new.svg' /></div>
                        <div className='paytm-nav-items'>
                          {  
                            navList.map((item)=>{
                                return(
                                    <div className='nav-item'>
                                        <span>{item.nav}</span> 
                                        <div><HiChevronDown size={20}  /></div>
                                        <div className='drop-down' >
                                        <ul type='none'>
                                            {
                                                item.list.map((li)=>{
                                                    return <li>{li}</li>
                                                })
                                            }
                                            <li>{item.list[0]}</li>
                                        </ul>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className='signup'> SignUp </div>

                </div>
                <div className='ad1'>
                     <img src='https://assetscdn1.paytm.com/images/catalog/view_item/3176129/27390681387427844.png' /> 
                </div>

                <div className='features'>
                   <div className='bills'>
                        <div><h3>Recharge & Bill Payments</h3></div>
                        <div className='bill-container'>
                            {
                                bills.map((b)=>{
                                    return(
                                        <div className='bill-item' >
                                            <div> <img src={b.src} height={'50px'} /></div>
                                            <div><span style={bill_style}>{b.text}</span></div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        
                   </div>
                   <div className='ad2'>
                            <img src='https://assetscdn1.paytm.com/images/catalog/view_item/3171065/27389616900368101.png' />
                    </div>
                </div>

                <div className='ad3'>
                    <img src='https://assetscdn1.paytm.com/images/catalog/view_item/3171063/25655116567472421.png' />
                    <img src='https://assetscdn1.paytm.com/images/catalog/view_item/3171064/32743882058815649.png' />
                </div>
                <div className='ad4'>
                    <div><img src='https://assetscdn1.paytm.com/images/catalog/view_item/2988609/20668546951073032.png' /></div>
                    <div><img src='https://assetscdn1.paytm.com/images/catalog/view_item/3022660/20668615076908518.png' /> </div>
                    <div><img src='https://assetscdn1.paytm.com/images/catalog/view_item/3134667/20668676105948378.png' /> </div>
                </div>

                <div className='paytm-travel'>
                    <div >
                        <div>
                        <img src='https://assetscdn1.paytm.com/images/catalog/view_item/3082534/22720698601946286.png'/>
                        <span>Flights</span>
                    </div>
                     <div>
                        <img src='https://assetscdn1.paytm.com/images/catalog/view_item/3082535/22720714168453281.png'/>
                        <span>Flights</span>
                    </div>
                    <div>
                        <img src='https://assetscdn1.paytm.com/images/catalog/view_item/3082536/22720736039116955.png'/>
                        <span>Flights</span>
                    </div>
                    <div>
                        <img src='https://assetscdn1.paytm.com/images/catalog/view_item/3082539/15632405671511461.png'/>
                        <span>Flights</span>
                    </div>
                    </div>
                    <div className='paytm-travel-logo'>
                            <img src='https://paytmtravel-images-akamai.paytm.com/icons/Paytm_Travel_Logo.svg' />
                    </div>
                </div>
                <div className='book-travel'>

                </div>
                <div className='ad5'>
                    <div>
                        <img src='https://assetscdn1.paytm.com/images/catalog/view/342367/1725447383123.png' />
                        <h2>Pay anyone directly from your bank account</h2>
                        <p>Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm UPI or Directly from your Bank Account. Plus, send & receive money from anyone.</p>
                        <div>
                            <img src='https://assetscdn1.paytm.com/images/catalog/view_item/2834703/1725432129171.png' />
                            <img src='https://assetscdn1.paytm.com/images/catalog/view_item/2834704/1725432148873.png' />
                        </div>
                    </div>
                    <div className='ad6'>
                        <img src='https://assetscdn1.paytm.com/images/catalog/view/1752741641420.png' />
                    </div>

                </div>
                <div className='ad7'>
                        <div>
                            <img src='https://assetscdn1.paytm.com/images/catalog/view_item/2832559/1725599834382.png' />
                            <span>24x7 Trusted customer support to assist and help you</span>
                        </div>
                        <div>
                            Learn more  <GoArrowRight />
                        </div>
                </div>
                <div className='ad8'>
                        <div className='ad8-1'>
                            <div className='credit'>
                                <img src='https://assetscdn1.paytm.com/images/catalog/view_item/2988623/27220898816562102.png' />

                            </div>
                            <h3>One destination for</h3>
                            <h3>Credit Crards</h3>
                            <p>Paytm HDFC, SBI & Axis Bank Card with assured Cashback and incredible offers.</p>
                            <div className='apply'>
                                <div>Apply Now <GoArrowRight /> </div>
                                <img src='https://assetscdn1.paytm.com/images/catalog/view_item/1741675100265.png' /> 
                               
                            </div>
                            <div className='bank-cards-img'>
                                <img src='https://assetscdn1.paytm.com/images/catalog/view_item/2988623/27221716933469500.png' />
                            </div>
                        </div>
                        <div className='ad8-2'>
                            <div>
                                <img src='https://assetscdn1.paytm.com/images/catalog/view_item/2834804/1725623952233.png' />
                                <h3>Insurance</h3>
                                <h3>Super Market</h3>
                                <p>A Smart, Simple & Transparent Platform to Explore & Purchase Insurance.</p>
                                <div className='get-it-now'>Get It Now <GoArrowRight/> </div>
                                <div className='ad8-21'><img src='https://assetscdn1.paytm.com/images/catalog/view_item/2988624/27217428616091880.png'/></div>
                            </div>
                        </div>
                </div>
                <div className='ad9'>
                    <div className='content'>
                        <img src='https://assetscdn1.paytm.com/images/catalog/view/308774/1617696247991.png' />
                        <h3>Everything you need to start your <span>investment journey</span> </h3>
                        <pre>
                            Whether you're a beginner or pro, Paytm Money helps you invest smarter and achieve
                            financial independence. Get access to expert opinion, mutual fund SIP, F&O trading, and
                            much more - all in one app.
                        </pre>
                        <div>
                            Learn More <GoArrowRight />
                        </div>
                        <p>Investments in the securities market are subject to market risks, read all the related documents carefully before investing. For complete Terms & Conditions and Disclaimers visit:<a> https://www.paytmmoney.com/stocks/policies/terms</a></p>
                    </div>
                    <div className='image'>
                            <img src='https://assetscdn1.paytm.com/images/catalog/view/1752737003196.png' />
                    </div>
                </div>
                <div className='ad10'>
                    <div className='content'>
                        <img src='https://assetscdn1.paytm.com/images/catalog/view/342368/1725447964962.png' />
                        <h3>Accept payments <span>online & offline</span></h3>
                        <p>Millions of small & big businesses use Paytm to accept payments anywhere any time with a wide range of solutions for all kind of merchants</p>
                        <div>Learn More <GoArrowRight /> </div>

                    </div>
                    
                    <img src='https://assetscdn1.paytm.com/images/catalog/view/1752735625336.png' />
                    
                </div>

            </div>
        </div>
    )
}