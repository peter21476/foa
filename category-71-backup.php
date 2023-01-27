<?php get_header(); ?>

<div class="container-fluid">
    <div class="row">
        <div class="col-lg-8 offset-lg-1">
        <div class="blog-posts-wrapper">

        <?php
        $args = array(
            'posts_per_page' => 1,
            'cat' => 71,
            'category__not_in' => array( 72, 6 )
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
                        <div class="post-title"><h3><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h3></div>
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
        <div class="blogs-post-wrapper">

            <?php

            $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
            $per_page = 6;
            $default_offset = 1;

            if ($paged == 1) {
            $offset = $default_offset;
            } else {
            $offset = (($paged - 1) * $per_page) + $default_offset;
            }

            $args2 = array(
                'cat' => 71,
                'category__not_in' => array( 72, 6 ),
                'posts_per_page' => $per_page,
                'offset' => $offset,
                'paged' => $paged
            );
            $wp_query2 = new WP_Query( $args2 );
            ?>

            <?php if ( $wp_query2->have_posts() ) : while ( $wp_query2->have_posts() ) : $wp_query2->the_post(); ?>

            <?php $categories2 = get_the_category();
                        $cat_name2 = $categories2[0]->cat_name; ?>

                <div class="blog-post-wrapper">
                        <div class="post-image">
                            <?php if ( has_post_thumbnail() ) : ?><?php the_post_thumbnail(); ?><?php endif; ?>
                        </div> 
                        <div class="blog-post-details-wrapper">
                            <div class="post-title"><h3><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h3></div>
                            <div class="date-posted">
                                <?php echo '<a href="'.get_category_link($categories2[0]->cat_ID).'">'. $cat_name2 . '</a>' ?> on <?php echo get_the_date('F j, Y') ?>
                            </div>
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
        <div class="col-lg-2 inourview-promo-main-wrapper">
            <?php
                $args3 = array(
                    'cat' => 71,
                    'category__not_in' => array( 72, 6 ),
                    'posts_per_page'   => 5,
                );
                $wp_query3 = new WP_Query( $args3 );
                ?>
                <div class="inourview-title-wrapper">
                    <div class="inourview-author-photo">
                        <?php
                            $attachmentID = 502572;
                            $imageSizeName = "thumbnail";
                            $img = wp_get_attachment_image_src($attachmentID, $imageSizeName);
                        ?>

                        <img src="<?php echo $img[0]; ?>" alt="image">
                    </div>
                    <div class="inourview-author-text">
                        <h2>In Our View</h2>
                    </div>
                </div>
                <?php if ( $wp_query3->have_posts() ) : while ( $wp_query3->have_posts() ) : $wp_query3->the_post(); ?>

                    <div class="inourview-promo-wrapper">
                            <div class="blog-post-details-wrapper">
                                <div class="date-posted">
                                    <?php echo get_the_date('F j, Y') ?>
                                </div>
                                <div class="post-title"><h3><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h3></div>
                            </div>
                    </div>
                    <?php endwhile; ?>
                    <?php wp_reset_query(); ?>
                    <?php endif; ?>
        </div>
    </div>
    <div class="row promo-main-wrapper">
        <div class="col-md-4 offset-md-1 promo-first-wrapper">
                <h2>FoA in the News</h2>
                <?php
                $args4 = array(
                    'cat' => 72,
                    'posts_per_page'   => 3,
                );
                $wp_query4 = new WP_Query( $args4 );
                ?>
                <?php if ( $wp_query4->have_posts() ) : while ( $wp_query4->have_posts() ) : $wp_query4->the_post(); ?>

                    <div class="inthenews-promo-wrapper">
                            <div class="blog-post-details-wrapper">
                                <div class="date-posted">
                                    <?php echo get_the_date('F j, Y') ?>
                                </div>
                                <div class="post-title"><h3><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h3></div>
                            </div>
                    </div>
                    <?php endwhile; ?>
                    <?php wp_reset_query(); ?>
                    <?php endif; ?>
        </div>
        <div class="col-md-4 offset-md-1 promo-second-wrapper">
        <h2>Press Releases</h2>
                <?php
                $args5 = array(
                    'cat' => 6,
                    'posts_per_page'   => 3,
                );
                $wp_query5 = new WP_Query( $args5 );
                ?>
                <?php if ( $wp_query5->have_posts() ) : while ( $wp_query5->have_posts() ) : $wp_query5->the_post(); ?>

                    <div class="inthenews-promo-wrapper">
                            <div class="blog-post-details-wrapper">
                                <div class="date-posted">
                                    <?php echo get_the_date('F j, Y') ?>
                                </div>
                                <div class="post-title"><h3><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h3></div>
                            </div>
                    </div>
                    <?php endwhile; ?>
                    <?php wp_reset_query(); ?>
                    <?php endif; ?>
        </div>
    </div>
</div>


<?php get_footer(); ?>