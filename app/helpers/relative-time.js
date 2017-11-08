import { helper } from '@ember/component/helper';
import moment from 'moment';

export function relativeTime(params/*, hash*/) {
  let datetime = params[0];
  return moment(datetime.data.created *1000).calendar();
}

export default helper(relativeTime);
