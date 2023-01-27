<?php get_header(); ?>

<div class="container-fluid">
    <div class="row">
        <div class="col-lg-8 offset-lg-2 simple-news-layout">
        <div class="blogs-post-wrapper">
            <h2>FoA In The News</h2>
            <?php
            $args2 = array(
                'paged'  => get_query_var('paged'),
                'cat' => 72,

            );
            $wp_query2 = new WP_Query( $args2 );
            ?>

            <?php if ( $wp_query2->have_posts() ) : while ( $wp_query2->have_posts() ) : $wp_query2->the_post(); ?>

                <div class="blog-post-wrapper">
                        <div class="blog-post-details-wrapper">
                        <div class="date-posted">
                        <?php echo get_the_date('F j, Y') ?>
                            </div>
                            <div class="post-title"><h3><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h3></div>
                        </div>
                </div>
                <?php endwhile; ?>
                <?php wp_reset_query(); ?>
    <div class="page_nav">
        <div class="pagination-links-wrapper">
            <div class="pagination-newer"><i class="fas fa-arrow-left"></i> <?php previous_posts_link( 'Newer Posts' ); ?></div>
            <?php if(get_previous_posts_link() && get_next_posts_link()) echo ' | '; ?>
            <div class="pagination-older"><?php next_posts_link( 'Older Posts' ); ?> <i class="fas fa-arrow-right"></i></div>
        </div>
    </div>
        
<?php endif; ?>
    </div>
        </div>
    </div>
</div>


<?php get_footer(); ?>