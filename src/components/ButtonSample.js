import React from 'react'

export const ButtonSample = () => {
    return (
        <div>
            <button data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button" class="">Tooltip right</button>
            <div id="tooltip-right" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Tooltip on right
            <div class="tooltip-arrow" data-popper-arrow>
                
            </div>
            </div>
        </div>
    )
}
