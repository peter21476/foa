const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload, InnerBlocks } = wp.blockEditor;
const { PanelBody, IconButton, RangeControl, TextControl } = wp.components;

const ALLOWED_BLOCKS = ['foa/foa-multi-row-block'];

registerBlockType('foa/foa-multi-row-blocks', {
    //built-in attributes
    title: 'FoA Multi Row Block',
    description: 'Multi Row Block with image on the left or right',
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
            <div className="foa-section-container container">
                <InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
            </div>
        ]);
    },

    //built-in functions
    save: ({ attributes }) => {

        const {
            fontSize
        } = attributes;


        return (
            <div className="foa-section-container container">
                <InnerBlocks.Content />
            </div>
        );
    }
});