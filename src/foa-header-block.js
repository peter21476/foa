const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload } = wp.blockEditor;
const { PanelBody, IconButton, RangeControl } = wp.components;

registerBlockType('foa/foa-header-block', {
    //built-in attributes
    title: 'FoA Header Block',
    description: 'Header Block to be used on pages',
    icon: 'book-alt',
    categoy: 'foa-blocks',


    //custom attributes
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2'
        },
        titleColor: {
            type: 'string',
            default: 'black'

        },
    },

    //custom functions

    edit: ({ attributes, setAttributes }) => {

        const {
            title,
            titleColor
        } = attributes;

        function onChangeTitle(newBody) {
            setAttributes({ title: newBody });
        }

        function onTitleColorChange(newColor) {
            setAttributes({ titleColor: newColor });
        }

        return ([
            <InspectorControls style={{ marginBottom: '40px' }}>
                <PanelBody title={'Font Color Settings'}>
                    <p><strong>Select a Title Color:</strong></p>
                    <ColorPalette value={titleColor} onChange={onTitleColorChange} />
                </PanelBody>
            </InspectorControls>,
            <div className="foa-section-container container">
                <RichText
                    key="editable"
                    tagName="h2"
                    placeholder="Your Title"
                    value={title}
                    onChange={onChangeTitle}
                    style={{ color: titleColor }}
                />
            </div>
        ]);
    },

    //built-in functions
    save: ({ attributes }) => {

        const {
            title,
            titleColor,

        } = attributes;


        return (
            <div className="foa-section-container container">
                <h2 style={{ color: titleColor }}>{title}</h2>
            </div>
        );
    }
});