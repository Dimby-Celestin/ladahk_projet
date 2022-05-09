@extends('layouts.app')

@section('title')
Posts page
@endsection

@section('content')

<section class="bg-light pt-content pb-5" id="stays">
    <div class="container">
      <div class="row mt-5 ">
        <div class="col-lg-12">
          <div class="mx-auto mb-3 mb-lg-0 mb-lg-3">
            <h1 class="sStays  text-left mt-5"><span>60+</span></h1>  
            <div class="d-flex align-items-center">
                <h1 class="titleStays text-left text-dark-4 mr-5">STAYS NEARBY {{isset($input['city']) ? strtoupper($input['city']) : 'LADAKH'}}</h1>
                <p class="text-left descriptionMyBusiness d-block">
                    /Booking of rooms to be done at the stay’s website or in person.
                </p>
            </div>
          </div>
        </div>        
        <form class="col-lg-12 mt-2 pl-0 hr d-flex pb-4"> 
                <div class="dropdown mr-3">
                    <select class="btn btn-outline-dark select-pro" name="price" onchange="this.form.submit()">
                        <option value="" >Price</option>
                        <option value="asc" {{isset($input['price']) && $input['price'] == 'asc' ? 'selected' : ''}}>LOW TO HIGH</option>
                        <option value="desc" {{isset($input['price']) && $input['price'] == 'desc' ? 'selected' : ''}}>HIGH TO LOW</option>
                    </select>
                </div>

                <div class="dropdown ml-4 mr-3">
                    <select class="btn btn-outline-dark select-pro" name="city"  onchange="this.form.submit()">
                        <option value="leh" {{isset($input['city']) && $input['city'] == 'leh' ? 'selected' : ''}}>Leh</option>
                        <option value="test" {{isset($input['city']) && $input['city'] == 'test' ? 'selected' : ''}}>Test</option>
                    </select>
                </div>

                <div class="dropdown ml-4 mr-3">
                    <select name="type"  onchange="this.form.submit()" class="btn btn-outline-dark select-pro" id="Category" name="type">
                        <option value="">All</option>
                        @foreach ($types as $type)
                        <option value="{{ $type->id }}"  {{isset($input['type']) && $input['type'] == $type->id ? 'selected' : ''}}>{{ $type->name }}</option>
                        @endforeach
                    </select>
                </div>
                @if (isset($class) && count($class) > 0)
                <div class="dropdown ml-4">
                    <select onchange="this.form.submit()" name="class" id ="subCat" class="btn btn-outline-dark select-pro">
                        <option value="">Class</option>
                        @foreach ($class as $type)
                        <option value="{{ $type->id }}"  {{isset($input['class']) && $input['class'] == $type->id ? 'selected' : ''}}>{{ $type->name }}</option>
                        @endforeach
                    </select>                
                </div>
                @endif
            </form>  
        <div class="col-lg-12 mt-5 pl-5 pr-5 pb-4 hr"> 
            <div class="row pl-5 pr-5">
                @foreach($business as $busines) 
                    <div class="col-lg-4 col-sm-6 col-12 mt-3 mb-3">
                        <div class="card-pro">                    
                            <a href="{{url('/staysDetail/'.$busines->id)}}">
                                @if(isset($busines->randomBanner))
                                    <img class="d-block w-100" src="{{$busines->randomBanner->realPath }}" alt="image stays">
                                @else
                                    <img class="d-block w-100" src="/img/unnamed.png" alt="image stays">
                                @endif
                            </a>
                        </div>     
                        <div class="card-pro-text">
                                @php 
                                    $id = $busines->id;
                                @endphp
                                <a href='{{url("/staysDetail/$busines->id")}}'>
                                    <h3 class="businessCatName">  {{$busines->category["name"]}} </h3>     
                                    <h4 class="businessName">{{ isset($busines->property_name) ? $busines->property_name : $busines->name }}</h4>  
                                    <div class="spacer-hr"></div>
                                    @php
                                        $boptionNumber = count($busines->highlights);
                                    @endphp
                                
                                    @for($i = 0; $i < $boptionNumber; $i++)
                                        <h3 class="businessHigh"> 
                                            {{$busines-> highlights[$i]["name"]}}・
                                        </h3> 
                                    @endfor                       
                                    <h4 class="businessNight">₹ {{$busines->price }} / <span>night</span></h4> 
                                </a>
                        </div>     
                    </div>
                @endforeach        
            </div>
        </div>
        <div class="col-lg-12 pb-4 mt-5 footer-pager text-center"> 

            <nav class="mx-auto text-center">
                {{ $business->links() }}
            </nav>
            <h4 class="text-center mt-3">1 to {{ $business->count()}} of {{$business->total()}} places to stay</h4> 
        </div>

      </div>
    </div>
  </section>
@endsection

@push('after-scripts')



@endpush