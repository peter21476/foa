const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload } = wp.blockEditor;
const { PanelBody, IconButton, RangeControl, TextControl } = wp.components;

registerBlockType('foa/foa-three-column-promo', {
    title: 'FoA Three Columns Promo',
    description: 'A three column promo',
    icon: 'book-alt',
    category: 'foa-blocks',

    attributes: {
        title01: {
            type: 'string',
            source: 'html',
            selector: 'h2.first-header'
        },
        description01: {
            type: 'string',
            source: 'html',
            selector: 'p.first-text'
        },
        link01: {
            type: 'string',
            source: 'attribute',
            selector: 'a.first-link',
            attribute: 'href',
            default: 'http://www.foa.com'
        },
        title02: {
            type: 'string',
            source: 'html',
            selector: 'h2.second-header'
        },
        description02: {
            type: 'string',
            source: 'html',
            selector: 'p.second-text'
        },
        link02: {
            type: 'string',
            source: 'attribute',
            selector: 'a.second-link',
            attribute: 'href',
            default: 'http://www.foa.com'
        },
        title03: {
            type: 'string',
            source: 'html',
            selector: 'h2.third-header'
        },
        description03: {
            type: 'string',
            source: 'html',
            selector: 'p.third-text'
        },
        link03: {
            type: 'string',
            source: 'attribute',
            selector: 'a.third-link',
            attribute: 'href',
            default: 'http://www.foa.com'
        },
        headersSize: {
            type: 'number',
            default: 25
        },
        textSize: {
            type: 'number',
            default: 20
        },
        backgroundColor: {
            type: 'string',
            default: 'F3F3F3'
        },
        textColor: {
            type: 'string',
            default: '000000'
        }

    },

    edit: ({ attributes, setAttributes }) => {
        const {
            title01,
            title02,
            title03,
            description01,
            description02,
            description03,
            link01,
            link02,
            link03,
            headersSize,
            textSize,
            backgroundColor,
            textColor
        } = attributes;

        function onChangeTitle01(newTitle01) {
            setAttributes({ title01: newTitle01 });
        }

        function onChangeDescription01(newDescription01) {
            setAttributes({ description01: newDescription01 });
        }

        function onChangeLink01(newLink01) {
            setAttributes({ link01: newLink01 });
        }

        function onChangeTitle02(newTitle02) {
            setAttributes({ title02: newTitle02 });
        }

        function onChangeDescription02(newDescription02) {
            setAttributes({ description02: newDescription02 });
        }

        function onChangeLink02(newLink02) {
            setAttributes({ link02: newLink02 });
        }

        function onChangeTitle03(newTitle03) {
            setAttributes({ title03: newTitle03 });
        }

        function onChangeDescription03(newDescription03) {
            setAttributes({ description03: newDescription03 });
        }

        function onChangeLink03(newLink03) {
            setAttributes({ link03: newLink03 });
        }

        function onChangeHeadersSize(newHeadersSize) {
            setAttributes({ headersSize: newHeadersSize });
        }

        function onChangeTextSize(newTextSize) {
            setAttributes({ textSize: newTextSize });
        }

        function onChangeBackgroundColor(newBackgroundColor) {
            setAttributes({ backgroundColor: newBackgroundColor });
        }

        function onChangeTextColor(newTextColor) {
            setAttributes({ textColor: newTextColor });
        }

        return ([
            <InspectorControls>
                <PanelBody title={'Background Color'}>
                    <p><strong>Select your Background Color:</strong></p>
                    <ColorPalette value={backgroundColor} onChange={onChangeBackgroundColor} />
                </PanelBody>
                <PanelBody title={'Text Color'}>
                    <p><strong>Select your Text Color:</strong></p>
                    <ColorPalette value={textColor} onChange={onChangeTextColor} />
                </PanelBody>
                <PanelBody title={'Headers Size'}>
                    <p><strong>Select Headers Size</strong></p>
                    <RangeControl
                        label={'Header Size'}
                        value={headersSize}
                        onChange={onChangeHeadersSize}
                        min={0}
                        max={100}
                        step={1}
                    />
                </PanelBody>
                <PanelBody title={'Text Size'}>
                    <p><strong>Select Text Size</strong></p>
                    <RangeControl
                        label={'Text Size'}
                        value={textSize}
                        onChange={onChangeTextSize}
                        min={0}
                        max={100}
                        step={1}
                    />
                </PanelBody>
                <PanelBody title={'Arrow Links'}>
                    <p><strong>Paste all 3 links</strong></p>
                    <TextControl value={link01} onChange={onChangeLink01} />
                    <TextControl value={link02} onChange={onChangeLink02} />
                    <TextControl value={link03} onChange={onChangeLink03} />
                </PanelBody>
            </InspectorControls>,
            <div className="three-column-section" style={{ backgroundColor: backgroundColor, color: textColor }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <RichText
                                key="editable"
                                tagName="h2"
                                placeholder="Your Title"
                                value={title01}
                                onChange={onChangeTitle01}
                                style={{ fontSize: headersSize }}
                                className="first-header"
                            />
                            <RichText
                                key="editable"
                                tagName="p"
                                placeholder="Your Text"
                                value={description01}
                                onChange={onChangeDescription01}
                                style={{ fontSize: textSize }}
                                className="first-text"
                            />
                            <a className="btn btn-gray"><span>Learn More</span><i class="fas fa-arrow-right"></i></a>
                            <div className="mobile-ruler"></div>
                        </div>
                        <div className="col-lg-4">
                            <RichText
                                key="editable"
                                tagName="h2"
                                placeholder="Your Title"
                                value={title02}
                                onChange={onChangeTitle02}
                                style={{ fontSize: headersSize }}
                                className="second-header"
                            />
                            <RichText
                                key="editable"
                                tagName="p"
                                placeholder="Your Text"
                                value={description02}
                                onChange={onChangeDescription02}
                                style={{ fontSize: textSize }}
                                className="second-text"
                            />
                            <a className="btn btn-gray"><span>Learn More</span><i class="fas fa-arrow-right"></i></a>
                            <div className="mobile-ruler"></div>
                        </div>
                        <div className="col-lg-4">
                            <RichText
                                key="editable"
                                tagName="h2"
                                placeholder="Your Title"
                                value={title03}
                                onChange={onChangeTitle03}
                                style={{ fontSize: headersSize }}
                                className="third-header"
                            />
                            <RichText
                                key="editable"
                                tagName="p"
                                placeholder="Your Text"
                                value={description03}
                                onChange={onChangeDescription03}
                                style={{ fontSize: textSize }}
                                className="third-text"
                            />
                            <a className="btn btn-gray"><span>Learn More</span><i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        ]);
    },

    save: ({ attributes }) => {
        const {
            title01,
            title02,
            title03,
            description01,
            description02,
            description03,
            link01,
            link02,
            link03,
            headersSize,
            textSize,
            backgroundColor,
            textColor
        } = attributes;

        return (
            <div className="three-column-section" style={{ backgroundColor: backgroundColor, color: textColor }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <RichText.Content tagName="h2" value={title01} style={{ fontSize: headersSize }} className="first-header" />
                            <RichText.Content tagName="p" value={description01} style={{ fontSize: textSize }} className="first-text" />
                            <a href={link01} className="btn btn-gray"><span>Learn More</span><i class="fas fa-arrow-right"></i></a>
                            <div className="mobile-ruler"></div>
                        </div>
                        <div className="col-lg-4">
                            <RichText.Content tagName="h2" value={title02} style={{ fontSize: headersSize }} className="second-header" />
                            <RichText.Content tagName="p" value={description02} style={{ fontSize: textSize }} className="second-text" />
                            <a href={link02} className="btn btn-gray"><span>Learn More</span><i class="fas fa-arrow-right"></i></a>
                            <div className="mobile-ruler"></div>
                        </div>
                        <div className="col-lg-4">
                            <RichText.Content tagName="h2" value={title03} style={{ fontSize: headersSize }} className="third-header" />
                            <RichText.Content tagName="p" value={description03} style={{ fontSize: textSize }} className="third-text" />
                            <a href={link03} className="btn btn-gray"><span>Learn More</span><i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});