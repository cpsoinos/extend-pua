export interface SenatorSocialHandlesResponse {
    items: SenatorSocialHandleRecord[]
}

export interface SenatorSocialHandleRecord {
    avatar?: string
    st:                                string;
    igCould?:                          string;
    phoneNumber:                       string;
    facebookCount?:                    string;
    igHandle:                          string;
    _id:                               string;
    _owner:                            string;
    _createdDate:                      Date;
    twitterHandle:                     string;
    _updatedDate:                      Date;
    last:                              string;
    igLink?:                           string;
    party:                             Party;
    twitterCount?:                     string;
    reElection:                        string;
    first:                             string;
    twitterLink:                       string;
    facebookLink:                      string;
    facebookPage:                      string;
    "link-senator-social-handles-all": LinkSenatorSocialHandlesAll;
}

export enum LinkSenatorSocialHandlesAll {
    SenatorSocialHandles = "/senator-social-handles/",
}

export enum Party {
    D = "D",
    I = "I***",
    PartyAffillitation = "Party Affillitation",
    R = "R",
}
