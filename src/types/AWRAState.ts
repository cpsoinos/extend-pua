export interface AWRAState {
  tier:                       string;
  currentUeRate:              number;
  state:                      string;
  id:                         string;
  owner?:                     string;
  createdDate?:               Date;
  updatedDate?:               Date;
  stateMaxUnemploymentPayout: number | string;
  stateAvg:                   string;
  additionalFpucUnderAwfrAct: string;
  monthAverage:               number;
  prepandemicUePopulation:    string;
  juneUePopulation:           string;
}
