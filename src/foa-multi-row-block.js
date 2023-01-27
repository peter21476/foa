const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload } = wp.blockEditor;
const { PanelBody, IconButton, RangeControl, TextControl } = wp.components;

registerBlockType('foa/foa-multi-row-block', {
    //built-in attributes
    title: 'FoA Multi Row Block',
    parent: ['foa/foa-multi-row-block'],
    description: 'A single row',
    category: 'foa-blocks',


    //custom attributes
    attributes: {

        featureImage: {
            type: 'string',
            default: null
        },
        header: {
            type: 'string',
            selector: 'h2'
        },
        bodyText: {
            type: 'string',
            source: 'html',
            selector: 'p'
        },
        buttonText: {
            type: 'string',
            source: 'html',
            selector: 'span'
        },

        buttonLink: {
            type: 'string',
            default: 'http://www.foa.com'

        },
        fontSize: {
            type: 'number',
            default: 25
        }


    },

    //custom functions

    edit: ({ attributes, setAttributes }) => {

        const {
            featureImage,
            bodyText,
            buttonText,
            buttonLink,
            fontSize,
            header

        } = attributes;

        function onChangeBodyText(newBodyText) {
            setAttributes({ bodyText: newBodyText });
        }

        function onChangeFeatureImage(newFeaturedImage) {
            setAttributes({ featureImage: newFeaturedImage.sizes.full.url });
        }

        function onChangeButtonText(newButtonText) {
            setAttributes({ buttonText: newButtonText });
        }

        function onChangeFontSize(newFontSize) {
            setAttributes({ fontSize: newFontSize });
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
                    <MediaUpload onSelect={onChangeFeatureImage} type="image" value={featureImage} render={({ open }) => (
                        <IconButton onClick={open} icon="upload" className="editor-media-placeholder__button is-button is-default is-large">Feature Image</IconButton>
                    )} />
                </PanelBody>
                <PanelBody title={'Font Size'}>
                    <p><strong>Select Font Size</strong></p>
                    <RangeControl
                        label={'Font Size'}
                        value={fontSize}
                        onChange={onChangeFontSize}
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
                    <div className="foa-hero-image col-md-7">
                        <img className="img-fluid" src={featureImage} alt="feature-image" />
                    </div>
                    <div className="foa-hero-text col-md-5 my-auto">
                        <RichText
                            key="editable"
                            tagName="h2"
                            placeholder="Your Text"
                            value={header}
                            onChange={onChangeHeader}
                        />
                        <RichText
                            key="editable"
                            tagName="p"
                            placeholder="Your Text"
                            value={bodyText}
                            onChange={onChangeBodyText}
                            style={{ fontSize: fontSize }}
                        />
                        <a className="btn btn-gray">
                            <RichText
                                key="editable"
                                tagName="span"
                                placeholder="Your Button Text"
                                value={buttonText}
                                onChange={onChangeButtonText}
                            />
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        ]);
    },

    //built-in functions
    save: ({ attributes }) => {

        const {
            featureImage,
            bodyText,
            buttonText,
            buttonLink,
            fontSize,
            header
        } = attributes;


        return (
            <div className="row">
                <div className="foa-hero-image col-md-6">
                    <img className="img-fluid" src={featureImage} alt="feature-image" />
                </div>
                <div className="foa-hero-text col-md-6 my-auto">
                    <RichText.Content tagName="h2"
                        value={header}
                    />
                    <RichText.Content tagName="p"
                        value={bodyText} style={{ fontSize: fontSize }}
                    />
                    <a className="btn btn-gray" href={buttonLink}>
                        <RichText.Content tagName="span"
                            value={buttonText}
                        />
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        );
    }
});