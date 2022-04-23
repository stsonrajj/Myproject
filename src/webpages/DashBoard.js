import React from 'react'
import SetCookies from '../cookies/SetCookies'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../scssfile/DashBoard.scss'

export const DashBoard = () => {
  return (
      <>
      <Header/>
    <div class="container">
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="signup-form">
                <div className="mt-5 border p-4 bg-light shadow">
                    <h4 class="mb-5 text-secondary">Hello User</h4>
                    <div class="row">
                        <div class="mb-3 col-md-6">
                            <label>Name<span class="text-danger">*</span></label>
                            <input type="text" name="fname" class="form-control" placeholder="Enter Name" defaultValue={SetCookies.get('login').customerName}/>
                        </div>

                        <div class="mb-3 col-md-6">
                            <label>Email<span class="text-danger">*</span></label>
                            <input type="text" name="Lname" class="form-control" placeholder="Enter EmailID" defaultValue={SetCookies.get('login').eMail}/>
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>Address<span class="text-danger">*</span></label>
                            <input type="text" name="Lname" class="form-control" placeholder="Enter Address" defaultValue={SetCookies.get('login').customerAddress }/>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
</div>
<Footer/>
</>
  )
}
