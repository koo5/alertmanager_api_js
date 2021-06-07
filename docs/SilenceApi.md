# AlertmanagerApi.SilenceApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSilence**](SilenceApi.md#deleteSilence) | **DELETE** /silence/{silenceID} | 
[**getSilence**](SilenceApi.md#getSilence) | **GET** /silence/{silenceID} | 
[**getSilences**](SilenceApi.md#getSilences) | **GET** /silences | 
[**postSilences**](SilenceApi.md#postSilences) | **POST** /silences | 



## deleteSilence

> deleteSilence(silenceID)



Delete a silence by its ID

### Example

```javascript
import AlertmanagerApi from 'alertmanager_api';

let apiInstance = new AlertmanagerApi.SilenceApi();
let silenceID = null; // String | ID of the silence to get
apiInstance.deleteSilence(silenceID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **silenceID** | [**String**](.md)| ID of the silence to get | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSilence

> GettableSilence getSilence(silenceID)



Get a silence by its ID

### Example

```javascript
import AlertmanagerApi from 'alertmanager_api';

let apiInstance = new AlertmanagerApi.SilenceApi();
let silenceID = null; // String | ID of the silence to get
apiInstance.getSilence(silenceID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **silenceID** | [**String**](.md)| ID of the silence to get | 

### Return type

[**GettableSilence**](GettableSilence.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSilences

> [GettableSilence] getSilences(opts)



Get a list of silences

### Example

```javascript
import AlertmanagerApi from 'alertmanager_api';

let apiInstance = new AlertmanagerApi.SilenceApi();
let opts = {
  'filter': ["null"] // [String] | A list of matchers to filter silences by
};
apiInstance.getSilences(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**[String]**](String.md)| A list of matchers to filter silences by | [optional] 

### Return type

[**[GettableSilence]**](GettableSilence.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postSilences

> InlineResponse200 postSilences(silence)



Post a new silence or update an existing one

### Example

```javascript
import AlertmanagerApi from 'alertmanager_api';

let apiInstance = new AlertmanagerApi.SilenceApi();
let silence = new AlertmanagerApi.PostableSilence(); // PostableSilence | The silence to create
apiInstance.postSilences(silence, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **silence** | [**PostableSilence**](PostableSilence.md)| The silence to create | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

