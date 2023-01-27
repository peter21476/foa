<?php

//Load StyleSheets
function loadCSS() {
    wp_register_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css', array(), false, 'all');
    wp_enqueue_style('bootstrap');

    wp_register_style('main', get_template_directory_uri() . '/css/main.css', array(), false, 'all');
    wp_enqueue_style('main');

    wp_register_style('fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css', array(), false, 'all');
    wp_enqueue_style('fontawesome');
}
add_action('wp_enqueue_scripts', 'loadCSS');

//Load CSS for Admin
function adminCSS() {
    wp_register_style('admin-main', get_template_directory_uri() . '/css/main-admin.css', array(), false, 'all');
    wp_enqueue_style('admin-main');

    wp_register_style('woocommerce-fix', get_template_directory_uri() . '/css/woocommerce-fix.css', array(), false, 'all');
    wp_enqueue_style('woocommerce-fix');

    wp_register_style('fontawesome-admin', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css', array(), false, 'all');
    wp_enqueue_style('fontawesome-admin');

}
add_action('admin_enqueue_scripts', 'adminCSS');

//Load Google Fonts
function loadGoogleFonts() {
    wp_register_style('googlefonts1', 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap', true);
    wp_enqueue_style('googlefonts1');
}
add_action('wp_enqueue_scripts', 'loadGoogleFonts');

//Load Google Fonts
function loadFonts() {
    wp_register_style('AllFonts', 'https://use.typekit.net/tls4txc.css', true);
    wp_enqueue_style('AllFonts');
}
add_action('wp_enqueue_scripts', 'loadFonts');

//Load Javascript
function loadJS() {
    
    wp_enqueue_script( 'boot2','https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js', array('jquery'));
    wp_enqueue_script( 'boot3','https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js', array('jquery'));
    wp_enqueue_script( 'frontend-js', get_template_directory_uri() . '/js/frontend.js', array('jquery'));
    wp_enqueue_script( 'moment-js', get_template_directory_uri() . '/js/moment.js', array('jquery'));
}
add_action('wp_enqueue_scripts', 'loadJS');

//Fix for Screen Options
function fixOptions() {
    wp_register_script('scripts-js', get_template_directory_uri() . '/js/scripts.js', 'jquery', false, true);
    wp_enqueue_script('scripts-js');
}

add_action('admin_enqueue_scripts', 'fixOptions');

//Theme Options
add_theme_support('menus');
add_theme_support('post-thumbnails');
add_theme_support('widgets');

add_theme_support( 'woocommerce' );
add_theme_support( 'wc-product-gallery-zoom' );
add_filter('woocommerce_create_account_default_checked', '__return_true');

//Menus
register_nav_menus(
    array(
        'top-menu' => 'Top Menu Location',
        'main-menu' => 'Main Menu Location',
        'footer-menu' => 'Footer Menu Location',
        'mobile-menu' => 'Mobile Menu Location'
    )
);



// Numbered Pagination
function primarily_pagination() {
	global $wp_query;
		$big = 999999999; // need an unlikely integer
			echo paginate_links( array(
			'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
			'format' => '?paged=%#%',
			'current' => max( 1, get_query_var('paged') ),
			'total' => $wp_query->max_num_pages
		) );
}




//Custom Gutenberg Blocks
require get_template_directory() . '/inc/gutenberg.php';


function foatheme_kirki_sections( $wp_customize ) {
	/**
	 * Add panels
	 */
    
    $wp_customize->add_section( 'foa_basic_settings', array(
        'title'       => __( 'FoA Basic Settings', 'kirki' ),
        'priority'    => 10,
        'panel'       => '',
    ) );

    $wp_customize->add_section( 'foa_status_bar', array(
        'title'       => __( 'FoA Status Bar', 'kirki' ),
        'priority'    => 20,
        'panel'       => '',
    ) );

}
add_action( 'customize_register', 'foatheme_kirki_sections' );

function foatheme_kirki_fields( $fields ) {
    //BASIC SETTINGS

    $fields[] = array(
        'type'        => 'color',
        'settings'    => 'foa_color_1',
        'label'       => __( 'Choose Your Primary Color', 'kirki' ),
        'description' => __( 'Pick Up Your Color', 'kirki' ),
        'section'     => 'foa_basic_settings',
        'priority'    => 12,
        'default'     => '#000000'
    );

    $fields[] = array(
        'type'        => 'color',
        'settings'    => 'foa_color_2',
        'label'       => __( 'Choose Your Secondary Color', 'kirki' ),
        'description' => __( 'Pick Up Your Color', 'kirki' ),
        'section'     => 'foa_basic_settings',
        'priority'    => 14,
        'default'     => '#000000'
    );

    $fields[] = array(
        'type'        => 'image',
        'settings'    => 'foa_top_logo',
        'label'       => __( 'Logo For Gray Background', 'kirki' ),
        'description' => __( 'Pick Up Your Logo', 'kirki' ),
        'section'     => 'foa_basic_settings',
        'priority'    => 16,
        'default'     => ''
    );

    $fields[] = array(
        'type'        => 'image',
        'settings'    => 'foa_top_logo_color',
        'label'       => __( 'Logo For Colorful Background', 'kirki' ),
        'description' => __( 'Pick Up Your Logo', 'kirki' ),
        'section'     => 'foa_basic_settings',
        'priority'    => 17,
        'default'     => ''
    );

    $fields[] = array(
        'type'        => 'image',
        'settings'    => 'foa_footer_logo',
        'label'       => __( 'Logo For Footer', 'kirki' ),
        'description' => __( 'Pick Up Your Logo', 'kirki' ),
        'section'     => 'foa_basic_settings',
        'priority'    => 18,
        'default'     => ''
    );

    //STATUS BAR

    $fields[] = array(
        'type'        => 'checkbox',
        'settings'    => 'foa_status_checkbox',
        'label'       => __( 'Status Enable', 'kirki' ),
        'description' => __( 'Check to enable', 'kirki' ),
        'section'     => 'foa_status_bar',
        'priority'    => 15,
        'default'     => false,
    );

    
    $fields[] = array(
        'type'        => 'editor',
        'settings'    => 'foa_status_editor',
        'label'       => __( 'Status Editor', 'kirki' ),
        'description' => __( 'Type your text', 'kirki' ),
        'section'     => 'foa_status_bar',
        'priority'    => 20,
        'default'     => ''
    );

    
    return $fields;

}
add_filter( 'kirki/fields', 'foatheme_kirki_fields' );

function foa_block_category( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'foa-blocks',
				'title' => __( 'FoA Blocks', 'foa-blocks' ),
			),
		)
	);
}
add_filter( 'block_categories', 'foa_block_category', 10, 2);


