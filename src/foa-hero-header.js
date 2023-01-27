const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload } = wp.blockEditor;
const { PanelBody, IconButton, RangeControl, TextControl } = wp.components;

registerBlockType('foa/foa-hero-header', {
    //built-in attributes
    title: 'FoA Hero Header',
    description: 'Hero Section to be used on the top of pages',
    icon: 'book-alt',
    category: 'foa-blocks',


    //custom attributes
    attributes: {

        body: {
            type: 'string',
            source: 'html',
            selector: 'p'
        },

        header: {
            type: 'string',
            selector: 'h2'
        },

        featureImage: {
            type: 'string',
            default: null
        },

        fontSize: {
            type: 'number',
            default: 20
        }

    },

    //custom functions

    edit: ({ attributes, setAttributes }) => {

        const {
            body,
            featureImage,
            fontSize,
            header

        } = attributes;

        function onChangeBody(newBody) {
            setAttributes({ body: newBody });
        }

        function onSelectFeatureImage(newImage) {
            setAttributes({ featureImage: newImage.sizes.full.url });
        }

        function onFontSizeChange(newSize) {
            setAttributes({ fontSize: newSize });
        }

        function onChangeHeader(newHeader) {
            setAttributes({ header: newHeader });
        }


        return ([
            <InspectorControls style={{ marginBottom: '40px' }}>
                <PanelBody title={'Feature Image'}>
                    <p><strong>Select a Feature Image:</strong></p>
                    <MediaUpload onSelect={onSelectFeatureImage} type="image" value={featureImage} render={({ open }) => (
                        <IconButton onClick={open} icon="upload" className="editor-media-placeholder__button is-button is-default is-large">Feature Image</IconButton>
                    )} />
                </PanelBody>
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
                <div className="row">
                    <div className="foa-hero-text col-md-5 my-auto">
                        <RichText
                            key="editable"
                            tagName="h2"
                            placeholder="Your Header"
                            value={header}
                            onChange={onChangeHeader}
                        />
                        <RichText
                            key="editable"
                            tagName="p"
                            placeholder="Your Text"
                            value={body}
                            onChange={onChangeBody}
                            style={{ fontSize: fontSize }}
                        />
                    </div>
                    <div className="foa-hero-image col-md-7">
                        <img className="img-fluid" src={featureImage} alt="feature-image" />
                    </div>

                </div>
            </div>
        ]);
    },

    //built-in functions
    save: ({ attributes }) => {

        const {
            body,
            featureImage,
            fontSize,
            header
        } = attributes;


        return (
            <div className="foa-section-container container">
                <div className="row">
                    <div className="foa-hero-text col-md-5 my-auto">
                        <RichText.Content tagName="h2"
                            value={header}
                        />
                        <RichText.Content tagName="p"
                            value={body} style={{ fontSize: fontSize }}
                        />
                    </div>
                    <div className="foa-hero-image col-md-7">
                        <img className="img-fluid" src={featureImage} alt="feature-image" />
                    </div>
                </div>
            </div>
        );
    }
});