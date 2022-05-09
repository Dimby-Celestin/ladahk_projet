@extends('layouts.app')

@section('title')
Posts page
@endsection

@section('content')

<section class="bg-light pt-content pb-5">
    <div class="container">
       
        <div class="row d-flex mb-3">
            <h4>TRANSFERING YOUR BUSINESS</h4>
            <a class="btn btn-primary ml-2" href="/registerForm">Back to form</a>
        </div>
        
      
        @include('includes.errors')
            <form method="post" action="" id="business-form" enctype="multipart/form-data">
                <div class="form-row">
                    <div class="col-md-7 mb-3">
                    <input type="text" name="newOwner" value="{{isset($transfer) ? $transfer->newOwner : ''}}" class="form-control" id="name" placeholder="Name" required>
                    </div>
                    <div class="col-md-7 mb-3">
                        <input type="email" name="newEmail" class="form-control" id="email" value="{{isset($transfer) ? $transfer->newEmail : ''}}" placeholder="Email" required>
                    </div>
                    <div class="col-md-7 mb-3">
                        <input type="text" name="newPhone" class="form-control" id="pone" value="{{isset($transfer) ? $transfer->newPhone : ''}}" placeholder="Phone Number" required>
                    </div>
                </div>
       
        <div class="col-12">
                <hr> 
        </div>

        @if(isset($listeCategories) && count($listeCategories) > 0)
        <div class="row">
            <div>
                <h4 class="mt-4 pb-2">Submit documents for review.</h4> 
                    <form method="post" action="/subCategory" >
                        <div class="row">
                            <div class="col-8">
                                <div class="form-group" >
                                    <select id="subCategory" class="form-control" name="type" onchange="this.form.submit()">
                                        <option>LISTING CLASS TYPE</option>
                                    @foreach ($listeCategories as $listeCategory)
                                        <option value="{{ $listeCategory->id }}" {{$listeCategory->id === $business->business_subcategory_id ? 'selected' : ''}}>{{ $listeCategory->name }}</option>
                                    @endforeach
                                   
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
            </div> 
        </div>
        @endif
        <div class="row">
            <div class="col">
                <div>
                    @foreach ($documents as $document) 
                        <div    class="row" >
                            <div class="col-6 mt-4 d-inline-block"> {{ $document->name }} </div>
                            @if (isset($document->doc))
                            <a class="btn btn-success m-2" href="{{$document->doc->path}}" target="_blank">View</a>
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
                            @else
                            <input 
                            id="input-{{$document->id}}" 
                            type="file" 
                            name="file_data"
                            data-upload-url="/api/v1/ajaxUpload" 
                            data-min-file-count="1"
                            data-show-caption="false" 
                            class="col-3 d-inline-block input-file"/>
                            @endif
                        </div>
                        <hr>
                    @endforeach
                </div>
                <button class="btn btn-primary" type="submit" {{$transfer->status != 'draft' ? 'disabled': ''}}>Submit</button>
                @if($transfer->status == 'pending')
                <p class="text-warning">Your transfer request is under approval</p>
                @endif
                @if($transfer->status == 'refused')
                <p>Your transfer request is refused</p>
                @endif
            </form>
    </div>
  </section>
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
    var transfert = @json($transfer);
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
                obj['transfertId'] = transfert.id;
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
               location.reload();
            }).on('fileuploaderror', function(event, data, msg) {
                console.log('File Upload Error', 'ID: ' + data.fileId + ', Thumb ID: ' + data.previewId);
            });
            
    });
</script>
@endpush
