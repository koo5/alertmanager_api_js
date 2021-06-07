# AlertmanagerApi.AlertApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAlerts**](AlertApi.md#getAlerts) | **GET** /alerts | 
[**postAlerts**](AlertApi.md#postAlerts) | **POST** /alerts | 



## getAlerts

> [GettableAlert] getAlerts(opts)



Get a list of alerts

### Example

```javascript
import AlertmanagerApi from 'alertmanager_api';

let apiInstance = new AlertmanagerApi.AlertApi();
let opts = {
  'active': true, // Boolean | Show active alerts
  'silenced': true, // Boolean | Show silenced alerts
  'inhibited': true, // Boolean | Show inhibited alerts
  'unprocessed': true, // Boolean | Show unprocessed alerts
  'filter': ["null"], // [String] | A list of matchers to filter alerts by
  'receiver': "receiver_example" // String | A regex matching receivers to filter alerts by
};
apiInstance.getAlerts(opts, (error, data, response) => {
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
 **active** | **Boolean**| Show active alerts | [optional] [default to true]
 **silenced** | **Boolean**| Show silenced alerts | [optional] [default to true]
 **inhibited** | **Boolean**| Show inhibited alerts | [optional] [default to true]
 **unprocessed** | **Boolean**| Show unprocessed alerts | [optional] [default to true]
 **filter** | [**[String]**](String.md)| A list of matchers to filter alerts by | [optional] 
 **receiver** | **String**| A regex matching receivers to filter alerts by | [optional] 

### Return type

[**[GettableAlert]**](GettableAlert.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postAlerts

> postAlerts(alerts)



Create new Alerts

### Example

```javascript
import AlertmanagerApi from 'alertmanager_api';

let apiInstance = new AlertmanagerApi.AlertApi();
let alerts = [new AlertmanagerApi.PostableAlert()]; // [PostableAlert] | The alerts to create
apiInstance.postAlerts(alerts, (error, data, response) => {
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
 **alerts** | [**[PostableAlert]**](PostableAlert.md)| The alerts to create | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

