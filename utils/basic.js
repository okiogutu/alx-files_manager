import { ObjectId } from 'mongodb';

/* Basic utilities module */

const basicUtils = {
  /* Checks for valid id */
  isValidId(id) {
    try {
      ObjectId(id);
    } catch (err) {
      return false;
    }
    return true;
  },
};

export default basicUtils;
