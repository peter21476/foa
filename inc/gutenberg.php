<?php 

//CUSTOM GUTENBERG FUNCTIONS

function foa_gutenberg_default_colors() {
	add_theme_support('editor-color-palette', array (
        array (
        'name'=> 'White',
        'slug' => 'white',
        'color' => '#ffffff'
        ),
        array (
        'name'=> 'Black',
        'slug' => 'black',
        'color' => '#000000'
        ),
        array (
            'name'=> 'Orange',
            'slug' => 'orange',
            'color' => '#ff9f00'
        ),
        array (
            'name'=> 'Light Gray',
            'slug' => 'lightgray',
            'color' => '#f6f6f6'
        ),
        array (
            'name'=> 'Dark Gray',
            'slug' => 'darkgray',
            'color' => '#c6c6c6'
        )			
    ));
}

add_action('init', 'foa_gutenberg_default_colors');

function foa_gutenberg_blocks() {
    wp_register_script('hero-block-js', get_template_directory_uri() . '/build/index.js', array('wp-blocks', 'wp-editor', 'wp-components'));

    wp_register_style('custom-cta-css', get_template_directory_uri() . '/css/blocks/custom-blocks.css', array());

    register_block_type('foa/foa-hero-block',array(
        'editor_script' => 'hero-block-js',
        'style' => 'custom-cta-css'
    ));

    register_block_type('foa/foa-three-news',array(
        'editor_script' => 'hero-block-js',
        'render_callback' => 'render_three_news_block'
    ));

    register_block_type('foa/foa-two-news',array(
        'editor_script' => 'hero-block-js',
        'render_callback' => 'render_two_news_block'
    ));

    register_block_type('foa/foa-menu-item',array(
        'editor_script' => 'hero-block-js',
        'render_callback' => 'render_menu_item'
    ));

    register_block_type('foa/foa-news-section',array(
        'editor_script' => 'hero-block-js',
        'render_callback' => 'render_foa_news_section'
    ));
}

function render_three_news_block($attributes) {
    $posts = get_posts(

        [
            'category' => $attributes['category'],
            "numberposts" => 3,
        ]
    );
    $category_link = get_category_link( $attributes['category'] );
    ob_start();
    echo '<div class="three-news-column-section">';
    echo '<div class="container">';
    echo '<div class="title-row">';
    echo '<div class="col-one">';
    echo '<h2>'.$attributes['title'].'</h2>';
    echo '</div>';
    echo '<div class="col-two">';
    echo '<h5 class="category-link-desktop"><a href="'.$category_link.'">View More <i class="fas fa-arrow-right"></i></a></h5>';
    echo '</div>';
    echo '</div>';
    echo '<div class="row">';
    foreach( $posts as $post) {
        $get_image = get_the_post_thumbnail_url( $post->ID,'full' );
        $get_date = get_the_date( 'M d', $post->ID );
        $author_id = $post->post_author;
        $get_author = get_the_author_meta('display_name', $author_id);
        $get_permalink = get_permalink($post);
        echo <<<HTML
        <div class="col-lg-4">
            <div class="post-image">
                <img class="img-fluid" src="$get_image" />
            </div>
            <div class="post-title">
            <h3><a href="$get_permalink">$post->post_title</a></h3>
            </div>
            <div class="post-date-author">
                <p>$get_date <span>$get_author</span></p>
            </div>
        </div>
HTML;
    }
    echo '<h5 class="category-link-mobile"><a href="'.$category_link.'">View More <i class="fas fa-arrow-right"></i></a></h5>';
    echo '</div>';
    echo '</div>';
    echo '</div>';
    return ob_get_clean();
}


