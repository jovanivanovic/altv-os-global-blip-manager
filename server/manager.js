/// <reference types="@altv/types-server" />
import alt from 'alt-server';

const blips = [];

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
    if (blips.findIndex(blip => blip.identifier == identifier) !== -1) {
        throw new Error(`Blip identifier [${identifier}] is already in use.`);
    }

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
    const blipIndex = blips.findIndex(blip => blip.identifier == identifier);
    if (blipIndex === -1) return;

    blips.splice(blipIndex, 1);
    alt.emitClient(null, 'blips:Delete', identifier);
}

/**
 * Syncs all the blips with a specific player
 *
 * @param {alt.Player} player
 */
function blipsSync(player) {
    for (const blip of blips) {
        alt.emitClient(player, 'blips:Create', blip);
    }
}
