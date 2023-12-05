import {lowerCase, upperCase } from 'lodash';

export type CreateActionType = {
    START: string;
    SUCCESS :string;
    ERROR :string;
    END :string;
}

export const createActionString = (type: string, entity = 'app'): string => `@@${lowerCase(entity)}/${upperCase(type)}`;

export const createActionType = (type: string, entity = 'app'): CreateActionType => ({
    START: `@@${lowerCase(entity)}/${type}_START`,
    SUCCESS: `@@${lowerCase(entity)}/${type}_SUCCESS`,
    ERROR: `@@${lowerCase(entity)}/${type}_ERROR`,
    END: `@@${lowerCase(entity)}/${type}_END`
});