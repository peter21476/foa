<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:title" content="Friends of Animals" />
    <meta property="og:description" content="FoA has been working to free animals from cruelty and institutionalized exploitation around the world since 1957." />
    <meta property="og:image" content="" />
    <script async src='https://tag.simpli.fi/sifitag/9364f750-2ec1-013a-bfc8-06a60fe5fe77'></script>
    <title><?php bloginfo('name'); ?> | <?php is_front_page() ? bloginfo('description') : wp_title(); ?></title>

    <?php wp_head() ?>

</head>
<body>
<div class="body-inner magenta-template">
<header>
<?php $value = get_theme_mod( 'foa_status_checkbox', true ); ?>
<section class="<?php echo ( $value ) ? 'checkbox-on' : 'checkbox-off'; ?>">
    <?php if ( Kirki::get_option('foatheme_kirki_fields', 'foa_status_editor' ) ) {
        $foa_status_editor_text = Kirki::get_option('foatheme_kirki_fields', 'foa_status_editor');
        echo $foa_status_editor_text;
    } ?>
    <p class="close-status">X</p>
</section>
<section class="top-bar-section desktop-menu">
    <div class="container">
        <div class="row desktop-menu">
            <div class="col-lg-12">
                <?php 
                    wp_nav_menu (
                        array (
                            'theme_location'=> 'top-menu' ,
                            'menu_class' => 'top-bar'
                                            )
                    );
                ?>
            </div>
        </div>
    </div>
</section>
<section class="main-menu-section desktop-menu">
<div class="container">
    <div class="row">
        <div class="col-lg-3">
            <div class="top-logo">
            <a href="<?php echo home_url(); ?>"><img src="<?php echo Kirki::get_option('foatheme_kirki_fields', 'foa_top_logo_color'); ?>" alt="logo" /></a>
            </div>
        </div>            
        <div class="col-lg-9">
            <?php 
                wp_nav_menu (
                    array (
                        'theme_location'=> 'main-menu' ,
                        'menu_class' => 'main-menu'
                    )
                );
            ?>
        </div>
    </div>
</div>
</section>
<section class="mobile-menu">
    <div class="container">
    <div class="row">
        <div class="col-1 text-center">
        <i class="fas fa-bars"></i>
            <div class="mobile-menu-wrapper">
            <?php 
                    wp_nav_menu (
                        array (
                            'theme_location'=> 'main-menu' ,
                            'menu_class' => 'mobile-main-menu'
                        )
                    );
                ?>
            <?php 
                        wp_nav_menu (
                            array (
                                'theme_location'=> 'top-menu' ,
                                'menu_class' => 'mobile-top-bar'
                                                )
                        );
            ?>
            </div>
        </div>
        <div class="col-5 text-center">
            <div class="top-logo">
            <a href="<?php echo home_url(); ?>"><img src="<?php echo Kirki::get_option('foatheme_kirki_fields', 'foa_top_logo_color'); ?>" alt="logo" /></a>
            </div>
        </div>
        <div class="col-6 text-right">
            <i class="fas fa-search"></i>
            <a href="" class="btn btn-donate">Donate</a>
        </div>
    </div>
    </div>
</section>
</header>