import { DB } from './tables/'

export async function createEmptyData() {


    await DB.User.create({
        authId: "facebook|10213268338843701",
        firstName: "Stepan",
        lastName: "Korshakov",
        email: "korshakov.stepan@gmail.com",
        picture: "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12799449_10208337398773281_8543476314381451147_n.jpg?oh=f5e1fb63405ecf5dc1f88950fdcb4257&oe=5A2F17E5"
    })

    var sf = await DB.Account.create({
        slug: "sf",
        name: "Housing",
        city: "San Francisco",
        activated: true
    })
    await DB.Account.create({
        slug: "nyc",
        name: "New York",
        activated: true
    })

    for (let i = 0; i < 10; i++) {
        await DB.DataSet.create({
            name: 'Housing Element 2014',
            description: 'Complete 200+ pages report that have all information about housing research in SF government',
            link: 'http://208.121.200.84/ftp/files/plans-and-programs/planning-for-the-city/housing-element/2014HousingElement-AllParts_ADOPTED_web.pdf',
            account: sf.id,
            kind: 'dataset',
            activated: true
        })
    }

    for (let i = 0; i < 10; i++) {
        await DB.DataSet.create({
            name: '2014 Q1',
            description: 'Complete 200+ pages report that have all information about housing research in SF government',
            link: 'http://208.121.200.84/ftp/files/plans-and-programs/planning-for-the-city/housing-element/2014HousingElement-AllParts_ADOPTED_web.pdf',
            account: sf.id,
            kind: 'document',
            activated: true,
            group: 'Housing Element'
        })
    }
    await DB.DataSet.create({
        name: '2014 Q1',
        description: 'Complete 200+ pages report that have all information about housing research in SF government',
        link: 'http://208.121.200.84/ftp/files/plans-and-programs/planning-for-the-city/housing-element/2014HousingElement-AllParts_ADOPTED_web.pdf',
        account: sf.id,
        kind: 'document',
        activated: true,
    })

    await DB.Project.create({
        account: sf.id!!,
        name: "Building Permits",
        slug: "housing",
        activated: true,
        outputs: '[{"url":"https://github.com", "title": "Some Outputs"}]',
        sources: '[]',
        isPrivate: false
    })

    await DB.Project.create({
        account: sf.id!!,
        name: "Building Production",
        slug: "prod",
        activated: true,
        outputs: '[]',
        sources: '[]',
        isPrivate: true
    })

    await DB.Findings.create({
        account: sf.id!!,
        title: "San Francisco Housing",
        intro: "Blah blah blah",
        description: "Some description",
        recomendations: "Some findings"
    })
}