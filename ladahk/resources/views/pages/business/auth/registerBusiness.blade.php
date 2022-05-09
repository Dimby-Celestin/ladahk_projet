
@extends('layouts.app')

@section('title')
Posts page
@endsection

@section('content')
    <div class="container pt-5 pb-5" id="auth">
        <div class="row mt-5">
            <h3 class="title1 pt-5 col-12">Welcome {{$business->name}}.</h3>  
            <p class="col-12 mb-5 p1 mt-5"> Register for an account using the details below.
                Once approved by the admin, you can fill forms and register your property/Business 
            </p>
        </div>
        <form method="post" action="" >
            <div class="row">
                <div class="col-8">
                    @include('includes.errors')
                </div>
                <div class="col-6">
                    <div class="form-group" >
                        <select class="form-control" name="type">
                            <option>Registering for</option>
                            @foreach ($businessCategories as $businessCategory)
                                <option value="{{ $businessCategory->id }}" {{isset($business->category) && $business->category->id === $businessCategory->id ? 'selected' : '' }}>
                                    {{ $businessCategory->name }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="col">
                    <button type="submit" name="submit" class="btn btn-primary1 btn-theme px-3 py-2" 
                    {{isset($business->category) && $business->category->id ? 'disabled="true"' : '' }}>Submit</button>
                </div>
                @if (isset($business->category) && $business->category->id && $business->status =='registering') 
                    <div class="alert alert-warning">
                        You are already submit the business type, you are now awaiting for approval before continuing...
                    </div>
                @endif
            </div>
        </form>
    </div>
@endsection