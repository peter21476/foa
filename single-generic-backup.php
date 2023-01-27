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
            <p>Published in <?php echo '<a href="'.get_category_link($categories[0]->cat_ID).'">'. $cat_name . '</a>' ?> on <?php echo the_date() ?></p>
            </div>
            <div class="post-image">
                <?php if ( has_post_thumbnail() ) : ?><?php the_post_thumbnail(); ?><?php endif; ?>
            </div>
            <div class="post-content">
                <?php the_content(); ?> 
            </div>
            <div class="post-author">
            <?php
            $user = wp_get_current_user();
            
            if ( $user ) :
                ?>
                <?php
                if (get_the_author_meta('email')) {
                echo get_avatar(get_the_author_meta('email'), '60');
                }
                ?>
            <?php endif; ?>
                    <p>by <?php echo get_the_author_meta('display_name', $author_id); ?><p>

            </div>
        </div>

        </div>

        <?php endwhile; else: ?>


<?php endif; ?>
</div>
</div>


<?php get_footer(); ?>