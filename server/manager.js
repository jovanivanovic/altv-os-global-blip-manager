/// <reference types="@altv/types-server" />
import alt from 'alt-server';

const blips = {};

alt.on('blips:Create', blipsCreate);
alt.on('blips:Delete', blipsDelete);
alt.on('blips:Sync', blipsSync);

/**
 * Creates a new global blip
 *
 * @param {any} identifier
 * @param {string} label
 * @param {alt.Vector3} position
 * @param {number} sprite
 * @param {number} color
 * @param {number} scale
 * @param {boolean} shortRange
 */
function blipsCreate(identifier, label, position, sprite, color, scale, shortRange = true) {
    if(blips[identifier])throw new Error(`Blip identifier [${identifier}] is already in use.`);

    const blip = { identifier, label, position, sprite, color, scale, shortRange };
    blips.push(blip);

    alt.emitClient(null, 'blips:Create', blip);
}

/**
 * Deletes a blip
 *
 * @param {any} identifier
 */
function blipsDelete(identifier) {
    if(!blips[identifier]) return;

    delete blips[identifier];
    alt.emitClient(null, 'blips:Delete', identifier);
}

/**
 * Syncs all the blips with a specific player
 *
 * @param {alt.Player} player
 */
function blipsSync(player) {
    for (const blipId in blips) {
        const blip = blips[blipId];
        alt.emitClient(player, 'blips:Create', blip);
    }
}
