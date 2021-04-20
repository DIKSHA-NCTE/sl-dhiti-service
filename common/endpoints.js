/**
 * name : common/endpoints.js
 * author : Deepa
 * Date : 24-dec-2020
 * Description : All service endpoints
 */

module.exports = {
    GET_USER_PROFILE : "/userExtension/getProfile",
    GET_ENTITY_LIST : "/entities/list",
    GET_SURVEY_SUBMISSION_STATUS : "/surveySubmissions/getStatus",
    GET_OBSERVATION_SUBMISSION_STATUS : "/observationSubmissions/status",
    GET_ENTITY_OBSERVATION_SUBMISSIONS_STATUS: "/observations/submissionStatus",
    OBSERVATION_DETAILS : "/observations/details",
    GCP_GET_DOWNLOADABLE_URL : "/cloud-services/gcp/getDownloadableUrl",
    AZURE_GET_DOWNLOADABLE_URL : "/cloud-services/azure/getDownloadableUrl",
    AWS_GET_DOWNLOADABLE_URL : "/cloud-services/aws/getDownloadableUrl",
    GET_PRESIGNED_URL : "/cloud-services/files/preSignedUrls"
}