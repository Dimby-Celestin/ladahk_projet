
@extends('layouts.app')

@section('title')
Posts page
@endsection

@section('content')
    <div class="container pt-5 pb-5" id="auth">
   
        <div class="row mt-5">
            <div class="col-7 mb-3">
                <h2 class="titleRegisterForm mb-5">Registration of
                    {{ $business->category->name }} under UT of Ladakh.
                </h2>  
                <p class="mb-5 paraRegisterForm">
                    LADAKH sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr
                </p>
                @php
                    $businessCategoryName = $business->category->name;
                @endphp
                @if( $businessCategoryName == "Hotel/Resort/Camp" || $businessCategoryName == 'Restaurant/Cafeteria' || 
                $businessCategoryName == "Guest House" || $businessCategoryName == "Home Stay")
                <div class="zone-highlight">
                    <div class="d-flex align-items-center">
                        <h6 class="fillRegisterForm"> Fill Details to display on Ladakh Tourism website. </h6>
                        <a href="editMyBusiness" class="goToFormRegister btn btn-secondary ml-4 px-4 py-2" >GO TO FORM</a>
                    </div>
                </div> 
                @endif 
            </div>
            <div class="col-5">
                <a href="{{ url('/logout') }}" class="btn btn-light d-inline-block logout">Log out</a>
                <div class="d-inline-block offset-1 logout">{{ $username }}</div>
                <div class="">
                    <div class="card mt-3">
                        <div class="card-body">
                            <h6 class="card-title registerStatus">STATUS</h6>
                            <hr>
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="registerDoc">DOCUMENTS VERIFICATION </h6>
                                <button class="registerPending btn {{$business->documentStatusColor}}">{{strtoupper($business->documentStatus)}}</button>
                                </div>
                                @if($business->documentStatus=="missing documents")
                                    <p> LADAKH sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. </p>
                                    <p> LADAKH sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod. </p>
                                @endif
                            <div class="d-flex align-items-center justify-content-between">
                                <h6 class="registerDoc">DISPLAY VERIFICATION</h6>
                                <button class="registerPending btn  {{$business->displayStatusColor}} ">{{strtoupper($business->displayStatus)}}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
                <hr> 
        </div>
        <div  class="">
        <div class="row zone-highlight">
            @if ($business->status === 'waiting_payment') 
            <div class="col-6"> 
                <form action="/payment" method="POST">
                    <h4>Payments</h4>
                    <button class="btn btn-dark" type="submit">MAKE PAYMENT</button>
                </form>
            </div>
            @endif
            @if ($business->category->ableToTransfertRegistration) 
                <div class="col-6">
                    <form action="/transfer" method="GET">
                        <h4>Transfer Registration</h4>
                        <button class="btn btn-dark" href="transfer" type="submit"  >INITIATE TRANFER</button>
                    </form>
                </div>
            @endif
        </div>
        </div>
        <div  class="row zone-highlight">
            <div class="col-12">
                <div>
                    <h4 class="mt-4 pb-2">Submit documents for review.</h4> 
                        @if(isset($listeCategories) && count($listeCategories) > 0)
                        <form method="post" action="/subCategory" >
                            <div class="row">
                                <div class="col-8">
                                    <div class="form-group">
                                        <select id="subCategory" class="form-control" name="type" onchange="this.form.submit()">
                                            <option value="">LISTING CLASS TYPE</option>
                                        @foreach ($listeCategories as $listeCategory)
                                            <option value="{{ $listeCategory->id }}" {{$listeCategory->id === $business->business_subcategory_id ? 'selected' : ''}}>class {{ $listeCategory->name }}</option>
                                        @endforeach
                                    
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                        @endif
                </div> 
            </div>
            <div class="col">
                <div class="col">
                @include('includes.errors')
                    <div>
                        @foreach ($documents as $document) 
                            <div    class="row" >
                                <div class="col-8 mt-4 d-inline-block log1"> {{ $document->name }} </div>
                                @if (isset($document->doc))
                                <div class="mt-4">
                                    <a class="btn btn-success m-2" href="{{$document->doc->path}}" target="_blank">View</a>
                                </div>
                                <div class="mt-4">
                                    <input 
                                    id="input-{{$document->id}}" 
                                    type="file" 
                                    accept="image/*, application/pdf"
                                    name="file_data"
                                    data-upload-url="/api/v1/ajaxUpload" 
                                    data-min-file-count="1"
                                    data-show-caption="false"
                                    data-browse-label="Update"
                                    data-browse-class="m-2  btn btn-dark" 
                                    class="col-3 m-2 d-inline-block input-file"/>
                                </div>
                                @else
                                <div class="mt-4">
                                    <input 
                                    id="input-{{$document->id}}" 
                                    type="file" 
                                    accept="image/*, application/pdf"
                                    name="file_data"
                                    data-upload-url="/api/v1/ajaxUpload" 
                                    data-min-file-count="1"
                                    data-show-caption="false" 
                                    class="col-3 d-inline-block input-file"/>
                                </div>
                                @endif
                            </div>
                            <hr>
                        @endforeach
                    </div>
                    <div class="row mt-5">
                        <form  action="" method="POST">
                            <div class="col-2">
                                <input type="hidden" name="id" value="1">
                                <button id="submit" class="btn btn-light submitRegisterForm" 
                                {{$business->status == 'under_review' || $business->status == 'waiting_payment'  || $business->status == 'valid' ? 'disabled' : ''}} >SUBMIT</button>
                            </div>
                        </form>
                        @if($business->status == 'waiting_form')
                        <div id="message1" class="col-7">
                            Make sure you’ve submitted all the required forms before submitting, failing to 
                            do so will result in rejection of the form.
                        </div>
                        @endif
                        @if ($business->status == 'under_review')
                        <div id="message2" class="col-6">
                            Form Submitted. You'll receive a text message if your listing is verified or 
                            rejected. You can also keep eye on the status section on top of your account page.
                        </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('after-styles')
<link rel="stylesheet" href="{{ asset('css/auth.css')}}">
@endpush
@push('after-scripts')
<script src="{{ asset('js/auth.js') }}"></script>
@php
$documentsIds = array_map(function($a) {return $a['id'];}, $documents->toArray());
@endphp
<script type="text/javascript">

    var docs = @json($documentsIds);
    $(function() {
        $(".input-file").fileinput({
            showPreview: false,
            maxFileCount: 1,
            showCaption: false,
            dropZoneEnabled: false,
            uploadExtraData: function (previewId, index) {
                var obj = {};
                var idstring = $(this.$element).attr('id');
                var id = idstring.split('-').pop();
                obj['requiredDocumentId'] = id;
                return obj;
            },
            allowedFileTypes: ["image", "pdf"]
        }).on('change', function(event) {
                console.log("change", event);
                var files = event.currentTarget.files;
                var filesize = ((files[0].size/1024)/1024).toFixed(4); // MB
                if (filesize > 1) {
                    Toast.create("Error - too large", 'File should be less than 1Mb', TOAST_STATUS.DANGER);
                    $(this).fileinput('clear');
                }
            }
        ).on('fileuploaded', function(event, previewId, index, fileId) {
                Toast.create("Success", 'File uploaded', TOAST_STATUS.SUCCESS);
                location.reload();
            }).on('fileuploaderror', function(event, data, msg) {
                Toast.create("Error", 'An error occurs during the upload', TOAST_STATUS.DANGER);
                console.log('--- File Upload Error', 'ID: ' + data.fileId + ', Thumb ID: ' + data.previewId);
            });
            
    });
</script>
@endpush