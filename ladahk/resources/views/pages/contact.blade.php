@extends('layouts.app')

@section('title')
Posts page
@endsection

@section('content')

<section class="bg-light pt-content pb-5" id="faq">
    <div class="header-top">
        <div class="header-image" style="background-image: url('{{asset('img/juliane-lieberman.png')}}');"> </div>
        <div class="text-center align-self-center title">
            <h3>Contact <span>page</span></h3>
            <p>
                please contact us at mail@mail.com
            </p>
        </div>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
                <form>
                    <div class="form-group">
                        <label>Nom</label>
                        <input type="text" class="form-control" placeholder="Votre nom">
                    </div>
                    <div class="form-group">
                        <label>Prénom</label>
                        <input type="text" class="form-control" placeholder="Votre prénom">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Votre email">
                    </div>
                    <div class="form-group">
                        <label>Téléphone</label>
                        <input type="text" class="form-control" placeholder="Votre téléphone">
                    </div>
                    <div class="form-group">
                        <label>Message</label>
                        <textarea rows="4" class="form-control" placeholder="Votre message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Envoyer</button>
                </form>
            </div>    
        </div>
    </div>
  </section>


@endsection