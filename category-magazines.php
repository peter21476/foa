<?php get_header(); ?>

<div class="container-fluid">
    <div class="row">
        <div class="col-lg-8 offset-lg-2">
        <div class="blog-posts-wrapper">
        <h1>Magazines</h1>
        <p><em>Action</em> Line is the quarterly magazine mailed to all Friends of Animals members. Featuring beautiful photos and illustrations, each issue is packed with articles about FoA’s efforts to free animals from cruelty and exploitation and to preserve their increasingly threatened habitats with effective public advocacy and sound legal action. </p>

        <p>Regular sections include the latest stories about <em>People Who Inspire, Wildlife Watch, Sanctuary Life</em> and more – plus ways you can <em>Take Action</em> in your own life and community to care for your pets, protect wildlife in your backyard, reduce or eliminate the use of toxic pesticides, help stave off the climate crisis and follow a healthful, ethical vegan lifestyle.</p> 


        <p>Your donation of at least $25 includes a one-year subscription to <em>Action Line</em>. You can also make a <a target="_blank" href="https://secured.humanesociety.org/page/81903/donate/1?ea.tracking.id=web_donations-FAQ">gift donation</a> of $25 or more in honor of your friend or loved one, and they’ll receive a free one-year subscription to <em>Action Line</em> as well. Got a question, comment or story idea? Email Editor-in-Chief Nicole Rivard at <a href="mailto:mailto:nrivard@friendsofanimals.org">nrivard@friendsofanimals.org</a>.</p> 
 
        <p>View the flipbook versions of our most recent issues presented below, then don’t miss out on the next issue of Action Line by <a target="_blank" href="https://interland3.donorperfect.net/weblink/WebLink.aspx?name=E344259&id=3">making your donation today</a>!</p>

        </div>
        <div class="blogs-post-wrapper">

            <?php
            $args2 = array(
                'paged'  => get_query_var('paged'),
                'cat' => 73,

            );
            $wp_query2 = new WP_Query( $args2 );
            ?>

            <?php if ( $wp_query2->have_posts() ) : while ( $wp_query2->have_posts() ) : $wp_query2->the_post(); ?>

            <?php $categories2 = get_the_category();
                        $cat_name2 = $categories2[0]->cat_name; ?>

                <div class="blog-post-wrapper magazine">
                <a href="<?php the_permalink() ?>"><div class="post-image">
                            <?php if ( has_post_thumbnail() ) : ?><?php the_post_thumbnail(); ?><?php endif; ?>
                        </div> 
                        <div class="blog-post-details-wrapper">
                            <div class="post-title"><h3><?php the_title(); ?></h3></div>
                            <div class="date-posted">
                                <?php echo get_the_date('F j, Y') ?>
                            </div>
                        </div>
                        </a>
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