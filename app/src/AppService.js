
import UserData from './testdata/UserData';

class AppService {

    fetchComments(filename = null){
        return UserData;
    }
}

module.exports = AppService;