<?php
/*
Template Name: Frame Template
*/
?>

<?php get_header(); ?>
<div class="container page-frame">
<div class="row">
<div class="col-md-12">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <h2><?php the_title(); ?></h2>
      <?php the_content(); ?>

    <?php endwhile; else: ?>

      <h2><?php esc_html_e( '404 Error', 'phpforwp' ); ?></h2>
      <p><?php esc_html_e( 'Sorry, content not found.', 'phpforwp' ); ?></p>

<?php endif; ?>
</div>
</div>
</div>
<?php get_footer(); ?>