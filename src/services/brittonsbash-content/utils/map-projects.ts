import { EventYear, MappedProjects, Projects } from '~/libs/types';
import { removeDuplicates, toMiles, toFeet } from '~/libs/utils';

export const mapProjects = (projects: Projects): MappedProjects => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const years = Object.keys(projects) as unknown as EventYear[];

  // @ts-expect-error: Years will match type `EventYear`
  const instances: MappedProjects['instances'] = years.reduce((object, key) => {
    let total = 0;

    years.forEach((year) => {
      total += projects[year].length;
    });

    return {
      ...object,
      type: 'sansUnique',
      total,
      [key]: projects[key].length,
    };
  }, {});

  // @ts-expect-error: Years will match type `EventYear`
  const distance: MappedProjects['distance'] = years.reduce((object, key) => {
    let total = 0;
    let yearTotal = 0;

    years.forEach((year) => {
      // eslint-disable-next-line no-return-assign, array-callback-return
      projects[year].forEach((project) => (total += project.distance));
    });

    // eslint-disable-next-line no-return-assign, array-callback-return
    projects[key].forEach((project) => (yearTotal += project.distance));

    return {
      ...object,
      type: 'sansUnique',
      total: toMiles(total),
      [key]: toMiles(yearTotal),
    };
  }, {});

  // @ts-expect-error: Years will match type `EventYear`
  const elevation: MappedProjects['elevation'] = years.reduce((object, key) => {
    let total = 0;
    let yearTotal = 0;

    years.forEach((year) => {
      projects[year].forEach(
        // eslint-disable-next-line no-return-assign, array-callback-return
        (project) => (total += project.elevation),
      );
    });

    projects[key].forEach(
      // eslint-disable-next-line no-return-assign, array-callback-return
      (project) => (yearTotal += project.elevation),
    );

    return {
      ...object,
      type: 'sansUnique',
      total: toFeet(total),
      [key]: toFeet(yearTotal),
    };
  }, {});

  // @ts-expect-error: Years will match type `EventYear`
  const islandsNames: MappedProjects['islands']['number'] = years.reduce((object, key) => {
    const total: string[] = [];
    const yearTotal: string[] = [];

    years.forEach((year) => {
      // eslint-disable-next-line array-callback-return
      projects[year].forEach((project) =>
        // eslint-disable-next-line array-callback-return
        project.islands?.forEach((island) => total.push(island)),
      );
    });

    // eslint-disable-next-line array-callback-return
    projects[key].forEach((project) =>
      // eslint-disable-next-line array-callback-return
      project.islands?.forEach((island) => yearTotal.push(island)),
    );

    return {
      ...object,
      type: 'unique',
      total: total.sort(),
      unique: removeDuplicates(total).sort(),
      [key]: yearTotal.sort(),
    };
  }, {});

  // @ts-expect-error: Years will match type `EventYear`
  const islandsInstances: MappedProjects['islands']['names'] = years.reduce((object, key) => {
    const total: string[] = [];
    const yearTotal: string[] = [];

    years.forEach((year) => {
      // eslint-disable-next-line array-callback-return
      projects[year].forEach((project) =>
        // eslint-disable-next-line array-callback-return
        project.islands?.forEach((island) => total.push(island)),
      );
    });

    // eslint-disable-next-line array-callback-return
    projects[key].forEach((project) =>
      // eslint-disable-next-line array-callback-return
      project.islands?.forEach((island) => yearTotal.push(island)),
    );

    return {
      ...object,
      type: 'unique',
      total: total.length,
      unique: removeDuplicates(total).length,
      [key]: yearTotal.length,
    };
  }, {});

  const islands: MappedProjects['islands'] = {
    // @ts-expect-error: Years will match type `EventYear`
    names: islandsNames,
    // @ts-expect-error: Years will match type `EventYear`
    number: islandsInstances,
  };

  // @ts-expect-error: Years will match type `EventYear`
  const munrosNames: MappedProjects['munros']['number'] = years.reduce((object, key) => {
    const total: string[] = [];
    const yearTotal: string[] = [];

    years.forEach((year) => {
      // eslint-disable-next-line array-callback-return
      projects[year].forEach((project) =>
        // eslint-disable-next-line array-callback-return
        project.munros?.forEach((munro) => total.push(munro)),
      );
    });

    // eslint-disable-next-line array-callback-return
    projects[key].forEach((project) =>
      // eslint-disable-next-line array-callback-return
      project.munros?.forEach((munro) => yearTotal.push(munro)),
    );

    return {
      ...object,
      type: 'unique',
      total: total.sort(),
      unique: removeDuplicates(total).sort(),
      [key]: yearTotal.sort(),
    };
  }, {});

  // @ts-expect-error: Years will match type `EventYear`
  const munrosInstances: MappedProjects['munros']['names'] = years.reduce((object, key) => {
    const total: string[] = [];
    const yearTotal: string[] = [];

    years.forEach((year) => {
      // eslint-disable-next-line array-callback-return
      projects[year].forEach((project) =>
        // eslint-disable-next-line array-callback-return
        project.munros?.forEach((munro) => total.push(munro)),
      );
    });

    // eslint-disable-next-line array-callback-return
    projects[key].forEach((project) =>
      // eslint-disable-next-line array-callback-return
      project.munros?.forEach((munro) => yearTotal.push(munro)),
    );

    return {
      ...object,
      type: 'unique',
      total: total.length,
      unique: removeDuplicates(total).length,
      [key]: yearTotal.length,
    };
  }, {});

  const munros: MappedProjects['munros'] = {
    // @ts-expect-error: Years will match type `EventYear`
    names: munrosNames,
    // @ts-expect-error: Years will match type `EventYear`
    number: munrosInstances,
  };

  // @ts-expect-error: Years will match type `EventYear`
  const munroTopsNames: MappedProjects['munroTops']['number'] = years.reduce((object, key) => {
    const total: string[] = [];
    const yearTotal: string[] = [];

    years.forEach((year) => {
      // eslint-disable-next-line array-callback-return
      projects[year].forEach((project) =>
        // eslint-disable-next-line array-callback-return
        project.munroTops?.forEach((munroTop) => total.push(munroTop)),
      );
    });

    // eslint-disable-next-line array-callback-return
    projects[key].forEach((project) =>
      // eslint-disable-next-line array-callback-return
      project.munroTops?.forEach((munroTop) => yearTotal.push(munroTop)),
    );

    return {
      ...object,
      type: 'unique',
      total: total.sort(),
      unique: removeDuplicates(total).sort(),
      [key]: yearTotal.sort(),
    };
  }, {});

  // @ts-expect-error: Years will match type `EventYear`
  const munroTopsInstances: MappedProjects['munroTops']['names'] = years.reduce((object, key) => {
    const total: string[] = [];
    const yearTotal: string[] = [];

    years.forEach((year) => {
      // eslint-disable-next-line array-callback-return
      projects[year].forEach((project) =>
        // eslint-disable-next-line array-callback-return
        project.munroTops?.forEach((munroTop) => total.push(munroTop)),
      );
    });

    // eslint-disable-next-line array-callback-return
    projects[key].forEach((project) =>
      // eslint-disable-next-line array-callback-return
      project.munroTops?.forEach((munroTop) => yearTotal.push(munroTop)),
    );

    return {
      ...object,
      type: 'unique',
      total: total.length,
      unique: removeDuplicates(total).length,
      [key]: yearTotal.length,
    };
  }, {});

  const munroTops: MappedProjects['munroTops'] = {
    // @ts-expect-error: Years will match type `EventYear`
    names: munroTopsNames,
    // @ts-expect-error: Years will match type `EventYear`
    number: munroTopsInstances,
  };

  // @ts-expect-error: Years will match type `EventYear`
  const corbettsNames: MappedProjects['corbetts']['number'] = years.reduce((object, key) => {
    const total: string[] = [];
    const yearTotal: string[] = [];

    years.forEach((year) => {
      // eslint-disable-next-line array-callback-return
      projects[year].forEach((project) =>
        // eslint-disable-next-line array-callback-return
        project.corbetts?.forEach((corbett) => total.push(corbett)),
      );
    });

    // eslint-disable-next-line array-callback-return
    projects[key].forEach((project) =>
      // eslint-disable-next-line array-callback-return
      project.corbetts?.forEach((corbett) => yearTotal.push(corbett)),
    );

    return {
      ...object,
      type: 'unique',
      total: total.sort(),
      unique: removeDuplicates(total).sort(),
      [key]: yearTotal.sort(),
    };
  }, {});

  // @ts-expect-error: Years will match type `EventYear`
  const corbettsInstances: MappedProjects['corbetts']['names'] = years.reduce((object, key) => {
    const total: string[] = [];
    const yearTotal: string[] = [];

    years.forEach((year) => {
      // eslint-disable-next-line array-callback-return
      projects[year].forEach((project) =>
        // eslint-disable-next-line array-callback-return
        project.corbetts?.forEach((corbett) => total.push(corbett)),
      );
    });

    // eslint-disable-next-line array-callback-return
    projects[key].forEach((project) =>
      // eslint-disable-next-line array-callback-return
      project.corbetts?.forEach((corbett) => yearTotal.push(corbett)),
    );

    return {
      ...object,
      type: 'unique',
      total: total.length,
      unique: removeDuplicates(total).length,
      [key]: yearTotal.length,
    };
  }, {});

  const corbetts: MappedProjects['corbetts'] = {
    // @ts-expect-error: Years will match type `EventYear`
    names: corbettsNames,
    // @ts-expect-error: Years will match type `EventYear`
    number: corbettsInstances,
  };

  // @ts-expect-error: Years will match type `EventYear`
  const corbettTopsNames: MappedProjects['corbettTops']['number'] = years.reduce((object, key) => {
    const total: string[] = [];
    const yearTotal: string[] = [];

    years.forEach((year) => {
      // eslint-disable-next-line array-callback-return
      projects[year].forEach((project) =>
        // eslint-disable-next-line array-callback-return
        project.corbettTops?.forEach((corbettTop) => total.push(corbettTop)),
      );
    });

    // eslint-disable-next-line array-callback-return
    projects[key].forEach((project) =>
      // eslint-disable-next-line array-callback-return
      project.corbettTops?.forEach((corbettTop) => yearTotal.push(corbettTop)),
    );

    return {
      ...object,
      type: 'unique',
      total: total.sort(),
      unique: removeDuplicates(total).sort(),
      [key]: yearTotal.sort(),
    };
  }, {});

  // @ts-expect-error: Years will match type `EventYear`
  const corbettTopsInstances: MappedProjects['corbettTops']['names'] = years.reduce(
    (object, key) => {
      const total: string[] = [];
      const yearTotal: string[] = [];

      years.forEach((year) => {
        // eslint-disable-next-line array-callback-return
        projects[year].forEach((project) =>
          // eslint-disable-next-line array-callback-return
          project.corbettTops?.forEach((corbettTop) => total.push(corbettTop)),
        );
      });

      // eslint-disable-next-line array-callback-return
      projects[key].forEach((project) =>
        // eslint-disable-next-line array-callback-return
        project.corbettTops?.forEach((corbettTop) => yearTotal.push(corbettTop)),
      );

      return {
        ...object,
        type: 'unique',
        total: total.length,
        unique: removeDuplicates(total).length,
        [key]: yearTotal.length,
      };
    },
    {},
  );

  const corbettTops: MappedProjects['corbettTops'] = {
    // @ts-expect-error: Years will match type `EventYear`
    names: corbettTopsNames,
    // @ts-expect-error: Years will match type `EventYear`
    number: corbettTopsInstances,
  };

  // @ts-expect-error: Years will match type `EventYear`
  const grahamsNames: MappedProjects['grahams']['number'] = years.reduce((object, key) => {
    const total: string[] = [];
    const yearTotal: string[] = [];

    years.forEach((year) => {
      // eslint-disable-next-line array-callback-return
      projects[year].forEach((project) =>
        // eslint-disable-next-line array-callback-return
        project.grahams?.forEach((graham) => total.push(graham)),
      );
    });

    // eslint-disable-next-line array-callback-return
    projects[key].forEach((project) =>
      // eslint-disable-next-line array-callback-return
      project.grahams?.forEach((graham) => yearTotal.push(graham)),
    );

    return {
      ...object,
      type: 'unique',
      total: total.sort(),
      unique: removeDuplicates(total).sort(),
      [key]: yearTotal.sort(),
    };
  }, {});

  // @ts-expect-error: Years will match type `EventYear`
  const grahamsInstances: MappedProjects['grahams']['names'] = years.reduce((object, key) => {
    const total: string[] = [];
    const yearTotal: string[] = [];

    years.forEach((year) => {
      // eslint-disable-next-line array-callback-return
      projects[year].forEach((project) =>
        // eslint-disable-next-line array-callback-return
        project.grahams?.forEach((graham) => total.push(graham)),
      );
    });

    // eslint-disable-next-line array-callback-return
    projects[key].forEach((project) =>
      // eslint-disable-next-line array-callback-return
      project.grahams?.forEach((graham) => yearTotal.push(graham)),
    );

    return {
      ...object,
      type: 'unique',
      total: total.length,
      unique: removeDuplicates(total).length,
      [key]: yearTotal.length,
    };
  }, {});

  const grahams: MappedProjects['grahams'] = {
    // @ts-expect-error: Years will match type `EventYear`
    names: grahamsNames,
    // @ts-expect-error: Years will match type `EventYear`
    number: grahamsInstances,
  };

  // @ts-expect-error: Years will match type `EventYear`
  const donaldsNames: MappedProjects['donalds']['number'] = years.reduce((object, key) => {
    const total: string[] = [];
    const yearTotal: string[] = [];

    years.forEach((year) => {
      // eslint-disable-next-line array-callback-return
      projects[year].forEach((project) =>
        // eslint-disable-next-line array-callback-return
        project.donalds?.forEach((donald) => total.push(donald)),
      );
    });

    // eslint-disable-next-line array-callback-return
    projects[key].forEach((project) =>
      // eslint-disable-next-line array-callback-return
      project.donalds?.forEach((donald) => yearTotal.push(donald)),
    );

    return {
      ...object,
      type: 'unique',
      total: total.sort(),
      unique: removeDuplicates(total).sort(),
      [key]: yearTotal.sort(),
    };
  }, {});

  // @ts-expect-error: Years will match type `EventYear`
  const donaldsInstances: MappedProjects['donalds']['names'] = years.reduce((object, key) => {
    const total: string[] = [];
    const yearTotal: string[] = [];

    years.forEach((year) => {
      // eslint-disable-next-line array-callback-return
      projects[year].forEach((project) =>
        // eslint-disable-next-line array-callback-return
        project.donalds?.forEach((donald) => total.push(donald)),
      );
    });

    // eslint-disable-next-line array-callback-return
    projects[key].forEach((project) =>
      // eslint-disable-next-line array-callback-return
      project.donalds?.forEach((donald) => yearTotal.push(donald)),
    );

    return {
      ...object,
      type: 'unique',
      total: total.length,
      unique: removeDuplicates(total).length,
      [key]: yearTotal.length,
    };
  }, {});

  const donalds: MappedProjects['donalds'] = {
    // @ts-expect-error: Years will match type `EventYear`
    names: donaldsNames,
    // @ts-expect-error: Years will match type `EventYear`
    number: donaldsInstances,
  };

  // @ts-expect-error: Years will match type `EventYear`
  const subTwosNames: MappedProjects['subTwos']['number'] = years.reduce((object, key) => {
    const total: string[] = [];
    const yearTotal: string[] = [];

    years.forEach((year) => {
      // eslint-disable-next-line array-callback-return
      projects[year].forEach((project) =>
        // eslint-disable-next-line array-callback-return
        project.subTwos?.forEach((subTwo) => total.push(subTwo)),
      );
    });

    // eslint-disable-next-line array-callback-return
    projects[key].forEach((project) =>
      // eslint-disable-next-line array-callback-return
      project.subTwos?.forEach((subTwo) => yearTotal.push(subTwo)),
    );

    return {
      ...object,
      type: 'unique',
      total: total.sort(),
      unique: removeDuplicates(total).sort(),
      [key]: yearTotal.sort(),
    };
  }, {});

  // @ts-expect-error: Years will match type `EventYear`
  const subTwosInstances: MappedProjects['subTwos']['names'] = years.reduce((object, key) => {
    const total: string[] = [];
    const yearTotal: string[] = [];

    years.forEach((year) => {
      // eslint-disable-next-line array-callback-return
      projects[year].forEach((project) =>
        // eslint-disable-next-line array-callback-return
        project.subTwos?.forEach((subTwo) => total.push(subTwo)),
      );
    });

    // eslint-disable-next-line array-callback-return
    projects[key].forEach((project) =>
      // eslint-disable-next-line array-callback-return
      project.subTwos?.forEach((subTwo) => yearTotal.push(subTwo)),
    );

    return {
      ...object,
      type: 'unique',
      total: total.length,
      unique: removeDuplicates(total).length,
      [key]: yearTotal.length,
    };
  }, {});

  const subTwos: MappedProjects['subTwos'] = {
    // @ts-expect-error: Years will match type `EventYear`
    names: subTwosNames,
    // @ts-expect-error: Years will match type `EventYear`
    number: subTwosInstances,
  };

  return {
    projects,
    instances,
    distance,
    elevation,
    islands,
    munros,
    munroTops,
    corbetts,
    corbettTops,
    grahams,
    donalds,
    subTwos,
  };
};
