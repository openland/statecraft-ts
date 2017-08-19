import { connection } from '../connector';
import * as sequelize from 'sequelize'

export interface ProjectAttributes {
    id?: number;
    name?: string;
    account?: number;
    slug?: string;
    activated?: boolean;
}

export interface Project extends sequelize.Instance<ProjectAttributes>, ProjectAttributes { }

export const ProjectTable = connection.define<Project, ProjectAttributes>('projects', {
    id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize.STRING },
    account: {
        type: sequelize.INTEGER, references: {
            model: 'accounts',
            key: 'id',
        }
    },
    slug: { type: sequelize.STRING, unique: true },
    activated: { type: sequelize.BOOLEAN, defaultValue: false }
})