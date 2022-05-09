@if (session('error')  !== null)
<div class="alert alert-danger" role="alert">
    <p>
        <i class="fa fa-exclamation-triangle"></i>
        {{session('error')}}
    </p>
    
</div>
@endif
@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
@if (session('success')  !== null)
<div class="alert alert-success" role="alert">
    <p>
        <i class="fa fa-check"></i>
        {{session('success')}}
    </p>
    
</div>
@endif