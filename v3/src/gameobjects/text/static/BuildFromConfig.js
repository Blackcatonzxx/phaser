var Text = require('./Text');
var GetAdvancedValue = require('../../../utils/object/GetAdvancedValue');
var BuildGameObject = require('../../BuildGameObject');

var BuildFromConfig = function (state, config)
{
    // style Object = {
    //     font: [ 'font', '16px Courier' ],
    //     backgroundColor: [ 'backgroundColor', null ],
    //     fill: [ 'fill', '#fff' ],
    //     stroke: [ 'stroke', '#fff' ],
    //     strokeThickness: [ 'strokeThickness', 0 ],
    //     shadowOffsetX: [ 'shadow.offsetX', 0 ],
    //     shadowOffsetY: [ 'shadow.offsetY', 0 ],
    //     shadowColor: [ 'shadow.color', '#000' ],
    //     shadowBlur: [ 'shadow.blur', 0 ],
    //     shadowStroke: [ 'shadow.stroke', false ],
    //     shadowFill: [ 'shadow.fill', false ],
    //     align: [ 'align', 'left' ],
    //     maxLines: [ 'maxLines', 0 ],
    //     fixedWidth: [ 'fixedWidth', false ],
    //     fixedHeight: [ 'fixedHeight', false ],
    //     rtl: [ 'rtl', false ]
    // }

    var content = GetAdvancedValue(config, 'text', '');
    var style = GetAdvancedValue(config, 'style', null);

    var text = new Text(state, 0, 0, content, style);

    BuildGameObject(state, text, config);

    //  Text specific config options:

    text.autoRound = GetAdvancedValue(config, 'autoRound', true);
    text.resolution = GetAdvancedValue(config, 'resolution', 1);

    return text;
};

module.exports = BuildFromConfig;
