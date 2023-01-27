<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<section class="page-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <?php echo the_content() ?>
            </div>
        </div>
    </div>
</section>

<?php endwhile; else : ?>
	<p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>

<?php get_footer(); ?>