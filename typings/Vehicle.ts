import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Vehicle {
    id: number;
    caption: string;
    building_id: number;
    vehicle_type: number;
    fms_real: number;
    fms_show: number;
    vehicle_type_caption: string | null;
    faPencilAlt: IconDefinition;
    faUsers: IconDefinition;
}

export interface VehicleCategory {
    color: string;
    vehicles: {
        [group: string]: number[];
    };
}

export interface ResolvedVehicleCategory {
    color: string;
    vehicles: {
        [group: string]: InternalVehicle[];
    };
}

export interface InternalVehicle {
    caption: string;
    color: string;
    coins: number;
    credits: number;
    minPersonnel: number;
    maxPersonnel: number;
    schooling: string;
    special: string;
}
