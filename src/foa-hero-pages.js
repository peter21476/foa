const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload } = wp.blockEditor;
const { PanelBody, IconButton, RangeControl, TextControl } = wp.components;

registerBlockType('foa/foa-hero-pages', {
    //built-in attributes
    title: 'FoA Hero Section Pages',
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
        },

        buttonText: {
            type: 'string',
            source: 'html',
            selector: 'span'
        },

        buttonLink: {
            type: 'string',
            default: 'http://www.foa.com'

        }

    },

    //custom functions

    edit: ({ attributes, setAttributes }) => {

        const {
            body,
            featureImage,
            fontSize,
            buttonText,
            buttonLink,
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

        function onChangeBUttonText(newButtonText) {
            setAttributes({ buttonText: newButtonText });
        }

        function onChangeBUttonLink(newButtonLink) {
            setAttributes({ buttonLink: newButtonLink });
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
                <PanelBody title={'Button Link'}>
                    <p><strong>Paste Link</strong></p>
                    <TextControl value={buttonLink} onChange={onChangeBUttonLink} />
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
                        <a className="btn btn-gray">
                            <RichText
                                key="editable"
                                tagName="span"
                                placeholder="Your Button Text"
                                value={buttonText}
                                onChange={onChangeBUttonText}
                            />
                            <i class="fas fa-arrow-right"></i>
                        </a>
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
            buttonText,
            buttonLink,
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
                        <a className="btn btn-gray" href={buttonLink}>
                            <RichText.Content tagName="span"
                                value={buttonText}
                            />
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                    <div className="foa-hero-image col-md-7">
                        <img className="img-fluid" src={featureImage} alt="feature-image" />
                    </div>
                </div>
            </div>
        );
    }
});