add_action( 'wp_enqueue_scripts', function() {

    wp_enqueue_style( 'dashicons' );

} );


//ADDITIONAL WOOCOMMERCE FUNCTIONS

add_action( 'after_setup_theme', 'foa_setup' );
 
function foa_setup() {
add_theme_support( 'wc-product-gallery-zoom' );
add_theme_support( 'wc-product-gallery-lightbox' );
add_theme_support( 'wc-product-gallery-slider' );
}

//REMOVE CATEGORIES FROM SHOP PAGE
add_filter( 'get_terms', 'ts_get_subcategory_terms', 10, 3 );
    function ts_get_subcategory_terms( $terms, $taxonomies, $args ) {
          $new_terms = array();
          // if it is a product category and on the shop page
          if ( in_array( 'product_cat', $taxonomies ) && ! is_admin() && is_shop() ) {
             foreach ( $terms as $key => $term ) {
                 if ( ! in_array( $term->slug, array( 'certificates', 'clearance' ) ) ) {        //pass the slug name here
                    $new_terms[] = $term;
                 }
          }
          $terms = $new_terms;
    }
    return $terms;
}

//UPDATE LOGIN BUTTON WHEN USER IS LOGGED IN
add_filter( 'wp_nav_menu_items', 'dynamic_label_change', 10, 2 ); 
 
function dynamic_label_change( $items, $args ) { 
   if ( is_user_logged_in() ) { 
      $items = str_replace( "Login", "Log Out", $items ); 
   } 
   return $items; 
} 


function sparkling_category_id( $classes ) {
	global $post;
	foreach ( get_the_category( $post->ID ) as $category ) {
		$classes[] = $category->category_nicename;
	}
	return $classes;
}
add_filter( 'body_class', 'sparkling_category_id' );


add_filter( 'single_template', 'my_single_template' );
function my_single_template($single_template)
{
    if (in_category(73)) {
        $file = get_template_directory().'/single-magazine.php';
        if ( file_exists($file) ) {
            return $file;
        }
    }
    return $single_template;
}


function foa_display_gravatar() { 
    global $current_user;
    get_currentuserinfo();
    // Get User Email Address
    $getuseremail = $current_user->user_email;
    // Convert email into md5 hash and set image size to 32 px
    $usergravatar = 'http://www.gravatar.com/avatar/' . md5($getuseremail) . '?s=32';
    echo '<img src="' . $usergravatar . '" class="wpb_gravatar" />';
}


// Remove the category count for WooCommerce categories
add_filter( 'woocommerce_subcategory_count_html', '__return_null' );

