import Moment from 'moment';
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload } = wp.blockEditor;
const { PanelBody, IconButton, RangeControl, SelectControl } = wp.components;

wp.data.select('core').getEntityRecords('taxonomy', 'category');

registerBlockType('foa/foa-news-section', {
    //built-in attributes
    title: 'FoA News Section',
    description: 'The main block for News and In Our View',
    icon: 'book-alt',
    category: 'foa-blocks',


    //custom attributes
    attributes: {

        categoryOne: {
            type: 'string',
            default: 0
        },


        newsListOne: {
            type: 'array',
            default: []
        },
    },

    //custom functions

    edit: ({ attributes, setAttributes }) => {


        const {
            categoryOne,
            newsListOne
        } = attributes;

        function onDropdownChangeOne(newCategoryOne) {
            let getListOne = [];
            setAttributes({ categoryOne: newCategoryOne });
            fetch(window.location.protocol + '//' + window.location.hostname + '/foa/wp-json/wp/v2/posts?_embed&categories=' + newCategoryOne)
                .then(response => response.json())
                .then(data => {
                    data.map(entry => {
                        return getListOne.push(entry);
                    });
                    setAttributes({ newsListOne: getListOne })
                });
        }

        function getCategories() {
            let options = [{ value: 0, label: 'All' }];
            let categories = wp.data.select('core').getEntityRecords('taxonomy', 'category');
            categories.forEach((category) => {
                options.push({ value: category.id, label: category.name });
            });
            return options;
        }

        return ([
            <InspectorControls style={{ marginBottom: '40px' }}>
                <PanelBody title={'Choose Category For The First Box'}>
                </PanelBody>
            </InspectorControls>,
            <div className="foa-news-section">
                <h2>News Blog</h2>
                <SelectControl
                    value={categoryOne}
                    label={'Select a Post'}
                    options={getCategories()}
                    onChange={onDropdownChangeOne}
                />
                <div className="row">
                    {newsListOne.map(function (item) {
                        return (
                            <div className="col-lg-4">
                                <div className="post-title">
                                    <h3>{item.title.rendered}</h3>
                                </div>
                                <div className="post-date-author">
                                    <p>{Moment(item.date).format('MMM D')} <span>{item._embedded.author[0].name}</span></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        ]);
    },

    //built-in functions
    save: ({ attributes }) => {

        return null;
    }
});