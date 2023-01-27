const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload } = wp.blockEditor;
const { PanelBody, IconButton, RangeControl } = wp.components;

registerBlockType('foa/foa-hero-block', {
    //built-in attributes
    title: 'FoA Hero Block',
    description: 'Hero Block to be used on the top of the main page',
    icon: 'book-alt',
    categoy: 'layout',


    //custom attributes
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2'
        },

        titleColor : {
            type:'string',
            default:'black'

        },

        body: {
            type:'string',
            source: 'html',
            selector: 'p'
        },

        backgroundImage: {
            type: 'string',
        },

        overlayColor: {
            type: 'string',
            default: 'black'
        },

        overlayOpacity: {
            type:'number',
            default:0.3
        }
    },

    //custom functions

    edit: ({attributes, setAttributes}) => {

        const {
            title,
            body,
            titleColor,
            backgroundImage,
            overlayColor,
            overlayOpacity
        } = attributes;

        function onChangeTitle(newBody) {
            setAttributes({title: newBody});
        }

        function onChangeBody(newTitle) {
            setAttributes({body: newTitle});
        }

        function onTitleColorChange(newColor) {
            setAttributes({titleColor: newColor});
        }

        function onSelectImage(newImage) {
            setAttributes({backgroundImage: newImage.sizes.full.url});
        }

        function onOverlayColorChange(newColor) {
            setAttributes({overlayColor: newColor});
        }

        function onOverlayOpacityChange(newOpacity) {
            setAttributes({overlayOpacity: newOpacity});
        }

        return ([
            <InspectorControls style={{marginBottom:'40px'}}>
                <PanelBody title={'Font Color Settings'}>
                    <p><strong>Select a Title Color:</strong></p>
                    <ColorPalette value={titleColor} onChange={onTitleColorChange} />
                </PanelBody>
                <PanelBody title={'Background Image Settings'}>
                    <p><strong>Select a Background Image:</strong></p>
                    <MediaUpload onSelect={onSelectImage} type="image" value={backgroundImage} render={({open}) => (
                        <IconButton onClick={open} icon="upload" className="editor-media-placeholder__button is-button is-default is-large">Background Image</IconButton>
                    )} />
                    <div style={{marginTop: '20px', marginBottom: '40px'}}>
                        <p><strong>Overlay Color</strong></p>
                        <ColorPalette value={overlayColor} onChange={onOverlayColorChange} />
                    </div>
                    <RangeControl
                        label={'Overlay Opacity'}
                        value={overlayOpacity}
                        onChange={onOverlayOpacityChange}
                        min={0}
                        max={1}
                        step={0.05}
                     />
                </PanelBody>
            </InspectorControls>,
            <div class="cta-container" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="cta-overlay" style={{background: overlayColor, opacity: overlayOpacity}}></div>
                <RichText 
                    key="editable"
                    tagName="h2"
                    placeholder="Your Title"
                    value={title}
                    onChange={onChangeTitle}
                    style={ { color:titleColor } }
                />
                <RichText 
                    key="editable"
                    tagName="p"
                    placeholder="Your Text"
                    value={body}
                    onChange={onChangeBody}
                />
            </div>
        ]);
    },

    //built-in functions
    save: ({attributes}) => {

        const {
            title,
            body, 
            titleColor,
            backgroundImage,
            overlayColor,
            overlayOpacity
        } = attributes;


        return (
            <div className="cta-container" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <div className="cta-overlay" style={{background: overlayColor, opacity: overlayOpacity}}></div>
                <h2 style={{color:titleColor}}>{title}</h2>
                <RichText.Content tagName="p" 
                    value={body}
                />
            </div>
        );
    }
});