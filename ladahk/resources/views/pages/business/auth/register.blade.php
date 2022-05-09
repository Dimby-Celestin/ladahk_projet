
@extends('layouts.app')

@section('title')
Register into ladakh portal
@endsection
@section('content')

    <div class="container pt-5 pb-5" id="auth">
        <div class="row mb-3">
                <h3 class="mt-5 title1 pl-3">Create an account.</h3>
                <p class="col-12 mb-5 p1" >Register for an account using the details below. 
                    Once approved by the admin, you can fill forms and register your property/Business.
                </p>
                <div class="col-sm-10 col-md-8 col-lg-7">
                    @include('includes.errors')
                </div>
                <form method="post" action="" class="col-sm-10 col-md-8 col-lg-7 " >
                    <div class="form-group mb-4" >
                        <input type="text" class="form-control p-4 " name="name" id="textinput"  placeholder="Listing name" required="">
                    </div>
                    <div class="form-group mb-4" >
                        <input type="tel" class="form-control p-4 " name="phone" id="phone"  placeholder="Phone number" required="">
                    </div>
                    <div class="form-group mb-4" >
                        <input type="email" class="form-control p-4 " name="email" id="email"  placeholder="Email" required="">
                    </div>
                    <button type="submit" name="submit" class="btn btn-primary1 btn-theme mt-2 px-3 py-2" id="btn-text">Submit</button>
                </form>
        </div>
        <div class="d-flex align-items-center mt-4">
            <div class="loginRegister pr-2"> I already have an account, </div>
            <div><a href={{ url('/login') }} class="log mt-5 mx-2 loginRegister">Login</a></div>      
        </div>
    </div>

@endsection