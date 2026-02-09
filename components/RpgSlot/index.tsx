import { useId } from 'react';
import { Tooltip } from 'react-tooltip'
import { RpgIcon } from '@flyskypie/react-rpgui/rpg-icon';

export interface RpgSlotProps {
    children?: React.ReactNode;
    tooltip?: string;
};

export const RpgSlot: React.FC<RpgSlotProps> = ({ tooltip, children }) => {
    const tooltipId = useId();

    return (
        <>
            <RpgIcon
                data-tooltip-id={tooltipId}
                icon="empty-slot"
                style={{ position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {children}
                </div>
            </RpgIcon>
            {tooltip &&
                <Tooltip
                    id={tooltipId}
                    place='bottom-start'
                    style={{ zIndex: 60, }}>
                    <p style={{ margin: 0 }}>{tooltip}</p>
                </Tooltip>}
        </>
    );
};
