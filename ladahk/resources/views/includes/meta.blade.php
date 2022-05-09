@php
if(!isset($meta_page_type)){
    $meta_page_type = 'website';
}
@endphp

@switch($meta_page_type)
    @case('website')
        <meta property="og:type" content="website" />
        @break

    @case('article')
        {{-- Facebook Meta --}}
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="{{$$module_name_singular->published_at}}" />
        <meta property="article:modified_time" content="{{$$module_name_singular->updated_at}}" />
        <meta property="article:author" content="{{isset($$module_name_singular->created_by_alias)? $$module_name_singular->created_by_alias : $$module_name_singular->created_by_name}}" />
        <meta property="article:section" content="{{$$module_name_singular->category_name}}" />
        @foreach ($$module_name_singular->tags as $tag)
        <meta property="article:tag" content="{{$tag->name}}" />
        @endforeach

        @break

    @case('profile')
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="{{$$module_name_singular->first_name}}" />
        <meta property="profile:last_name" content="{{$$module_name_singular->last_name}}" />
        <meta property="profile:username" content="{{$$module_name_singular->email}}" />
        <meta property="profile:gender" content="{{$$module_name_singular->gender}}" />
        @break

    @default

@endswitch

    <!-- Facebook Meta -->
    <meta property="og:url" content="{{url()}}" />
    <meta property="og:title" content="@yield('title') | {{ config('app.name', 'Laravel Starter') }}" />
    <meta property="og:site_name" content="" />
    <meta property="og:description" content="" />
    <meta property="og:image" content="" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <!-- Twitter Meta -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="">
    <meta name="twitter:url" content="{{url()}}" />
    <meta name="twitter:creator" content="">
    <meta name="twitter:title" content="@yield('title') | {{ config('app.name', 'Laravel Starter') }}">
    <meta name="twitter:description" content="">
    <meta name="twitter:image" content="">

    <!--canonical link-->
    <link type="text/plain" rel="author" href="{{asset('humans.txt')}}" />
    <link rel="canonical" href="{{url()}}">
