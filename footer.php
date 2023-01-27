<footer>
    <div class="container">
        <div class="row">
            <div class="col-lg-2">
                <img src="<?php echo Kirki::get_option('foatheme_kirki_fields', 'foa_footer_logo'); ?>" alt="logo" />
            </div>
            <div class="col-lg-10">
            <?php 
                    wp_nav_menu (
                        array (
                            'theme_location'=> 'footer-menu' ,
                            'menu_class' => 'footer-menu'
                                            )
                    );
                ?>
            </div>
        </div>
        <div class="row last-footer-row">
                    <div class="col-md-2 order-xs-last">
                        <div class="social-media-wrapper">
                            <a target="_blank" href="https://twitter.com/FoAorg"><i class="fab fa-twitter"></i></a>
                            <a target="_blank" href="https://www.instagram.com/foaorg"><i class="fab fa-instagram"></i></a>
                            <a target="_blank" href="https://www.youtube.com/user/FriendsofAnimals"><i class="fab fa-youtube"></i></a>
                            <a target="_blank" href="https://www.facebook.com/FriendsOfAnimalsOrg/"><i class="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                    <div class="col-md-10">
                        <div class="footer-menu-wrapper">
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
    </div>

</footer>

<?php wp_footer() ?>