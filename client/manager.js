import alt from 'alt-client';

const blips = [];

alt.onServer('blips:Create', blipsCreate);
alt.onServer('blips:Delete', blipsDelete);

/**
 * Creates a new global blip
 *
 * @param {{ identifier: any, label: string, position: alt.Vector3, sprite: number, color: number, scale: number, shortRange: boolean }} blip
 */
function blipsCreate(blip) {
    const blipHandler = new alt.PointBlip(blip.position.x, blip.position.y, blip.position.z);

    blipHandler.sprite = blip.sprite;
    blipHandler.color = blip.color;
    blipHandler.scale = blip.scale;
    blipHandler.shortRange = blip.shortRange;
    blipHandler.name = blip.label;

    blips.push({
        identifier: blip.identifier,
        handler: blipHandler
    });
}

/**
 * Deletes a blip
 *
 * @param {any} identifier
 */
function blipsDelete(identifier) {
    const blipIndex = blips.findIndex(blip => blip.identifier == identifier);
    if (blipIndex === -1) return;

    blips[blipIndex].handler.destroy();
    blips.splice(blipIndex, 1);
}
