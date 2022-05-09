


@extends('layouts.app')

@section('title')
Posts page
@endsection

@section('content')
    <div class="container pt-5 pb-5" id="auth">
        <div class="row">
            <h3 class="title1 pt-5 mb-5">Login</h3>
            <div class="col-7 pb-0">
                @include('includes.errors')
            </div>
            <form method="post" action="" class="pt-1 col-sm-10 col-md-8 col-lg-7 pl-0 mt-3" >
                <div class="form-group mb-4" >
                  <input type="text" class="form-control p-4" name="email" id="email"  placeholder="Your email" required>
              </div>
              <div class="form-group mb-4" >
                  <input type="password" class="form-control p-4" name="password" id="password"  placeholder="Your password" required>
              </div>
              <button type="submit" name="submit" class="btn btn-primary1 btn-theme mt-2 px-3 py-2">Login</button>
            </form>      
        </div>
        <div class='d-flex align-items-center mt-4'>
            <div class="loginRegister pr-2"> I don't have an account, </div>
            <div><a href={{ url('/register') }} class="log mt-5 mx-2 loginRegister" >Register</a></div>      
        </div>
    </div>

@endsection