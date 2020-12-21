import React from 'react'
import './Services.css'
import './bootstrap.css'
function Services(){
    return(    
        <section id="services">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
            <script src="https://use.fontawesome.com/5a8a7bb461.js"></script>
            <div class="container">
            <h1 class="ourteam">Our Services</h1>
            <div class="row services">
                <div class="col-md-3 text-center">
                <div class="icon">
                    <i class="fa fa-desktop" ></i>
                </div>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eum quo amet ad 
                    ipsa dignissimos esse cumque vero ducimus neque, doloremque doloribus quia, 
                    alias pariatur dolorem, commodi fugit ullam possimus?</p>
                </div>
                <div class="col-md-3 text-center">
                <div class="icon">
                    <i class="fa fa-tablet" ></i>
                </div>
                <h3>App Development</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eum quo amet ad 
                    ipsa dignissimos esse cumque vero ducimus neque, doloremque doloribus quia, 
                    alias pariatur dolorem, commodi fugit ullam possimus?</p>
                </div>
                <div class="col-md-3 text-center">
                <div class="icon">
                    <i class="fa fa-line-chart" ></i>
                </div>
                <h3>Digital Marketing</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eum quo amet ad 
                    ipsa dignissimos esse cumque vero ducimus neque, doloremque doloribus quia, 
                    alias pariatur dolorem, commodi fugit ullam possimus?</p>
                </div>
                <div class="col-md-3 text-center">
                <div class="icon">
                    <i class="fa fa-paint-brush" ></i>
                </div>
                <h3>Graphic Design</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eum quo amet ad 
                    ipsa dignissimos esse cumque vero ducimus neque, doloremque doloribus quia, 
                    alias pariatur dolorem, commodi fugit ullam possimus?</p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Services