import React from 'react'

const Footer = () => {
  return (
    <>

    <section id="footer">

      <div className="container py-5 my-5">

        <div className="row " data-aos="fade-up" data-aos-duration="2000">

        <div className="col-sm-12 col-md-6 col-lg-6 col-12 d-flex  align-items-start flex-column gap-3">

            <img src="/Logo/Logo.svg" alt="" />
            <p className='w-50'>LaslesVPN is a private virtual network that has unique features and has high security.</p>

            <div>

            <img src="/icon/Facebook.png" alt="Facebook" />
                <img src="/icon/Twitter.png" alt="Twitter" />
                <img src="/icon/Instagram.png" alt="instagram" />
            </div>

            <p>©2024LaslesVPN</p>
            
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 col-12">

               <h4>Product</h4>
               <ul className="list-unstyled ">

               <a href="#" className='text-decoration-none text-black'> <li> Download </li></a>
               <a href="#" className='text-decoration-none text-black'> <li> Pricing </li></a>
               <a href="#" className='text-decoration-none text-black'> <li> Locations </li></a>
               <a href="#" className='text-decoration-none text-black'> <li> Server </li></a>
               <a href="#" className='text-decoration-none text-black'> <li> Countries </li></a>
               <a href="#" className='text-decoration-none text-black'> <li> Blog </li></a>


               </ul>



        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 col-12">


        <h4>Engage</h4>
               <ul className="list-unstyled ">

               <a href="#" className='text-decoration-none text-black'> <li> LaslesVPN ?  </li></a>
               <a href="#" className='text-decoration-none text-black'> <li> FAQ </li></a>
               <a href="#" className='text-decoration-none text-black'> <li> Tutorials </li></a>
               <a href="#" className='text-decoration-none text-black'> <li> About Us </li></a>
               <a href="#" className='text-decoration-none text-black'> <li> Privacy Policy </li></a>
               <a href="#" className='text-decoration-none text-black'> <li> Terms of Service </li></a>


               </ul>

        </div>
        <div className="col-sm-12 col-md-2 col-lg-2 col-12">

        <h4>Earn Money</h4>
               <ul className="list-unstyled ">

               <a href="#" className='text-decoration-none text-black'> <li> Affiliate </li></a>
               <a href="#" className='text-decoration-none text-black'> <li> Become Partner </li></a>
               


               </ul>


        </div>



        </div>


      </div>

      <div className="container-fluid bg-danger text-white p-3 text-center b">

        <h4>@Copyright-Developed by- Parminder singh</h4>

      </div>


    </section>

      
    </>
  )
}

export default Footer
