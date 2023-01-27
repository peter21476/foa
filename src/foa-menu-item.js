const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload } = wp.blockEditor;
const { PanelBody, IconButton, RangeControl, TextControl, SelectControl } = wp.components;

registerBlockType('foa/foa-menu-item', {
    //built-in attributes
    title: 'FoA Custom Menu Item',
    parent: ['foa/foa-menu-block'],
    description: 'A menu item',
    category: 'foa-blocks',


    //custom attributes
    attributes: {
        pagesList: {
            type: 'array',
            default: []
        },
        itemValue: {
            type: 'string',
            default: ''
        }

    },

    //custom functions

    edit: ({ attributes, setAttributes }) => {

        const {
            pagesList,
            itemValue

        } = attributes;

        let getList = [];
        fetch(window.location.protocol + '//' + window.location.hostname + '/wp-json/wp/v2/pages/?per_page=100')
            .then(response => response.json())
            .then(data => {
                data.map(entry => {
                    return getList.push(entry);
                });
                setAttributes({ pagesList: getList })
            });

        function onDropDownChange(e) {
            setAttributes({ itemValue: e.target.value });
        }



        return ([
            <InspectorControls style={{ marginBottom: '40px' }}>
                <PanelBody title={'Button Link'}>
                    <p><strong>Paste Link</strong></p>
                </PanelBody>
            </InspectorControls>,
            <div className="foa-section-container container">
                <div className="row">
                    <div className="foa-hero-text col-md-5 my-auto">
                        <select onChange={onDropDownChange} value={itemValue}>
                            {pagesList.map(item => {
                                return (
                                    <option values={item.id}>{item.title.rendered}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
        ]);
    },

    //built-in functions
    save: () => {
        return null;
    }
});