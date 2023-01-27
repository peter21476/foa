import Moment from 'moment';
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload } = wp.blockEditor;
const { PanelBody, IconButton, RangeControl, SelectControl } = wp.components;

wp.data.select('core').getEntityRecords('taxonomy', 'category');

registerBlockType('foa/foa-three-news', {
    //built-in attributes
    title: 'FoA Three News Block',
    description: 'One row, three columns block to display posts',
    icon: 'book-alt',
    category: 'foa-blocks',


    //custom attributes
    attributes: {
        title: {
            type: 'string',
            selector: 'h2'
        },

        titleColor: {
            type: 'string',
            default: 'black'

        },

        category: {
            type: 'string',
            default: 0
        },

        newsList: {
            type: 'array',
            default: []
        }

    },

    //custom functions

    edit: ({ attributes, setAttributes }) => {


        const {
            title,
            titleColor,
            category,
            newsList
        } = attributes;

        function onChangeTitle(newBody) {
            setAttributes({ title: newBody });
        }

        function onTitleColorChange(newColor) {
            setAttributes({ titleColor: newColor });
        }

        function onDropdownChange(newCategory) {
            let getList = [];
            setAttributes({ category: newCategory });
            fetch(window.location.protocol + '//' + window.location.hostname + '/foa/wp-json/wp/v2/posts?_embed&categories=' + newCategory)
                .then(response => response.json())
                .then(data => {
                    data.map(entry => {
                        return getList.push(entry);
                    });
                    setAttributes({ newsList: getList })
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


        return ([<InspectorControls style={{ marginBottom: '40px' }}>
            <PanelBody title={'Font Color Settings'}>
                <p> <strong> Select a Title Color: </strong></p >
                <ColorPalette value={titleColor}
                    onChange={onTitleColorChange}
                />
            </PanelBody>
            <PanelBody title={'Choose Category'} >
                <SelectControl
                    value={category}
                    label={'Select a Post'}
                    options={getCategories()}
                    onChange={onDropdownChange}
                />
            </PanelBody>
        </InspectorControls>,
        <div className="three-news-column-section" >
            <RichText
                key="editable"
                tagName="h2"
                placeholder="Your Title"
                value={title}
                onChange={onChangeTitle}
                style={{ color: titleColor }}
            />
            <div className="row" > {
                newsList.map(function (item) {
                    if (item.acf.show_on_home_page == 'display') {
                        return (<div className="col-lg-4">
                            <div className="post-image" >
                                <img className="img-fluid" src={item._embedded['wp:featuredmedia']['0'].source_url} /> </div>
                            <div className="post-title">
                                <h3> {item.title.rendered} </h3>
                            </div>
                            <div className="post-date-author">
                                <p> {Moment(item.date).format('MMM D')} < span > {item._embedded.author[0].name} </span></p >
                            </div> </div>
                        )
                    }
                })
            } </div> </div>
        ]);
    },

    //built-in functions
    save: () => {

        return null;
    }
});