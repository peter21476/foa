<?php
/*
Template Name: Green Template
*/
?>

<?php get_header('green'); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

      <?php the_content(); ?>

    <?php endwhile; else: ?>

      <h2><?php esc_html_e( '404 Error', 'phpforwp' ); ?></h2>
      <p><?php esc_html_e( 'Sorry, content not found.', 'phpforwp' ); ?></p>

<?php endif; ?>

<?php get_footer(); ?>