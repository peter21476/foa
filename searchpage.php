<?php
/*
Template Name: Search Page
*/
?>

<?php get_header(); ?>

<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <h1>Search</h1>

            <div class="search-wrapper">
                <input id="search-box" type="text" />
                <div id="search-button">Search</div>
            </div>

            <div id="search-results"><div class="search-results-message">Results</div></div>
        </div>
    </div>
</div>

<?php get_footer();