import axiosInteraction from './base/axios-interaction';

let data = {
  event_type: '',
  lesson_id: '',
  click_on: 0,
  question_id: '',
  is_answser_correct: '',
  answer_id: '',
  flow: 'linear'
};

const getKeyHasValue = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== '') {
      newObj[key] = obj[key];
    }
  });
  return newObj;
};

export const Interaction = {
  updateBody(body) {
    data = { ...data, ...body };
  },
  send(params) {
    const body = { ...data, ...params };
    axiosInteraction.post('/interaction' + (params.end_session ? '?end_session=true' : ''), getKeyHasValue(body));
    data = { ...data, click_on: 0 };
  }
};
