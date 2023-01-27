<?php get_header(); ?>

<div class="container">

<div class="row">

<div class="col-lg-12">

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <?php $categories = get_the_category();
            $cat_name = $categories[0]->cat_name; ?>

        <div class="post-wrapper">
            <div class="post-title">
            <h2><?php the_title(); ?></h2>
            <p>Published on <?php echo the_date() ?></p>
            </div>
            <div class="post-content">
                <?php the_content(); ?> 
            </div>
        </div>

        </div>

        <?php endwhile; else: ?>


<?php endif; ?>
</div>
</div>


<?php get_footer(); ?>