import _ from "lodash";

export const processPostData = (postData: any, ignore: any, limit: any) => {
    let processedPostData = _.cloneDeep(postData);
    if (ignore && processedPostData) {
        processedPostData = _.filter(processedPostData, (latestPost: any) => {
            return !_.includes(ignore, latestPost.id)
        })
    }
    if (limit) {
        processedPostData = _.take(processedPostData, limit)
    }

    return processedPostData;
}
