import {
    Observable,
    of,
} from 'rxjs';

import { Injectable } from '@angular/core';

import { Career } from '../models/career';
import { Person } from '../models/person';
import {
    Skill,
    SkillType,
} from '../models/skill';

@Injectable({
    providedIn: 'root',
})
export class PersonService {
    getPerson(): Observable<Person> {
        return of({
            name: 'Benjamin Trosien',
            job: 'Software Developer',
        });
    }

    getSkills(): Observable<Skill[]> {
        return of([
            {
                type: SkillType.VALUE,
                items: [
                    {
                        label: 'Wohnort',
                        value: 'Carl-Herz-Ufer 25, 10961 Berlin',
                    },
                    {
                        label: 'Geburtsdatum, Ort',
                        value: '19.02.1984, Berlin',
                    },
                    {
                        label: 'Telefon',
                        value: '0176 212 34 670',
                    },
                    {
                        label: 'Email',
                        value: 'benjamin.trosien@gmail.com',
                    },
                    {
                        label: 'Staatsangehörigkeit',
                        value: 'deutsch',
                    },
                    {
                        label: 'Familienstand',
                        value: 'ledig',
                    },
                ],
            },
            {
                title: 'Technologien',
                type: SkillType.LEVEL,
                items: [
                    {
                        label: 'Angular (2-10)',
                        level: 5,
                    },
                    {
                        label: 'Typescript / Javascript',
                        level: 5,
                    },
                    {
                        label: 'HTML / CSS',
                        level: 5,
                    },
                    {
                        label: 'Java / Springboot',
                        level: 3,
                    },

                ],
            },
            {
                title: 'Sprachen',
                type: SkillType.LEVEL,
                items: [
                    {
                        label: 'Deutsch',
                        level: 5,
                    },
                    {
                        label: 'Englisch',
                        level: 4,
                    },
                ],
            },
        ]);
    }

    getCareer(): Observable<Career[]> {
        return of([
            {
                start: '2020-09-30T22:00:00.000Z',
                end: '2021-07-30T22:00:00.000Z',
                employer: 'Stayfriends GmbH',
                title: 'Senior Fullstack Developer',
                tasks: [
                    'Weiterentwicklung der Angular Architektur',
                    'Microservice Kommunikation mit ActiveMQ',
                    'Betreuung und Einarbeitung neuer Mitarbeiter',
                    'Testdriven Development',
                ],
            },
            {
                start: '2017-08-31T22:00:00.000Z',
                end: '2020-09-30T22:00:00.000Z',
                employer: 'Stayfriends GmbH',
                title: 'Fullstack Developer',
                tasks: [
                    'Angular 2-10 / ngrx / rxjs / jasmine',
                    'Typescript / HTML5 / SASS',
                    'Java / Spring Boot / Mockito',
                    'MongoDB / Elasticsearch / MySQL',
                    'Git / Jira / Bitbucket / Scrum',
                ],
            },
            {
                start: '2015-05-31T22:00:00.000Z',
                end: '2017-07-30T22:00:00.000Z',
                employer: 'TPN Service GmbH & Co. KG.',
                title: 'Mitarbeiter',
                tasks: [
                    'Gebäudeautomation',
                    'Javascript / Nodejs / socket.io',
                    'HTML / CSS / jQuery',
                    'SPS / CodeSys',
                ],
            },
            {
                start: '2013-08-31T22:00:00.000Z',
                end: '2018-08-30T22:00:00.000Z',
                employer: 'Biomarkt LandVerte / Viverte',
                title: 'Freier Mitarbeiter',
                tasks: [
                    'Videoüberwachung',
                    'Netzwerkadministration',
                ],
            },
            {
                start: '2012-02-31T22:00:00.000Z',
                end: '2013-08-30T22:00:00.000Z',
                employer: 'TPN Service GmbH & Co. KG.',
                title: 'Student',
                tasks: [
                    'Gebäudeautomation',
                    'SPS / CodeSys',
                    'Javascript / Nodejs / socket.io',
                ],
            },
        ]);
    }

    getEducation(): Observable<Career[]> {
        return of([
            {
                start: '2011-10-30T22:00:00.000Z',
                end: '2014-10-30T22:00:00.000Z',
                employer: 'Hochschule für Technik und Wirtschaft Berlin',
                title: 'Angewandte Informatik, Bachelor (ohne Abschluss)',
                tasks: [
                    'C++ / C / Java',
                    'JUnit',
                    'OpenGL Programmierung mit C++',
                    'HTML / CSS',
                ],
            },
            {
                start: '2008-08-30T22:00:00.000Z',
                end: '2010-11-30T22:00:00.000Z',
                employer: 'Humboldt-Universität zu Berlin',
                title: 'Informatik, Diplom (ohne Abschluss)',
                tasks: [
                    'C++ / C / Java / Prolog / Haskell',
                    'Assembler',
                    'Entwicklung / Programmierung einer 4Bit CPU',
                    'Logische Ausdrücke / Formale Sprache',
                    'Komplexitätsabschätzung',
                ],
            },
            {
                start: '2006-08-30T22:00:00.000Z',
                end: '2008-08-30T22:00:00.000Z',
                employer: 'Oberstufenzentrum Informations- und Medizintechnik',
                title: 'Elektrotechnik, Allgemeine Hochschulreife',
                tasks: [
                    'Ohm‘sche Netzwerke',
                    'Transistor - Transistor - Logik / Flipflops',
                    'Englisch',
                ],
            },
            {
                start: '2003-01-30T22:00:00.000Z',
                end: '2006-01-30T22:00:00.000Z',
                employer: 'Universal-Stiftung Helmut Ziegner',
                title: 'IT-Systemelektroniker, Facharbeiter',
                tasks: [
                    'Assembler',
                    'C / C++',
                    'Netzwerk(Ethernet / TCP / OSI)',
                ],
            },
            {
                start: '2001-09-30T22:00:00.000Z',
                end: '2002-04-30T22:00:00.000Z',
                employer: 'Games Academy',
                title: 'Game Level Designer, Zertifikat',
                tasks: [
                    '3D Studio Max(Modellierung / Animation)',
                    'Photoshop',
                    '3D Game Engine(Nebula / Virtools)',
                ],
            },
            {
                start: '1996-08-30T22:00:00.000Z',
                end: '2000-07-30T22:00:00.000Z',
                employer: 'Hermann-Hesse Gymnasium',
                title: 'Gymnasium, Realschubabschluss',
                tasks: [
                    'Englisch',
                    'Französisch',
                    'Latein',
                ],
            },
        ]);
    }

    getDegrees(): Observable<Career[]> {
        return of([
            {
                title: 'Allgemeine Hochschulreife',
                employer: 'Oberstufenzentrum Informations- und Medizintechnik',
            },
            {
                title: 'IT - Systemelektroniker(Facharbeiter)',
                employer: 'Universal-Stiftung Helmut Ziegner',
            },
            {
                title: 'Zertifikat Game Level Designer',
                employer: 'Games Academy',
            },
        ]);
    }

    getInterests(): Observable<Career[]> {
        return of([
            {
                title: 'Technik',
                employer: 'Computer',
                tasks: [
                    'Bedarfsorientierte Zusammenstellung von Hard - und Software',
                    'Optimierung von Fähigkeiten anhand aktueller Entwicklungen',
                    'Intensive Recherche zur effizienten Lösung von Aufgaben',
                ],
            },
            {
                title: 'Freizeit',
                employer: 'Aktivitäten',
                tasks: [
                    'Mehrwöchige Fahrradtouren im Urlaub',
                    'Fitness Training',
                ],
            },
        ]);
    }
}
