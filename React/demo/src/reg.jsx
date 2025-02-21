import React from 'react';

function Reg(){


    return(
        <>
        
    <div className="reg">
            <span>Registration</span>
            <div className="feilds">
            <div id="formMain">
            
            <div className='n'>
                <label for="">Name : </label>
            </div>
            <div className="inpt">
                <input type="" name="name" id="name" placeholder="Enter your name"/>
            </div>
            <div className="label">
                <label for="">Age : </label>
            </div>
            <div className="inpt">
                <input type="number" name="age" id="age"  placeholder="Enter your age"/> 
            </div>
            <div className="label">
                <label for="">DOB : </label>
            </div>
            <div className="inpt">
                <input type="date" name="dob" id="dob"  placeholder="Enter your dob"/>
            </div>
            <div className="label">
                <label for="email">Email : </label>
            </div>
            <div className="inpt">
                <input type="email" name="email" id="email" />
            </div>
            <div className="label">
                <label for="password">Password : </label>
            </div>
            <div className="inpt">
                <input type="password" name="password" id="password"/>
            </div >
            <div className="label">
                <label for="gender">Gender : </label>
            </div>
            <div className="inpt">
                <input type="radio" name="gender" id="Male" value="Male"/><span>Male</span>
                <input type="radio" name="gender" id="Female" value="Female"/><span>Female</span>
                <input type="radio" name="gender" id="Others" value="Others"/><span>Others</span>
            </div>
            <div className="label">
                <label for="">Document : </label>
            </div>
            <div className="inpt">
                <input type="checkbox" name="" id="10th DCM" value="10th DCM"/><span>10th DCM</span>
                    <input type="checkbox" name="" id="12th DCM" value="12th DCM"/><span>12th DCM</span>
                    <input type="checkbox" name="" id="aadhar card" value="Aadhar card"/><span>Aadhar card</span>
            </div>
            <div className="label">
                <label for="">course</label>
            </div>
            <div className="inpt">
                <select name="" id="">
                    <option value="--Select option--">--Select option--</option>
                    <option value="Java + DSA +Mern">Java + DSA +Mern</option>
                    <option value="MERN">MERN</option>
                    <option value="Data Science">Data Science</option>
                </select>
            </div>
            <div className="label">
                <label for="address">Address : </label>
            </div>
            <div className="inpt">
                <textarea name="address" id="address"></textarea>
            </div>
            <div >
                <input type="Submit" value="Submit"/>
                <input type="Reset" value="Reset"/>
            </div>
        </div>





<div className="container">
        <div className="login">
            <span>login</span>
            
                <div className="feilds">
                    <input type="email " name="username" id="username" placeholder="Enter your email"/>
                    <input type="password" name="password" id="password" placeholder="Confirm a password"/>
                </div>
                <div className="flex">
                    <div className="confimation">
                        <input type="checkbox" name="rememberme" id="rememberme"/>
                        <span>Remember</span>
                    </div>
                    <div className="forgetpss flex-item">
                        <a href="#forgetpassword">Forget Password</a>
                    </div>
                    <div className="smbt flex-item">
                        <input type="submit"  value="login"/>
                    </div>
                </div>
                
           
        </div>  
    </div>
            </div>
        </div>

        </>
    )
}
export default Reg;