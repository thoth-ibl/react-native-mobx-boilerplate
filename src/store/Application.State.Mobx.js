import { observable, action, computed, extendObservable } from 'mobx';
import { create, persist } from 'mobx-persist';
import { AsyncStorage } from 'react-native';


class ApplicationState {
  // User favourite stations, services, areas/near, etc
  /*@observable UserFavourites  = {
    TrainStations : [], //  User favourite train stations
    TrainServices : [], //  User favourite train services
    BusStops      : [], //  User favourite bus stops
    BusServices   : [], //  User favourite bus services
    Areas         : [], //  User favourite geo-areas
    Places        : [], //  User referenced points (e.g. McDonalds in location -15.134,1.15478)
    Journeys      : [], //  User favourite journeys
  }

  // Selected station, stop, service, etc
  // This state should be updated in order to update UI
  @observable SelectedState = {
    TrainStation  : {},
    BusStops      : {},
    BusService    : {},
    TrainService  : {},
    Journey       : {},
    Tweets        : []
  }*/
  constructor(){
      //
  }

  @observable AppGlobalState = {
    SplashShowing : true
  }

}

const singleton = new ApplicationState();
export default singleton;