function render_two_news_block($attributes) {
    $postsOne = get_posts(

        [
            'category' => $attributes['categoryOne'],
            "numberposts" => 3,

        ]
    );
    $postsTwo = get_posts(

        [
            'category' => $attributes['categoryTwo'],
            "numberposts" => 3,

        ]
    );
    $category_linkOne = get_category_link( $attributes['categoryOne'] );
    $category_linkTwo = get_category_link( $attributes['categoryTwo'] );
    ob_start();
    echo '<div class="two-news-column-section">';
    echo '<div class="container">';
    echo '<div class="row">';
    echo '<div class="col-lg-6">';
    echo '<div class="main-two-news-wrapper">';
    echo '<div class="title-row">';
    echo '<div class="col-one">';
    echo '<h2>'.$attributes['titleOne'].'</h2>';
    echo '</div>';
    echo '<div class="col-two">';
    echo '<h5 class="category-link-desktop"><a href="'.$category_linkOne.'">View More <i class="fas fa-arrow-right"></i></a></h5>';
    echo '</div>';
    echo '</div>';
    foreach( $postsOne as $post) {
        $get_date = get_the_date( 'M d', $post->ID );
        $get_permalink = get_permalink($post);
        echo <<<HTML
        <div class="news-item-wrapper">
            <div class="post-date">
                <p>$get_date</p>
            </div>
            <div class="post-title">
                <h3><a href="$get_permalink">$post->post_title</a></h3>
            </div>
        </div>
HTML;
    }
    echo '<h5 class="category-link-mobile"><a href="'.$category_linkOne.'">View More <i class="fas fa-arrow-right"></i></a></h5>';
    echo '</div>';
    echo '</div>';
    echo '<div class="col-lg-6">';
    echo '<div class="main-two-news-wrapper">';
    echo '<div class="title-row">';
    echo '<div class="col-one">';
    echo '<h2>'.$attributes['titleTwo'].'</h2>';
    echo '</div>';
    echo '<div class="col-two">';
    echo '<h5 class="category-link-desktop"><a href="'.$category_linkTwo.'">View More <i class="fas fa-arrow-right"></i></a></h5>';
    echo '</div>';
    echo '</div>';
    foreach( $postsTwo as $post) {
        $get_date = get_the_date( 'M d', $post->ID );
        $get_permalink = get_permalink($post);
        echo <<<HTML
        <div class="news-item-wrapper">
            <div class="post-date">
                <p>$get_date</p>
            </div>
            <div class="post-title">
            <h3><a href="$get_permalink">$post->post_title</a></h3>
            </div>
        </div>
HTML;
    }
    echo '<h5 class="category-link-mobile"><a href="'.$category_linkTwo.'">View More <i class="fas fa-arrow-right"></i></a></h5>';
    echo '</div>';
    echo '</div>';
    echo '</div>';
    echo '</div>';
    echo '</div>';
    return ob_get_clean();
}

function render_menu_item($attributes) {
    $get_menu_item_link = get_permalink( get_page_by_title( $attributes['itemValue'] ) );
    ob_start();
    echo '<a class="secondary-menu-item" href="'.$get_menu_item_link.'">'.$attributes['itemValue'].'</a>';
    return ob_get_clean();
}


function render_foa_news_section($attributes) {
    $postsOne = get_posts(

        [
            'category' => $attributes['categoryOne'],
            "numberposts" => 1,

        ]
    );

    $postsTwo = get_posts(

        [
            'category' => $attributes['categoryOne'],
            'posts_per_page' => 6,
            'paged' => $paged

        ]
    );


    $category_linkOne = get_category_link( $attributes['categoryOne'] );
    ob_start();

    foreach( $postsOne as $post) {
        $get_date = get_the_date( 'M d' );
        $get_permalink = get_permalink($post);
        $thumbnail = get_the_post_thumbnail_url($post);
        $the_title = get_the_title($post);
        $the_excerpt = get_the_excerpt($post);
        $date_posted = get_the_date();
        echo <<<HTML
        <div class="container">
            <div class="col-lg-12 blog-posts-wrapper">
                <div class="blog-main-post-wrapper">
                    <div class="post-image">
                        <img src="$thumbnail" alt="" />
                    </div>
                    <div class="blog-post-details-wrapper">
                        <div class="post-title">
                            <h3>$the_title</h3>
                        </div>
                        <div class="post-excerpt">
                        $the_excerpt
                        </div>
                        <div class="date-posted">
                            $date_posted
                        </div>
                    </div>
                </div>
            </div>
        </div>
HTML;
    }
echo '<div class="container">';
echo '<div class="row">';
echo '<div class="col-lg-12">';
echo '<div class="blogs-post-wrapper">';

    foreach( $postsTwo as $post) {
            $get_date = get_the_date( 'M d' );
            $get_permalink = get_permalink($post);
            $thumbnail = get_the_post_thumbnail_url($post);
            $the_title = get_the_title($post);
            $the_excerpt = get_the_excerpt($post);
            $date_posted = get_the_date();
            echo <<<HTML
            <div class="blog-post-wrapper">
                <div class="post-image">
                    <img src="$thumbnail" alt="" />
                </div>
                <div class="blog-post-details-wrapper">
                    <div class="post-title">
                        <h3>$the_title</h3>
                    </div>
                    <div class="date-posted">
                        $date_posted
                    </div>
                </div>
            </div>
HTML;
        }
echo '</div>';
echo '</div>';
echo '</div>';
echo '</div>';


    return ob_get_clean();
}

add_action('init', 'foa_gutenberg_blocks');