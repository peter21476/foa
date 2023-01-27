import Moment from 'moment';
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload } = wp.blockEditor;
const { PanelBody, IconButton, RangeControl, SelectControl } = wp.components;

wp.data.select('core').getEntityRecords('taxonomy', 'category');

registerBlockType('foa/foa-two-news', {
    //built-in attributes
    title: 'FoA Two News Block',
    description: 'One row, two columns block to display posts',
    icon: 'book-alt',
    category: 'foa-blocks',


    //custom attributes
    attributes: {
        titleOne: {
            type: 'string',
            selector: 'h2'
        },

        titleTwo: {
            type: 'string',
            selector: 'h2'
        },

        titleColor: {
            type: 'string',
            default: 'black'

        },

        categoryOne: {
            type: 'string',
            default: 0
        },

        categoryTwo: {
            type: 'string',
            default: 0
        },

        newsListOne: {
            type: 'array',
            default: []
        },

        newsListTwo: {
            type: 'array',
            default: []
        }

    },

    //custom functions

    edit: ({ attributes, setAttributes }) => {


        const {
            titleOne,
            titleTwo,
            titleColor,
            categoryOne,
            categoryTwo,
            newsListOne,
            newsListTwo
        } = attributes;

        function onChangeTitleOne(newBodyOne) {
            setAttributes({ titleOne: newBodyOne });
        }

        function onChangeTitleTwo(newBodyTwo) {
            setAttributes({ titleTwo: newBodyTwo });
        }

        function onTitleColorChange(newColor) {
            setAttributes({ titleColor: newColor });
        }

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

        function onDropdownChangeTwo(newCategoryTwo) {
            let getListTwo = [];
            setAttributes({ categoryTwo: newCategoryTwo });
            fetch(window.location.protocol + '//' + window.location.hostname + '/foa/wp-json/wp/v2/posts?_embed&categories=' + newCategoryTwo)
                .then(response => response.json())
                .then(data => {
                    data.map(entry => {
                        return getListTwo.push(entry);
                    });
                    setAttributes({ newsListTwo: getListTwo })
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
                <PanelBody title={'Font Color Settings'}>
                    <p><strong>Select a Title Color:</strong></p>
                    <ColorPalette value={titleColor} onChange={onTitleColorChange} />
                </PanelBody>
                <PanelBody title={'Choose Category For The First Box'}>
                    <SelectControl
                        value={categoryOne}
                        label={'Select a Post'}
                        options={getCategories()}
                        onChange={onDropdownChangeOne}
                    />
                </PanelBody>
                <PanelBody title={'Choose Category For The Second Box'}>
                    <SelectControl
                        value={categoryTwo}
                        label={'Select a Post'}
                        options={getCategories()}
                        onChange={onDropdownChangeTwo}
                    />
                </PanelBody>
            </InspectorControls>,
            <div className="two-news-column-section">
                <RichText
                    key="editable"
                    tagName="h2"
                    placeholder="Your Title"
                    value={titleOne}
                    onChange={onChangeTitleOne}
                    style={{ color: titleColor }}
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
                <RichText
                    key="editable"
                    tagName="h2"
                    placeholder="Your Title"
                    value={titleTwo}
                    onChange={onChangeTitleTwo}
                    style={{ color: titleColor }}
                />
                <div className="row">
                    {newsListTwo.map(function (item) {
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