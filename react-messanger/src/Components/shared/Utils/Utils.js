export default class Utilites {
   static getCreatedAt( time ) {
       const date = new Date(time);
       if( !date ) throw Error('Not Date');
       return `${date.getUTCDate()}-${date.getUTCMonth()}-${date.getUTCFullYear()}`
    };
};