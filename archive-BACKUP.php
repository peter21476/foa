<?php get_header(); ?>

<div class="container">

<div class="row">

<div class="col-lg-12 blog-posts-wrapper">

<?php

$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
$args = array(
    'posts_per_page' => 1,
    'category__not_in' => 6, 
);
$wp_query = new WP_Query( $args );
?>

<?php if ( $wp_query->have_posts() ) : while ( $wp_query->have_posts() ) : $wp_query->the_post(); ?>



<?php $categories = get_the_category();
            $cat_name = $categories[0]->cat_name; ?>

       <div class="blog-main-post-wrapper">
            <div class="post-image">
                        <?php if ( has_post_thumbnail() ) : ?><?php the_post_thumbnail(); ?><?php endif; ?>
            </div> 
            <div class="blog-post-details-wrapper">
                <div class="post-title"><h3><?php the_title(); ?></h3></div>
                <div class="post-excerpt">
                    <?php the_excerpt(); ?>
                </div> 
                <div class="date-posted">
                    <?php echo '<a href="'.get_category_link($categories[0]->cat_ID).'">'. $cat_name . '</a>' ?> on <?php echo the_date() ?>
                </div>
            </div>
    </div>
    <?php endwhile;?>

    <?php wp_reset_query(); ?>

<?php endif; ?>
</div>
</div>
</div>


<div class="container">

<div class="row">

<div class="col-lg-12">

<div class="blogs-post-wrapper">

<?php if ( have_posts() ) : while ( $have_posts() ) : the_post(); ?>

<?php $categories2 = get_the_category();
            $cat_name2 = $categories2[0]->cat_name; ?>

       <div class="blog-post-wrapper">
            <div class="post-image">
                <?php if ( has_post_thumbnail() ) : ?><?php the_post_thumbnail(); ?><?php endif; ?>
            </div> 
            <div class="blog-post-details-wrapper">
                <div class="post-title"><h3><?php the_title(); ?></h3></div>
                <div class="date-posted">
                    <?php echo '<a href="'.get_category_link($categories2[0]->cat_ID).'">'. $cat_name2 . '</a>' ?> on <?php echo get_the_date('F j, Y') ?>
                </div>
            </div>
    </div>
    <?php endwhile; ?>

    <div class="page_nav">
        <?php primarily_pagination(); ?>
    </div>
        
<?php endif; ?>
    </div>
    <?php wp_reset_query(); ?>



</div>
</div>
</div>

<?php get_footer(); ?>