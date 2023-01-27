const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload, InnerBlocks } = wp.blockEditor;
const { PanelBody, IconButton, RangeControl, TextControl } = wp.components;

const ALLOWED_BLOCKS = ['foa/foa-menu-item'];

registerBlockType('foa/foa-menu-block', {
    //built-in attributes
    title: 'FoA Menu Block',
    description: 'FoA Custom Menu Block',
    icon: 'book-alt',
    category: 'foa-blocks',


    //custom attributes
    attributes: {

        fontSize: {
            type: 'number',
            default: 20
        },

    },

    //custom functions

    edit: ({ attributes, setAttributes }) => {

        const {
            fontSize

        } = attributes;

        function onFontSizeChange(newFontSize) {
            setAttributes({ fontSize: newFontSize });
        }



        return ([
            <InspectorControls style={{ marginBottom: '40px' }}>
                <PanelBody title={'Font Size'}>
                    <p><strong>Select Font Size</strong></p>
                    <RangeControl
                        label={'Font Size'}
                        value={fontSize}
                        onChange={onFontSizeChange}
                        min={0}
                        max={100}
                        step={1}
                    />
                </PanelBody>
            </InspectorControls>,
            <div className="foa-section-container container-fluid">
                <div className="container">
                    <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
                </div>
            </div>
        ]);
    },

    //built-in functions
    save: ({ attributes }) => {

        const {
            fontSize
        } = attributes;


        return (
            <div className="foa-section-container container-fluid">
                <div className="container">
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    }
});