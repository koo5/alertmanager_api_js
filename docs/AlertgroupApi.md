# AlertmanagerApi.AlertgroupApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAlertGroups**](AlertgroupApi.md#getAlertGroups) | **GET** /alerts/groups | 



## getAlertGroups

> [AlertGroup] getAlertGroups(opts)



Get a list of alert groups

### Example

```javascript
import AlertmanagerApi from 'alertmanager_api';

let apiInstance = new AlertmanagerApi.AlertgroupApi();
let opts = {
  'active': true, // Boolean | Show active alerts
  'silenced': true, // Boolean | Show silenced alerts
  'inhibited': true, // Boolean | Show inhibited alerts
  'filter': ["null"], // [String] | A list of matchers to filter alerts by
  'receiver': "receiver_example" // String | A regex matching receivers to filter alerts by
};
apiInstance.getAlertGroups(opts, (error, data, response) => {
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
 **filter** | [**[String]**](String.md)| A list of matchers to filter alerts by | [optional] 
 **receiver** | **String**| A regex matching receivers to filter alerts by | [optional] 

### Return type

[**[AlertGroup]**](AlertGroup.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

